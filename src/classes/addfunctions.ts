import pool from '../config/connection.js';
import inquirer from "inquirer";
import promptuseractions from './useroptions.js';



// Add Department
export async function addDepartment() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter the name of the new department:',
      },
    ]);
  
    try {
      const res = await pool.query('INSERT INTO departments (dept_name) VALUES ($1) RETURNING *', [answers.departmentName]);
      console.log('Department added:', res.rows[0]);
      promptuseractions();
    } catch (err) {
      console.error(err);
    }
  }



// Add Role
export async function addRole() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'roleTitle',
        message: 'Enter the title of the new role:',
      },
      {
        type: 'input',
        name: 'roleSalary',
        message: 'Enter the salary for the new role:',
      },
      {
        type: 'input',
        name: 'departmentId',
        message: 'Enter the department ID for the new role:',
      },
    ]);
  
    try {
      const res = await pool.query(
        'INSERT INTO roles (job_title, salary, deptid) VALUES ($1, $2, $3) RETURNING *',
        [answers.roleTitle, answers.roleSalary, answers.departmentId]
      );
      console.log('Role added:', res.rows[0]);
      promptuseractions();
    } catch (err) {
      console.error(err);
    }
  }

// Add Employee
export async function addEmployee() {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'firstName',
        message: 'Enter the first name of the new employee:',
      },
      {
        type: 'input',
        name: 'lastName',
        message: 'Enter the last name of the new employee:',
      },
      {
        type: 'input',
        name: 'roleId',
        message: 'Enter the role ID for the new employee:',
      },
      {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager ID for the new employee (leave blank if none):',
      },
    ]);
  
    try {
      const res = await pool.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager) VALUES ($1, $2, $3, $4) RETURNING *',
        [answers.firstName, answers.lastName, answers.roleId, answers.managerId || null]
      );
      console.log('Employee added:', res.rows[0]);
      promptuseractions();
    } catch (err) {
      console.error(err);
    }
  }


// Update Employee
export async function updateEmployee() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee you want to update:',
        },
        {
            type: 'list',
            name: 'field',
            message: 'Which field do you want to update?',
            choices: ['first_name', 'last_name'],
        },
        {
            type: 'input',
            name: 'newValue',
            message: 'Enter the new value:',
        },
    ]);

    try {
      console.log(`UPDATE employees SET ${answers.field} = ${answers.newValue} WHERE id = ${answers.employeeId} RETURNING *`,
            )
        const res = await pool.query(
            `UPDATE employees SET ${answers.field} = $1 WHERE employee_id = $2 Returning *`,
            [answers.newValue, answers.employeeId]
        );
        console.log('Employee updated:', res.rows[0]);
        promptuseractions();
    }
    catch (err) {
        console.error(err);
    }
}
