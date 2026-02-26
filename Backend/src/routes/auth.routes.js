const express = require("express");
const usermodel = require("../models/user.model");
const authcontroller = require("../controllers/auth.controller")
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const authrouter = express.Router();

//user register
authrouter.post("/register",authcontroller.registercontroller );

//user login
authrouter.post("/login",authcontroller.logincontroller );

module.exports = authrouter;
