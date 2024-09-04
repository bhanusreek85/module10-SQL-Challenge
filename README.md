# Employee Management System
## Description
The Employee Management System is a command-line application that allows users to manage a company's employee database. Users can view departments, roles, and employees, as well as add new departments, roles, and employees, and update employee information.

## Features
      View all departments
      View all roles
      View all employees
      Add a department
      Add a role
      Add an employee
      Update employee information
## Installation
Clone the repository:
```sh
git clone git@github.com:bhanusreek85/module10-SQL-Challenge.git
   ```
Navigate to the project directory:
```sh
cd module10-SQL-Challenge
   ```
Install the dependencies:
```sh
npm install
   ```
## Database Setup
Install PostgreSQL on your machine if you haven't already. You can download it from here.
1. Create a new database:
 ```sh
createdb employee_tracker
   ```
2. Connect to the database:
 ```sh
psql -d employee_tracker
   ```
3. Create the necessary tables:
```sql
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
```
## Usage
1. Start the application:
node index.js
2. Follow the prompts to perform various actions such as viewing or adding departments, roles, and employees.
## File Structure
      index.js : The entry point of the application.
      useroptions.ts : Contains the user prompt logic and action handling.
      display.js : Contains functions to display departments, roles, and employees.
      addfunctions.js : Contains functions to add departments, roles, and employees.
## Example
```sh
    ? What would you like to do? (Use arrow keys)
    ❯ View All Departments
      View All Roles
      View All Employees
      Add a Department
      Add a Role
      Add an Employee
      Update Employee
      Quit
```      
## Prerequisites
    Node.js installed on your machine.
    npm (Node Package Manager) installed.
    PostgreSQL installed and configured.

## License
This project is licensed under the MIT License - see the LICENSE file for details.