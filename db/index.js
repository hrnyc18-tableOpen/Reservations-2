var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "running1",
  database: "tableopenreservations"
});

module.exports = connection;
