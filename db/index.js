var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "running1",
  database: "tableopenreservations"
});

function getRez() {
  connection.query();
}

module.exports = connection;
