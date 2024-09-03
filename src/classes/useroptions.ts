import inquirer from "inquirer";
import { viewAllDepartments, viewAllRoles, viewAllEmployees} from "./display.js"
import { addDepartment, addRole,addEmployee,updateEmployee } from "./addfunctions.js";



//User Actions
export default function promptuseractions(){
    inquirer
.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View All Departments',
        'View All Roles',
        'View All Employees',
        'Add a Department',
        'Add a Role',
        'Add an Employee',
        'Update Employee',
        'Quit'

      ]
    }
  ])
.then((answers) => {
    switch (answers.action) {
      case 'View All Departments':
        // Call function to view all departments
        viewAllDepartments();
    
        break;
      case 'View All Roles':
        // Call function to view all roles
        viewAllRoles();
    
        break;
      case 'View All Employees':
        // Call function to view all employees
         viewAllEmployees();
           break;
      case 'Add a Department':
        // Call function to add a department
         addDepartment();
          break;
      case 'Add a Role':
        // Call function to add a role
        addRole();
        break;
      case 'Add an Employee':
        // Call function to add an employee
        addEmployee();
        break;
       case 'Update Employee':
        // Update an employee
        updateEmployee();
        break;

        case 'Quit':
            console.log('Goodbye!');
            break;
      default:
        console.log('Invalid action');
    }

  });
}

