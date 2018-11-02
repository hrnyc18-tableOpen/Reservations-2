const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

app.listen(8080);
console.log("listening on 8080");

app.get("/reservations/:id", (req, res) => {
  console.log(req.params);
  console.log(req.query);
});

app.get("/restaurants/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});
