const mapRouter = require("../routes/mapRouter");
const userRouter = require("../routes/userRouter");
const express = require("express");
const app = express();
app.use(express.json());
//This prevents cors errors in the browser.

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use("/map-info", mapRouter);
app.use("/user", userRouter);

app.listen(5001);
