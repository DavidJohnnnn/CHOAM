// jshint esversion:6

import { createRequire } from "module"; // Bring in the ability to create the 'require' method
const require = createRequire(import.meta.url); // construct the require method

// use the require method for importing Team.json and Investments.json
const teamload = require("./Team.json");
const investload = require("./Investments.json");

const team = [...teamload];
const investments = [...investload];



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
  res.render("Investments", {investdata: investments});
});

app.get("/Team", function (req, res) {
  res.render("Team", {teamdata: team});
});

app.get("/Contact", function (req, res) {
  res.render("Contact");
});


/* Following involves Teams list (for a dynamic list of team members, locally saved) */

let names = []
team.map((item)=>{
  names.push(item.profile.name);
});

team.map((item) => {
  let link = "/" + item.profile.name;
  link = encodeURI(link);
  app.get(link, function (req, res) {
    res.render("TeamMember", {tList : names, member : item});
  });
});














app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Our server is on and listening");
});
