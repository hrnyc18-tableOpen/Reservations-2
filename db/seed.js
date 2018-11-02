const db = require("./index.js");

// function createNames() {
//   var restaurantList = [];
//   var name1 = ["Marias", "Rileys", "Matts", "Nicks", "Bobs"];
//   var name2 = [
//     "Bar",
//     "Tavern",
//     "Bakery",
//     "Ristorante",
//     "Tacos",
//     "Snacks",
//     "Tapas",
//     "Fusion",
//     "Inn",
//     "Pizza"
//   ];

//   for (var i = 0; i < name1.length; i++) {
//     for (var j = 0; j < name2.length; j++) {
//       restaurantList.push(`${name1[i]} ${name2[j]}`);
//     }
//   }

//   return restaurantList;
// }

// function insertDummyDataRestaurant() {
//   var restaurantList = createNames();

//   for (var i = 0; i < restaurantList.length; i++) {
//     db.query(
//       `
//         INSERT INTO restaurants (name)
//         VALUES (?)
//       `,
//       [restaurantList[i]],
//       (err, data) => {
//         if (err) {
//           console.log("seed restaurants err: ", err);
//         } else {
//           console.log(data);
//         }
//       }
//     );
//   }
// }

// insertDummyDataRestaurant();

// ************************************************************************
// ************************************************************************
// ************************************************************************

// seed tables table

// function tableGenerator() {
//   var sizes = [2, 4, 6];
//   var i = Math.floor(Math.random() * 3);
//   return sizes[i];
// }

// function tableNum() {
//   return Math.floor(Math.random() * 20 + 8);
// }

// function insertDummyDataTables() {
//   for (var i = 1; i < 51; i++) {
//     var id_restaurant = i;
//     var num = tableNum();

//     for (var j = 0; j <= num; j++) {
//       var tableSize = tableGenerator();

//       db.query(
//         `
//         INSERT INTO tables (seats, id_restaurants)
//         VALUES (?, ?)
//       `,
//         [tableSize, id_restaurant],
//         (err, data) => {
//           if (err) {
//             console.log("seed tables err: ", err);
//           } else {
//             console.log(data);
//           }
//         }
//       );
//     }
//   }
// }

// insertDummyDataTables();

// // ************************************************************************
// // ************************************************************************
// // ************************************************************************

// // seed bookings tables

// function startTimeGenerator() {
//   var hours = [5, 6, 7, 8, 9, 10, 11];
//   var min = [0.0, 0.25, 0.5, 0.75];
//   var i = Math.floor(Math.random() * 7);
//   var j = Math.floor(Math.random() * 4);

//   return hours[i] + min[j];
// }

// function convertTime(time) {
//   var timeString = time.toString();
//   var newTime;

//   if (timeString.length === 1) {
//     newTime = timeString[0] + ":00";
//   } else {
//     if (timeString[2] === "2") {
//       newTime = timeString[0] + ":15";
//     } else if (timeString[2] === "5") {
//       newTime = timeString[0] + ":30";
//     } else {
//       newTime = timeString[0] + ":45";
//     }
//   }

//   return newTime;
// }

// function makeEndTime(startTime) {
//   var endTime = (parseInt(startTime[0]) + 1).toString() + startTime.slice(1);
//   return endTime;
// }

// function generateDate() {
//   var year = 2018;

//   // var month = Math.floor(Math.random() * 12 + 1);
//   var day = Math.floor(Math.random() * 31 + 1);

//   return `${year}-11-${day}`;
// }

// function insertDummyDataBookings() {
//   for (var i = 0; i < 818; i++) {
//     var id_tables = i;
//     for (var j = 0; j <= 50; j++) {
//       start = startTimeGenerator();
//       starttime = convertTime(start);
//       endtime = makeEndTime(starttime);
//       resdate = generateDate();

//       db.query(
//         `
//         INSERT INTO bookings (starttime, endtime, resdate, id_tables)
//         VALUES (?, ?, ?, ?)
//       `,
//         [starttime, endtime, resdate, id_tables],
//         (err, data) => {
//           if (err) {
//             console.log("insert booking err: ", err);
//           } else {
//             console.log("success");
//           }
//         }
//       );
//     }
//   }
// }

// insertDummyDataBookings();
