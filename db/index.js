var mysql = require("mysql");

const connection = mysql.createConnection({});

module.exports = connection;
