
CREATE DATABASE employee_tracker;
\c employee_tracker;

CREATE TABLE departments(
    id SERIAL NOT NULL PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL

);


CREATE TABLE roles(
    role_id SERIAL NOT NULL PRIMARY KEY,
    job_title VARCHAR(100) NOT NULL,
    salary NUMERIC(15,2) NOT NULL,
    deptid INT NOT NULL,
    FOREIGN KEY (deptid) REFERENCES departments(id)
);


CREATE TABLE employees(
     employee_id SERIAL NOT NULL PRIMARY KEY,
     first_name VARCHAR(100) NOT NULL,
     last_name VARCHAR(100) NOT NULL,
     role_id INT,
     manager INT,
     FOREIGN KEY (role_id) REFERENCES roles(role_id),
     FOREIGN KEY (manager) REFERENCES employees(employee_id)

);

