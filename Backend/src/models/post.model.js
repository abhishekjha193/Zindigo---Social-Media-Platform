const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"img_url is require dfor creating post"]
    },
    user:{
        ref:"users",
        type: mongoose.Schema.Types.ObjectId,
        required: [true, "user id id required for creating a post"]
    }
})

const postModel = mongoose.model("posts",postSchema)

module.exports = postModel


