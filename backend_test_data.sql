use skystart;

insert into users (type, name, username, password, email) values ('student', 'student', 'student@email.com', 'student', 'student@email.com');
insert into users (type, name, username, password, email) values ('mentor', 'mentor', 'mentor@email.com', 'mentor', 'mentor@email.com');

insert into organizations (name, address, username, password, email) values ('uci', 'irvine', 'uci@email.com', 'test', 'test@email.com');
insert into courses (name, description) values ('Sample01', 'This is a sample course.');
insert into courses (name) values('sample02');
insert into student_in_course (student_id, organization_id, course_id) values (1, 1, 1);
insert into student_in_course (student_id, organization_id, course_id) values (1, 1, 2);
insert into course_input (course_id, student_id, intput_type, input) values (1, 1, 'text', 'test input text');
insert into course_input (course_id, student_id, intput_type, input) values (1, 1, 'null_prompt_1', null);
insert into course_input (course_id, student_id, intput_type, input) values (1, 1, 'null_prompt_2', null);

insert into projects(name) values ('test_project');
insert into financial(transaction_id, transaction_type, amount, transaction_date, project_id) values ('bank1', 'credit', 100, DATE("2017-06-15"), 1);
insert into financial(transaction_id, transaction_type, amount, transaction_date, project_id) values ('bank2', 'dedit', 200, DATE("2017-06-15"), 1);

insert into project_owners(user_id, project_id) values (1, 1);

insert into mentor_assignment values (2, 1);