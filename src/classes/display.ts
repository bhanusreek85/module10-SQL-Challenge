import pool from '../config/connection.js';
import promptuseractions from './useroptions.js';


//Get Departments
export async function viewAllDepartments() {
    try {
        const res = await pool.query('SELECT * FROM departments');
        console.table(res.rows);
        promptuseractions();
      } catch (err) {
        console.error(err);
      }  
}

//Get roles
export async function viewAllRoles() {
    try {
        const res = await pool.query('SELECT * FROM roles');
        console.table(res.rows);
        promptuseractions();
      } catch (err) {
        console.error(err);
      }  
}


//Get Employees
export async function viewAllEmployees() {
    try {
        const sql = "SELECT e.employee_id, e.first_name AS \"first name\", e.last_name AS \"last name\", r.job_title, d.dept_name AS department, r.salary, m.first_name || ' ' || m.last_name AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.role_id LEFT JOIN departments d ON r.deptid = d.id LEFT JOIN employees m ON m.employee_id = e.manager;"
        const res = await pool.query(`${sql}`);
        console.table(res.rows);
        promptuseractions();
      } catch (err) {
        console.error(err);
      } 
}
