const mysql = require('mysql2');
const inquirer = require('inquirer');

//const connection = require('./config/connection');

// print table package
const { printTable } = require('console-table-printer');

const department = require('./lib/department');
const role = require('./lib/role');
const employee = require('./lib/employee');


const questions = async () => {
 await inquirer .prompt([
        {
          type: "list",
          name: "dbChoices",
          message: `What would you like to do?`,
          choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Exit",
        ],
      },
    ])

    .then((data) => {
        console.log(data)
      
      if (data.initial === 'View all departments') {
        console.log("View department");
        department.viewDepartment();
        questions();
    
      }
    
    else if (data.initial === 'Add a department') {
        const order = async () => {
        console.log("add department");
        await department.addDepartment();
        await questions();
        }
        order();
      }

      else if (data.initial === 'View all employees') {
        console.log("view employees");
        employee.viewEmployees();
        questions();
      }

      else if (data.initial === 'Add an employee') {
        const order = async () => {
          console.log("add employee");
          await employee.addEmployee();
          await questions();
          }
          order();
      } 

      else if (data.initial === 'View all roles') {
        console.log("View roles");
        role.viewRole();
        questions();
      }

      else if (data.initial === 'Add a role') {
        const order = async () => {
          console.log("add role");
          await role.addRole();
          await questions();
          }
          order();
      }

      else if (data.initial === 'Exit') {
        return
        }


    })
      .catch((error) => {
        console.log(error)
        })
    
    };
       

module.exports = { questions }
