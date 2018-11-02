const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db/index.js");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist"));

app.listen(8080);
console.log("listening on 8080");

app.get("/reservations/:id", (req, res) => {
  // id form the url
  console.log(req.params);
  // data I include in the request
  console.log(req.query);

  db.query(
    //   `
    //   SELECT * FROM tables
    //   WHERE seats = ${req.query.partysize} and id_restaurants = ${req.params.id};
    // `,
    `
    SELECT seats, id_restaurants, starttime, endtime, resdate
    FROM tables
    INNER JOIN bookings
    ON tables.id = id_tables
    WHERE seats = ${req.query.partysize} and id_restaurants = ${req.params.id}
    and starttime >= "06:15:00" and starttime <= "08:15:00" and resdate = "${
      req.query.dateSelected
    }";
  `,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    }
  );
});

app.get("/restaurants/*", (req, res) => {
  res.sendFile(path.resolve("dist/index.html"));
});
