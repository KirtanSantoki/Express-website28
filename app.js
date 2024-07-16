const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/Used", (req, res) => {
  res.send("Here are used Cars");
});

app.get("/Used/Sedan", (req, res) => {
  res.send("Here are Sedan Cars");
});
app.get("/Used/SUV", (req, res) => {
  res.send("Here are SUV Cars");
});

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/Views/home.html");
});
app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/Views/about.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/Views/contact.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
