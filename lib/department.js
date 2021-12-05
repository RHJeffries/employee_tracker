const inquirer = require('inquirer');

const { conn } = require('../config/connection');

const viewDepartment = async () => {
    const connection = await conn();
    connection.connect(function(err) {if (err) throw err;
    var query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
      if (err) throw err;
      printTable();
      
   
    });
})
}
  

const addDepartment = async () => {
    await inquirer
      .prompt({
        type: "input",
        message: "What department would you like to add?",
        name: "department"
      })
      .then((data) => {
        const connection = conn();
        connection.connect(function(err) {if (err) throw err;
        const department = res.department;
        const query = `INSERT INTO department (name) VALUES("${department}")`;
        connection.query(query, function(err, res) {
          if (err) throw err;
          viewDepartment();
        });
      });
    })
  }

module.exports = {viewDepartment, addDepartment}  