from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField, HiddenField
import MySQLdb.cursors
import re

app = Flask(__name__)
app.secret_key = "your_secret_key"

app.config["MYSQL_HOST"] = "localhost"
app.config["MYSQL_USER"] = "skystart_admin"
app.config["MYSQL_PASSWORD"] = "My$Password0"  # Enter your MySql password
app.config["MYSQL_DB"] = "skystart"

mysql = MySQL(app)


class CreateInputForm:
    def __init__(self, id, prompt, init_answer):
        self.id = id
        self.prompt = prompt

        class CourseInputForm(FlaskForm):
            input_id = id
            hidden = HiddenField(id)
            input = TextAreaField(render_kw={"placeholder": init_answer})
            submit = SubmitField("Submit")

        self.form = CourseInputForm()


@app.route("/")
@app.route("/login", methods=["GET", "POST"])
def login():
    msg = ""
    if (
        request.method == "POST"
        and "username" in request.form
        and "password" in request.form
    ):
        username = request.form["username"]
        password = request.form["password"]
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(
            "SELECT * FROM users WHERE username = %s AND password = %s",
            (username, password),
        )
        account = cursor.fetchone()
        if account:
            session["loggedin"] = True
            session["id"] = account["id"]
            session["username"] = account["username"]

            cursor.execute(
                f"SELECT * FROM student_in_course WHERE student_id = {account["id"]};"
            )
            course = cursor.fetchone()

            session["course_id"] = course["course_id"]

            cursor.execute(f"Select * from courses where id = {course["course_id"]};")

            course_info = cursor.fetchone()

            session["course_name"] = course_info["name"]
            session["course_description"] = course_info["description"]

            return render_template(
                "index.html",
                msg=f"Logged in successfully, you are in {course["course_id"]}",
            )
        else:
            msg = "Incorrect username/password!"
    return render_template("login.html", msg=msg)


@app.route("/logout")
def logout():
    session.pop("loggedin", None)
    session.pop("id", None)
    session.pop("username", None)
    return redirect(url_for("login"))


@app.route("/register", methods=["GET", "POST"])
def register():
    msg = ""
    if (
        request.method == "POST"
        and "name" in request.form
        and "type" in request.form
        and "username" in request.form
        and "password" in request.form
        and "email" in request.form
    ):
        username = request.form["username"]
        password = request.form["password"]
        email = request.form["email"]
        name = request.form["name"]
        user_type = request.form["type"]
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
        account = cursor.fetchone()
        if account:
            msg = "Account already exists!"
        elif not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            msg = "Invalid email address!"
        elif not re.match(r"[A-Za-z0-9]+", username):
            msg = "Username must contain only letters and numbers!"
        elif not username or not password or not email:
            msg = "Please fill out the form!"
        else:
            cursor.execute(
                "INSERT INTO users VALUES (%s, %s, %s, %s, %s)",
                (user_type, name, username, password, email),
            )
            mysql.connection.commit()
            msg = "You have successfully registered!"
    return render_template("register.html", msg=msg)


@app.route("/course/<course_id>", methods=["GET", "POST"])
def course(course_id):
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    session["course_id"] = course_id
    print(course_id, request.method)
    if request.method == "POST":
        print("REQUEST:")
        print(
            request.form
        )  # ImmutableMultiDict([('question_id', '1'), ('input', 'asdf')])
        response = request.form["input"]
        course_input_id = request.form["question_id"]
        cursor.execute(
            f"UPDATE course_input SET input = '{response}' WHERE input_id = {course_input_id};"
        )
        mysql.connection.commit()

        print(
            f"UPDATE course_input SET input = '{response}' WHERE input_id = {course_input_id};"
        )

        check = cursor.fetchone()
        if check:
            print("Change saved!")

    cursor.execute(f"select name, description from courses where id = {course_id};")
    course_info = cursor.fetchone()
    session["course_name"] = course_info["name"]
    session["course_description"] = course_info["description"]

    cursor.execute(
        f"SELECT * FROM course_input WHERE course_id = {session["course_id"]} AND student_id = {session["id"]};"
    )
    prompts = cursor.fetchall()
    questions = list()
    print("Prompts: ")
    prompts_added = 0
    prompts_answered = 0
    for i in prompts:
        print(i)
        prompts_answered += i["input"] is not None
        prompts_added += 1
        questions.append(CreateInputForm(i["input_id"], i["intput_type"], i["input"]))

    if not prompts_added:
        msg = f"Progress: 100%"
    else:
        msg = f"Progress: {prompts_answered / prompts_added * 100 :.2f}%"
    print(msg)

    return render_template("course.html", questions=questions, msg=msg)


@app.route("/student_dashboard", methods=["GET"])
def student_dashboard():
    cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
    cursor.execute(
        f"SELECT SUM(amount) FROM financial WHERE project_id = (SELECT project_id FROM project_owners WHERE user_id = {session["id"]} limit 1);"
    )
    total_revenue = cursor.fetchone()

    cursor.execute(
        f"SELECT username FROM users WHERE id = (Select mentor_id FROM mentor_assignment where student_id = {session["id"]} limit 1);"
    )
    mentor = cursor.fetchone()

    cursor.execute(
        f"Select c.id, name from courses c left join student_in_course s on c.id = s.course_id where s.student_id = {session["id"]};"
    )
    courses = cursor.fetchall()

    cursor.execute(
        f"Select count(*) from course_input where student_id = {session["id"]};"
    )
    all_inputs = cursor.fetchone()

    cursor.execute(
        f"Select count(*) from course_input where student_id = {session["id"]} and input is not null;"
    )
    answered_input = cursor.fetchone()

    print(total_revenue)
    print(mentor)
    print(courses)
    print(all_inputs, answered_input)

    dashboard_content = dict()
    dashboard_content["total_revenue"] = total_revenue["SUM(amount)"]
    dashboard_content["mentor"] = mentor["username"]
    dashboard_content["courses"] = [(x["id"], x["name"]) for x in courses]
    dashboard_content["progress"] = (
        f"{answered_input["count(*)"] / all_inputs["count(*)"] * 100 :.2f}%"
    )

    return render_template(
        "student_dashboard.html", dashboard_content=dashboard_content
    )


if __name__ == "__main__":
    app.run(debug=True)
