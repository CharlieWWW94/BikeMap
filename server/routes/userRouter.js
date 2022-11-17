const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const userRouter = Router();

userRouter.post("/create", async (req, res) => {
  const recievedUserName = req.body.username;
  const recievedPw = req.body.password;
  console.log(recievedUserName);

  const hash = await bcrypt.hash(recievedPw, 10);
  console.log(hash);
  console.log("hello");
  const newUser = await User.create({
    username: recievedUserName,
    pwhash: hash,
  });

  if (newUser) {
    res.status(200).send("User successfully created");
  } else {
    res.status(500).send("Something didn't work on our end. Please try again");
  }
});

userRouter.post("/login", async (req, res) => {
  const recievedUserName = req.body.username;
  const recievedPw = req.body.password;
  const currentUser = await User.findOne({
    where: { username: recievedUserName },
  });

  await bcrypt.compare(recievedPw, currentUser.pwhash, function (err, result) {
    console.log(result);
    if (result) {
      res.status(200).send("You are now logged in!");
    } else {
      res.status(400).send("Password is incorrect - please try again");
    }
  });
});

module.exports = userRouter;
