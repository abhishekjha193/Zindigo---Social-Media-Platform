const usermodel = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");


async function registercontroller(req, res){
 const { email, username, password, bio, profileimage } = req.body;

  //to find grab username and email
  const isuserExistbyEmail = await usermodel.findOne({
    $or: [{ username }, { email }],
  });

  //to print based on conditions
  if (isuserExistbyEmail) {
    return res.status(409).json({
      message:
        "user already exists" +
        (isuserExistbyEmail.email === email
          ? " , This email is already taken try another"
          : " , This username is already taken try another"),
    });
  }

  const hash = await bcrypt.hash(password,10);

  const user = await usermodel.create({
    username,
    email,
    bio,
    profileimage,
    password: hash,
  });

  //jab user ho aur unique ho tab token create karo
  const token = jwt.sign(
    {
      id: user._id,
      username:user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "365d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User Registered Successfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileimage: user.profileimage,
    },
  });
}

async function logincontroller (req, res) {
 const { username, email, password } = req.body;

  //check username or email
  const user = await usermodel.findOne({
    $or: [{ username: username }, { email: email }],
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  const passwordvalid = await bcrypt.compare(password,user.password);

  if (!passwordvalid) {
    return res.status(401).json({
      message: "password is invalid",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username
    },
    process.env.JWT_SECRET,
    { expiresIn: "365d" },
  );

  res.cookie("token",token)

  res.status(200).json({
    message:"User LoggedIn Sucessfully",
    user:{
      username:user.username,
      email:user.email,
      bio:user.bio,
      profileimage: user.profileimage
    }
  })
}

module.exports = {
    registercontroller,
    logincontroller
}