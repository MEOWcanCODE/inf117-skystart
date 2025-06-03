drop database if exists skystart;

create database skystart;

use skystart;

create table organizations (
	id int not null auto_increment primary key,
    name varchar(100) not null,
    address varchar(200) not null,
    username varchar(50) not null,
    password varchar(100) not null,
    email varchar(100) not null
);

create table users (
	id int not null auto_increment primary key,
    type varchar(50) not null,
    name varchar(50) not null,
    username varchar(50) not null,
    password varchar(100) not null,
    email varchar(100) not null
);

create table user_in_organizations (
	user_id int not null,
    org_id int not null,
    primary key (user_id, org_id),
    foreign key (user_id) references users(id),
    foreign key (org_id) references organizations(id)
);

create table mentor_assignment (
	mentor_id int not null,
    student_id int not null references users(id),
    primary key (mentor_id, student_id),
    foreign key (mentor_id) references users(id),
    foreign key (student_id) references users(id)
);

create table subscription_plan (
	id int not null auto_increment primary key,
    setup_cost decimal(15,2),
    recurring_cost decimal(15,2),
    cost_schedule varchar(50),
    org_id int not null,
    foreign key (org_id) references organizations(id)
);

create table platform_area_access (
	id int not null auto_increment primary key,
    area_name varchar(100)
);

create table security (
	id int not null auto_increment primary key,
    area_id int not null,
    user_id int not null,
	foreign key (user_id) references users(id),
	foreign key (area_id) references platform_area_access(id) 
);

create table projects (
	id int not null auto_increment primary key,
    name varchar(100) not null,
    type varchar(50),
    website varchar(200),
    description varchar(300)
);

create table project_owners (
    user_id int not null,
    project_id int not null,
    primary key (user_id, project_id),
    foreign key (user_id) references users(id),
    foreign key (project_id) references projects(id)
);

create table financial (
	id int not null auto_increment primary key,
    transaction_id varchar(20) not null,
    transaction_type varchar(50) not null,
    amount decimal(15,2) not null,
    transaction_date date not null,
    project_id int not null,
    foreign key (project_id) references projects(id)
);

create table course_categories (
	id int not null auto_increment primary key,
    name varchar(50)
);

create table courses (
	id int not null auto_increment primary key,
    name varchar(50) not null,
    description varchar(300)
);

create table courses_with_categories (
	course_id int not null,
    category_id int not null,
    primary key (course_id, category_id),
    foreign key (course_id) references courses(id),
    foreign key (category_id) references course_categories(id)
);

create table course_input (
	input_id int not null auto_increment primary key,
    course_id int not null,
    student_id int not null,
    intput_type varchar(50),
    input varchar(300),
    foreign key (course_id) references courses(id),
    foreign key (student_id) references users(id)
);


create table student_in_course (
	student_id int not null,
    organization_id int not null,
    course_id int not null,
    primary key (student_id, organization_id, course_id),
    foreign key (course_id) references courses(id),
    foreign key (organization_id) references organizations(id),
    foreign key (student_id) references users(id)
);

CREATE USER 'skystart_admin'@'localhost' IDENTIFIED BY 'My$Password0';
GRANT ALL ON skystart.* TO 'skystart_admin'@'localhost';
FLUSH PRIVILEGES;