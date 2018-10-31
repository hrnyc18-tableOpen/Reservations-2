const db = require("./index.js");

// seed tables table
// create function to generate random number of seating availablebility for 2, 4, 6 people

// choose number of each type of table between 4-10
// need rest id and normal id too

// for res

// generate random open time before 12 - 5
// generate random close time between 9 - 12

// generate random date

// start time
// end time

var restaurantList = [
  "Frenchette",
  "Xi'an",
  "Le Coucou",
  "Wildair",
  "Uncle Boons",
  "Prince Street Pizza",
  "Katz Delicatessen",
  "Atla",
  "Via Carota",
  "Superiority Burger",
  "Alidoro",
  "Blacktap",
  "Cafe Altro Paradiso",
  "Hale and Hearty",
  "Essen",
  "Blue Ribber Fried Chicken",
  "Madame Vo",
  "Grey Dog",
  "Tim Ho Wan",
  "Rosartio",
  "Momofuku",
  "Ippudo",
  "Tatsu",
  "Shuko",
  "Los Tacos",
  "Nur",
  "The Mill",
  "Sadelles",
  "Amelia's Diner",
  "Ivan Ramen",
  "John's Pizza",
  "Gotan",
  "Sanpanino",
  "Kaffe 1668",
  "The Grill",
  "Paul's Da Burger",
  "Kingston Hall",
  "Victor's Cafe",
  "Torishin",
  "Lilia",
  "OatMeals",
  "Juice Press",
  "Wichcraft",
  "Brodo",
  "Salud",
  "Oscars",
  "Dr. Smood",
  "Iconic Cafe",
  "Clinton Street Bakery"
];

// function totalTables() {
//   return Math.floor(Math.random() * 50 + 5);
// }

function randomRestaurant() {
  var i = Math.floor(Math.random() * 50);
  return restaurantList[i];
}

function insertDummyDataRestaurant() {
  var res = randomRestaurant();

  db.query(
    `
      INSERT INTO restaurants (name)
      VALUES (?)
    `,
    [res],
    (err, data) => {
      if (err) {
        console.log("seed restaurants err: ", err);
      } else {
        console.log(data);
      }
    }
  );
}

insertDummyDataRestaurant();

// *********************

function tableGenerator() {
  var sizes = [2, 4, 6];
  var i = Math.random() * 3;
  return sizes[i];
}

function insertDummyDataTables() {
  var id_restaurant;

  db.query(
    `
    SELECT id from restaurants
  `,
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        id_restaurant = data;
      }
    }
  );

  function tableNum() {
    Math.floor(Math.random() * 20 + 8);
  }

  var num = tableNum();

  for (var i = 0; i <= num; i++) {
    db.query(
      `
      INSERT INTO tables (seat, id_restaurant)
      VALUES (?, ?)
    `,
      [],
      (err, data) => {
        if (err) {
          console.log("seed tables err: ", err);
        } else {
          callback(null, data);
        }
      }
    );
  }
}
