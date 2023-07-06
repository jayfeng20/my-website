// require packages
const express = require("express");
const exhbs = require("express-handlebars");
const path = require("path");
const fs = require("fs");

const app = express();
const port = process.env.PORT || 8080;

// configures Express to use Express Handlebars as the view engine and sets the file extension for handlebars templates to .hb
app.set("views", path.join(__dirname, "templates"));

// sets static - CSS
app.use(express.static(path.join(__dirname, "static")));

// sets the file extension to .hbs and disables the default layout and sets partial dir
hbs = exhbs.create({
  extname: ".hbs",
  defaultLayout: false,
  partialsDir: path.join(__dirname, "templates/partials"),
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

// register partials, use sync read bc we need register to finish first before everythign else happens
// hbs.registerPartials(fs.readFileSync(path.join(__dirname, "templates/partials/_main.hbs")));

// send a line to the server
app.get("/", function (req, res) {
  res.render("homepage.hbs");
});

app.listen(port);
console.log("Express started. Listening on port %s", port);
