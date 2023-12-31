const express = require("express");

const app = express();

const home = express.Router();
const about = express.Router();
const contact = express.Router();

// Home Routes defined
app.use("/home", home);
home.get("/", (req, res) => res.send("API is Live!"));
home.get("/user", (req, res) => res.send("/user calling"));
home.get("/group", (req, res) => res.send("/group calling"));
home.get("/post", (req, res) => res.send("/post calling"));

// About Routes defined
app.use("/about", about);
about.get("/:username", (req, res) => res.send(JSON.stringify(req.params)));

// Contact Routes defined
app.use("/contact", contact);
contact.get("/", (req, res) => res.send("API is Live Updated ......!"));

// Default Routes defined
app.get("/", function (req, res) {
  res.send("Express Works");
});

app.listen(3000, function () {
  console.log(`Express Server Started on: http://localhost:3000`);
});
