const express = require("express");
const usercontroller = require("../controllers/user.controller");
const userrouter = express.Router();
const identifyuser = require("../middlewares/auth.middleware");

userrouter.post("/follow/:username", identifyuser, usercontroller.followusercontroller);
userrouter.post("/unfollow/:username", identifyuser, usercontroller.unfollowusercontroller);

module.exports = userrouter;
