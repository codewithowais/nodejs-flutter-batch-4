const express = require("express");
const app = express();

app.set("port", process.env.PORT || 9000);

// static folder
app.use("", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  //   res.send("Express Works");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(app.get("port"), function () {
  console.log(`Express Started on: http://localhost:${app.get("port")}`);
});
