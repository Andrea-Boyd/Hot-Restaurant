var express = require("express");

var app = express();
var PORT = process.env.PORT || 3000;
var PORT = 3000;

app.use(express.urlencoded({ extended: true 
app.use(express.json());




var tables = [{
  routeName: "reservation",
  name: " ",
  phoneNumber: " ",
  Email: " ",
  forcePoints: 2000
 
  //   routeName: "darthmaul",
  //   name: "Darth Maul",
  //   role: "Sith Lord",
  //   age: 200,
  //   forcePoints: 1200
  // }, {
  //   routeName: "obiwankenobi",
  //   name: "Obi Wan Kenobi",
  //   role: "Jedi Knight",
  //   age: 60,
  //   forcePoints: 1350
  }];

  // // Routes
  // // ===========================================================
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
  });

  app.get("/:character", function (req, res) {
    var chosen = req.params.character;

    // What does this log?
       console.log(chosen);

    //   res.end();
 });