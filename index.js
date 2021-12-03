const mysql = require('mysql2');
const inquirer = require('inquirer');
// print table package
const { printTable } = require('console-table-printer');

// select port to listen to
const PORT = process.env.PORT || 3001;
