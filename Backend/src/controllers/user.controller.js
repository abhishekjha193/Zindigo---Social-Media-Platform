const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followusercontroller(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  //self follow prevent
  if (followerUsername === followeeUsername) {
    return res.status(400).json({
      message: " You cannot follow yourself ",
    });
  }

  //Preventing duplicate follow
  const existingFollow = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (existingFollow) {
    return res.status(400).json({
      message: `Already following ${followeeUsername}`,
    });
  }

  //user req to follow user exists or not
  const isfolloweeExists = await userModel.findOne({
    username: followeeUsername,
  });

  if (!isfolloweeExists) {
    return res.status(404).json({
      message: " User you are trying to follow does not exists ",
    });
  }

  const followrecord = await followModel.create({
    follower: followerUsername,
    followee: followeeUsername,
  });

  res.status(201).json({
    message: ` you are now following ${followeeUsername} 🎊 `,
    follow: followrecord,
  });
}

async function unfollowusercontroller(req, res) {
  const followerUsername = req.user.username;
  const followeeUsername = req.params.username;

  const isuserfollowing = await followModel.findOne({
    follower: followerUsername,
    followee: followeeUsername,
  });

  if (!isuserfollowing) {
    return res.status(404).json({
      message: ` 🚫 You are not following ${followeeUsername} `,
    });
  }

  await followModel.findByIdAndDelete(isuserfollowing._id);

  return res.status(200).json({
    message: ` You have unfollowed ${followeeUsername} sucessfully ✅ `,  
  });
}

module.exports = {
  followusercontroller,
  unfollowusercontroller,
};

