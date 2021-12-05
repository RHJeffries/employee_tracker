const inquirer = require('inquirer');

const { conn } = require('../config/connection');

const viewRole = async () => {
  const connection = await conn();
  connection.connect(function(err) {if (err) throw err;
  var query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    printTable();

    
  });
}
  )}

const addRole = async () => {
   await inquirer
      .prompt([
        {
          type: "input",
          message: "What is the job title to add?",
          name: "title"
        },
        {
          type: "input",
          message: "What is the salary for the position?",
          name: "salary"
        },
        {
          type: "input",
          message: "What is the department ID for this position?",
          name: "departmentID"
        }
      ])
      .then((data) => {
        const connection = conn();
        connection.connect(function(err) {if (err) throw err;
        const title = res.title;
        const salary = res.salary;
        const departmentID = res.departmentID;
        const query = `INSERT INTO role (title, salary, department_id) VALUE("${title}", "${salary}", "${departmentID}")`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          viewRole();
        });
      });
    
  })
}

module.exports = {viewRole, addRole}