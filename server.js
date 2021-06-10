const mongoose = require("mongoose");
const express = require("express");

//pull in express
const app = express();
const PORT = process.env.PORT || 4040;

//parses the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const MONGO_FITNESS =
  process.env.MONGO_FITNESS || "mongodb://localhost/workout";
mongoose.connect(MONGO_FITNESS, {
  //allows users to fall back on old parser if a bug is found in new one
  useNewUrlParser: true,
  useFindAndModify: false,
});

//pulling in API Routes

//telling app what port to listen to
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
