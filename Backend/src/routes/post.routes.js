const express = require("express")
const postRouter = express.Router()
const postcontroller = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})
const identifyuser = require("../middlewares/auth.middleware")


postRouter.post("/", upload.single("image"), identifyuser , postcontroller.createpost)

postRouter.get("/", identifyuser , postcontroller.getpost)

postRouter.get("/details/:postid", identifyuser , postcontroller.postdetail)

postRouter.post("/like/:postid", identifyuser , postcontroller.likepost)

module.exports = postRouter