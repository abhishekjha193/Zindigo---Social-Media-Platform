const postmodel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");
const likemodel = require("../models/like.model");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

//create new post
async function createpost(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "ShareSphere",
  });

  const post = await postmodel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
    username: req.user.username
  });

  res.status(201).json({
    message: "Post Created succesfully",
    post,
  });
}

//fetch post
async function getpost(req, res) {
  const userid = req.user.id;

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
  const userid = req.user.id;

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

//like the post
async function likepost(req, res) {
  const username = req.user.username;
  const postid = req.params.postid;

  const post = await postmodel.findById(postid);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  const like = await likemodel.create({
    post: postid,
    user: username,
  });

  res.status(200).json({
    message:"post liked successfully",
    like
  })
}

module.exports = { createpost, getpost, postdetail, likepost };
