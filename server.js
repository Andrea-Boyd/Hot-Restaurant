var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var reservation = [{
  routeName: "reservation",
  name: "name",
  phoneNumber: "phone number",
  Email: "email",
  uniqueID: "id"
}];

var waitlist = [{
  routeName: "waitlist",
  name: "name",
  phoneNumber: "phone number",
  Email: "email",
  uniqueID: "id"
}];




// Routes
// ===========================================================
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservation", function(req, res) {
  return res.json(reservation);
});

app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

app.post("/api/reservation", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newReservation = req.body;

  console.log(newReservation);

  // We then add the json the user sent to the character array
  reservation.push(newReservation);

  // We then display the JSON to the users
  res.json(newReservation);
});


  
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});