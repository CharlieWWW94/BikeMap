const mapRouter = require("../routes/mapRouter");
const userRouter = require("../routes/userRouter");
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const app = express();

//This prevents cors errors in the browser.
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cookieParser());
app.use(express.json());
app.use(
  session({
    key: "userId",
    secret: "123",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

app.use("/map-info", mapRouter);
app.use("/user", userRouter);

app.listen(5001);
