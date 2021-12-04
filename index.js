const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = require('./config/connection');

// print table package
const { printTable } = require('console-table-printer');

// access classes
const Department = require(__dirname + '/classes/Department.js');
const Role = require(__dirname + '/classes/Role.js');
const Employee = require(__dirname + '/classes/Employee.js');

// select port to listen to
const PORT = process.env.PORT || 3001;


const userPrompt = () => {
    inquirer.prompt([
        {
          type: "list",
          name: "promptSelection",
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
}