const express = require("express");
const router = express.Router();

const Student = require("../model/student");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
  res.status(200).json({
    msg: "this is faculty get request",
  });
});

router.post("/", (req, res) => {
  const student = new Student({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    gender: req.body.gender,
  });

  student
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        newStudent: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
