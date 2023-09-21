// jshint esversion:6

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method
const teamload = require("./Team.json"); // use the require method
const team = [...teamload];
console.log(team);

import express from "express";
import bodyParser from "body-parser";

let app = express();

// Using Team.json for Teams

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/Philosophy", function (req, res) {
  res.render("Philosophy");
});

app.get("/Investments", function (req, res) {
  res.render("Investments");
});

app.get("/Team", function (req, res) {
  res.render("Team", {teamdata: team});
});

app.get("/Contact", function (req, res) {
  res.render("Contact");
});


/* Following involves Teams list (for a dynamic list of team members, locally saved) */

team.map((item) => {
  app.get("/Team" + item.profile.name, function (req, res) {
    //res.render("Team", {teamdata: teams});
  });
  app.get("/Team" + item.profile.name + ".html", function (req, res) {
    //res.render("Team", {teamdata: teams});
  });
});





app.get("/index.html", function (req, res) {
  res.redirect("/");
});

app.get("/Philosophy.html", function (req, res) {
  res.redirect("/Philosophy");
});

app.get("/Investments.html", function (req, res) {
  res.redirect("/Investments");
});

app.get("/Team.html", function (req, res) {
  res.redirect("/Team");
});

app.get("/Contact.html", function (req, res) {
  res.redirect("/Contact");
});














app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Our server is on and listening");
});
