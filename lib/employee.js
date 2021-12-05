const inquirer = require('inquirer');

const { conn } = require('../config/connection');

const viewEmployee = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      printTable();
     
    });
  }
    )}
  

const addEmployee = async () => {
  await inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "firstName"
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "lastName"
      },
      {
        type: "input",
        message: "What is the employee's role ID?",
        name: "roleID"
      },
      {
        type: "input",
        message: "What is the employee's manager ID?",
        name: "managerID"
      }
    ])
    .then((data) => {
        const connection = conn();
        connection.connect(function(err) {if (err) throw err;
      const firstName = res.firstName;
      const lastName = res.lastName;
      const roleID = res.roleID;
      const managerID = res.managerID;
      const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE("${firstName}", "${lastName}", "${roleID}", "${managerID}")`;
      connection.query(query, function(err, res) {
        if (err) throw err;
        viewEmployee();
      });
    })
});
}
module.exports = {viewEmployee, addEmployee}