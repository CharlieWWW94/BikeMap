const { Router } = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const userRouter = Router();

userRouter.post("/create", async (req, res) => {
  const recievedUserName = req.body.username;
  const recievedPw = req.body.password;

  const hash = await bcrypt.hash(recievedPw, 10);
  const newUser = await User.create({
    username: recievedUserName,
    pwhash: hash,
  });

  if (newUser) {
    res.status(200).send("User successfully created");
    req.session.user = newUser;
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
      req.session.user = currentUser;
      res.status(200).send("You are now logged in!");
    } else {
      res.status(400).send("Password is incorrect - please try again");
    }
  });
});

userRouter.get("/login", (req, res) => {
  if (req.session.user) {
    res.status(200).send({ loggedIn: true, user: req.session.user });
  } else {
    res.status(200).send({ loggedIn: false });
  }
});

userRouter.get("/logout", (req, res) => {
  if (req.session.user) {
    req.session.user = "";
    res.status(200).send({ loggedIn: false });
  } else {
    res.status(200).send({ loggedIn: false });
  }
});

module.exports = userRouter;
