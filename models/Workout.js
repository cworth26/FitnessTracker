const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining my schema
//done
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Please Enter Exercise Name",
        },
        type: {
          type: String,
          trim: true,
          required: "Please Enter Exercise Type",
        },
        duration: {
          type: Number,
          required: "Enter Exercise Duration",
        },
        weight: {
          type: Number,
          // required: "Enter Current Weight",
        },
        sets: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
  {
    toJSON: { virtuals: true },
  }
);
//virtual will not actually exist in the mongo database
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, (total = 0));
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
