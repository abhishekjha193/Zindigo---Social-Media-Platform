const express = require("express")
const postRouter = express.Router()
const postcontroller = require("../controllers/post.controller")
const multer = require("multer")
const upload = multer({storage:multer.memoryStorage()})


postRouter.post("/",upload.single("image"), postcontroller.createpost)

postRouter.get("/", postcontroller.getpost)

postRouter.get("/details/:postid", postcontroller.postdetail)


module.exports = postRouter