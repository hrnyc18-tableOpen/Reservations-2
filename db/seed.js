const db = require("./index.js");

// var restaurantList = [
//   "Frenchette",
//   "Xi'an",
//   "Le Coucou",
//   "Wildair",
//   "Uncle Boons",
//   "Prince Street Pizza",
//   "Katz Delicatessen",
//   "Atla",
//   "Via Carota",
//   "Superiority Burger",
//   "Alidoro",
//   "Blacktap",
//   "Cafe Altro Paradiso",
//   "Hale and Hearty",
//   "Essen",
//   "Blue Ribber Fried Chicken",
//   "Madame Vo",
//   "Grey Dog",
//   "Tim Ho Wan",
//   "Rosartio",
//   "Momofuku",
//   "Ippudo",
//   "Tatsu",
//   "Shuko",
//   "Los Tacos",
//   "Nur",
//   "The Mill",
//   "Sadelles",
//   "Amelia's Diner",
//   "Ivan Ramen",
//   "John's Pizza",
//   "Gotan",
//   "Sanpanino",
//   "Kaffe 1668",
//   "The Grill",
//   "Paul's Da Burger",
//   "Kingston Hall",
//   "Victor's Cafe",
//   "Torishin",
//   "Lilia",
//   "OatMeals",
//   "Juice Press",
//   "Wichcraft",
//   "Brodo",
//   "Salud",
//   "Oscars",
//   "Dr. Smood",
//   "Iconic Cafe",
//   "Clinton Street Bakery"
// ];

// // function totalTables() {
// //   return Math.floor(Math.random() * 50 + 5);
// // }

// function randomRestaurant() {
//   var i = Math.floor(Math.random() * 50);
//   return restaurantList[i];
// }

// function insertDummyDataRestaurant() {
//   var res = randomRestaurant();

//   db.query(
//     `
//       INSERT INTO restaurants (name)
//       VALUES (?)
//     `,
//     [res],
//     (err, data) => {
//       if (err) {
//         console.log("seed restaurants err: ", err);
//       } else {
//         console.log(data);
//       }
//     }
//   );
// }

// insertDummyDataRestaurant();

// *********************

// function tableGenerator() {
//   var sizes = [2, 4, 6];
//   var i = Math.floor(Math.random() * 3);
//   return sizes[i];
// }

// function tableNum() {
//   return Math.floor(Math.random() * 20 + 8);
// }

// function insertDummyDataTables() {
//   var id_restaurant = 2;

//   // db.query(
//   //   `
//   //   SELECT id from restaurants
//   //   WHERE id = 1
//   // `,
//   //   (err, data) => {
//   //     if (err) {
//   //       console.log(err);
//   //     } else {
//   //       id_restaurant = data;
//   //     }
//   //   }
//   // );

//   console.log(id_restaurant);

//   var num = tableNum();

//   console.log(num);

//   for (var i = 0; i <= num; i++) {
//     var tableSize = tableGenerator();

//     db.query(
//       `
//       INSERT INTO tables (seats, id_restaurants)
//       VALUES (?, ?)
//     `,
//       [tableSize, id_restaurant],
//       (err, data) => {
//         if (err) {
//           console.log("seed tables err: ", err);
//         } else {
//           console.log(data);
//         }
//       }
//     );
//   }
// }

// insertDummyDataTables();

// ********************

function hourGenerator() {
  var quarterHours = ["00", "15", "30", "45"];
  var times = [];
  for (var i = 5; i < 12; i++) {
    for (var j = 0; j < 4; j++) {
      times.push(i + ":" + quarterHours[j]);
    }
  }

  return times;
}

function startTimeGenerator() {
  var hours = [5, 6, 7, 8, 9, 10, 11];
  var min = [0.0, 0.25, 0.5, 0.75];
  var i = Math.floor(Math.random() * 7);
  var j = Math.floor(Math.random() * 4);

  return hours[i] + min[j];
}

function convertTime(time) {
  var timeString = time.toString();
  var newTime;

  if (timeString.length === 1) {
    newTime = timeString[0] + ":00";
  } else {
    if (timeString[2] === "2") {
      newTime = timeString[0] + ":15";
    } else if (timeString[2] === "5") {
      newTime = timeString[0] + ":30";
    } else {
      newTime = timeString[0] + ":45";
    }
  }

  return newTime;
}

function makeEndTime(startTime) {
  var endTime = (parseInt(startTime[0]) + 1).toString() + startTime.slice(1);
  return endTime;
}

function generateDate() {
  var year = 2018;

  var month = Math.floor(Math.random() * 12 + 1);
  var day = Math.floor(Math.random() * 31 + 1);

  return `${year}-${month}-${day}`;
}

function insertDummyDataBookings() {
  for (var i = 0; i <= 100; i++) {
    start = startTimeGenerator();
    starttime = convertTime(start);
    endtime = makeEndTime(starttime);
    resdate = generateDate();

    db.query(
      `
      INSERT INTO bookings (starttime, endtime, resdate)
      VALUES (?, ?, ?)
    `,
      [starttime, endtime, resdate],
      (err, data) => {
        if (err) {
          console.log("insert booking err: ", err);
        } else {
          console.log("success");
        }
      }
    );
  }
}

insertDummyDataBookings();

// for res

// generate random open time before 12 - 5
// generate random close time between 9 - 12
// do this later

// generate random date

// start time
// end time
// res date
