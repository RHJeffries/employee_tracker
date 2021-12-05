const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = require('./config/connection');

// print table package
const { printTable } = require('console-table-printer');

const department = require('./lib/department')


const start = async () => {
 await inquirer .prompt([
        {
          type: "list",
          name: "dbChoices",
          message: `What would you like to do?`,
          choices: [
            "View All Department",
            "View All Role",
            "View All Employees",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "EXIT",
        ],
      },
    ])

    .then((data) => {
        console.log(data)
      
      if (data.initial === 'View all departments') {
        console.log("View department");
        departments.viewDepartment();
        questions();
    
      }
    
    else if (data.initial === 'Add a department') {
        const order = async () => {
        console.log("add department");
        await departments.addDepartment();
        await questions();
        }
        order();
      }
    })
      .catch((error) => {
        console.log(error)
        })
    
    };
       


