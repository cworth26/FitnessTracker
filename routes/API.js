const router = require("express").Router();
const database = require("../models");
const { Workout } = database;
//coding router. instead of app. since I am requiring the express Router @ the top

//request for getting ALL workouts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((Workout) => {
      Workout.forEach((workout) => {
        var total = 0;
        workout.exercises.forEach((e) => {
          total += e.duration;
        });
        workout.totalDuration = total;
      });

      res.json(Workout);
    })
    //if there is an error, it will display
    .catch((err) => {
      res.status(400).json(err);
    });
});

//posting the workouts
router.post("/api/", (req, res) => {
  Workout.create({})
    // .find()
    .then((data) => res.json(data))
    //if there is an error, it will display
    .catch((err) => {
      res.json(err);
    });
});

//request for getting RANGE
router.get("/api/workouts/range", (req, res) => {
  Workout.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

//request for posting RANGE
router.post("/api/workouts/range", (req, res) => {
  Workout.create({})
    .then((data) => res.json())
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });

  //route for saving add exercise route
  router.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
});

module.exports = router;
