const router = require("express").Router();
const database = require("../models");

//request for getting ALL workouts

router.get("/api/workouts", (req, res) => {
  database.Fitness.find()
    .then((workout) => {
      res.status(200).json(workout);
    })
    //if there is an error, it will display
    .catch((err) => {
      res.status(400).json(err);
    });
});
