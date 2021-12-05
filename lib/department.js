const inquirer = require('inquirer');

const connection = require('./config/connection');

const viewDepartment = async () => {
    connection = await connection();
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      printTable(res);
      
      start();
    });
  }

const addDepartment = async () => {
    await inquirer
      .prompt({
        type: "input",
        message: "What department would you like to add?",
        name: "department"
      })
      .then(function(res) {
        const department = res.department;
        const query = `INSERT INTO department (name) VALUES("${department}")`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          console.table(res);
          start();
        });
      });
  }

module.exports = {viewDepartment, addDepartment}  