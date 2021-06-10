const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining my schema
//done
const fitnessSchema = new Schema({
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
        required: "Enter Current Weight",
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
});

const Fitness = mongoose.model("./Fitness", fitnessSchema);

module.exports = Fitness;
