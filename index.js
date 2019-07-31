const express = require("express");
const api = require("termux");

let app = express();
app.get("/", function(req, res) {
  console.log("Got a request!")
  res.send("Hello World!");
});

let server = app.listen(3000, function() {});
