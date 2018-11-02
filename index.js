const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

app.listen(8080);
console.log("listening on 8080");

app.get("/restaurants/:id", (req, res) => {
  console.log("success");
  console.log(req.params.id);
  console.log(req.query);
});

// app.get("/test", (req, res) => {
//   console.log("in server test");
//   console.log(req.params);
// });

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});
