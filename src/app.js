const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("started");
});
app.get("/test", (req, res) => {
  res.send("test");
});
app.get("/zzz", (req, res) => {
  res.send("zzz");
});

app.listen(3000, () => {
  console.log("running on 3000");
});
