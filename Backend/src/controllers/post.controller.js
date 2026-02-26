const postmodel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

//create new post
async function createpost(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access , Token not Provided",
    });
  }

  let decoded = null;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "user not authorized",
    });
  }

  console.log(decoded);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "ShareSphere",
  });

  const post = await postmodel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: "Post Created succesfully",
    post,
  });
}

//fetch post
async function getpost(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401)({
      message: "unauthorized access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  const userid = decoded.id;

  const posts = await postmodel.find({
    user: userid,
  });

  res.status(200).json({
    message: "Posts Fetched Successfully",
    posts,
  });
}

//view post in detail
async function postdetail(req, res) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401)({
      message: "unauthorized access",
    });
  }

  let decoded = null;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }

  const userid = decoded.id;

  const postid = req.params.postid;

  const post = await postmodel.findById(postid);

  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const validuser = post.user.toString() === userid;

  if (!validuser) {
    return res.status(403).json({
      message: "Forbidden content",
    });
  }
  return res.status(200).json({
    message: "Post Fetched Sucessfully",
    post,
  });
}

module.exports = { createpost, getpost, postdetail };
