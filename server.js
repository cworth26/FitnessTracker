const mongoose = require("mongoose");
const express = require("express");

//pull in express
const app = express();
const PORT = process.env.PORT || 4040;

//parses the body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  //allows users to fall back on old parser if a bug is found in new one
  useNewUrlParser: true,
  useFindAndModify: false,
});

//pulling in API Routes

app.use(require("./routes/API.js"));
app.use(require("./routes/HTML.js"));

//telling app what port to listen to
app.listen(PORT, function () {
  console.log(`App listening on PORT ${PORT}`);
});
