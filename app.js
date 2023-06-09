const express = require("express");
const app = express();
const studentRoute = require("./api/routes/student");
const facultyRoute = require("./api/routes/faculty");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://rudnawang07:Rudra143@cluster0.aa2fach.mongodb.net/?retryWrites=true&w=majority"
);

mongoose.connection.on("error", (err) => {
  console.log("Connection failed to Database");
});

mongoose.connection.on("connected", (connected) => {
  console.log("Connected Successfully With Database");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/student", studentRoute);
app.use("/faculty", facultyRoute);

app.use((req, res, next) => {
  res.status(404).json({
    error: "bad request",
  });
});

module.exports = app;
