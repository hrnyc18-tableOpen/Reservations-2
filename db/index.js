var mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "rilegan",
  password: "running1",
  database: "tableOpen"
});

const db = connection.connect();

module.exports(db);
