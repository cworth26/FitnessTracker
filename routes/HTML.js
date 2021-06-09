const express = require("express");
const path = require("path");

//exporting info to specific routes
module.exports = function (app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
};
