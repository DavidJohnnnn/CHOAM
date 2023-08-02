// jshint esversion:6

let express = require("express");
let bodyParser = require("body-parser");

let app = express();

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
  res.render("Team");
});

app.get("/Contact", function (req, res) {
  res.render("Contact");
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
