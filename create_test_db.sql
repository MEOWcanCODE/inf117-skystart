DROP DATABASE IF EXISTS geeklogin;
CREATE DATABASE IF NOT EXISTS geeklogin;

use geeklogin;

CREATE TABLE IF NOT EXISTS accounts (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

CREATE USER 'skystart_admin'@'localhost' IDENTIFIED BY 'My$Password0';
GRANT ALL ON geeklogin.* TO 'skystart_admin'@'localhost';
FLUSH PRIVILEGES;