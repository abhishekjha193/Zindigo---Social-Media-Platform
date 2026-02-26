const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username:{
        type : String,
        unique : [true , "username already exists" ],
        required:[true, "username is required" ]
    },
    email:{
        type : String,
        unique : [true , "email already exists" ],
        required:[true, "email is required" ]
    },
    password:{
        type : String,
        required:[true, "password is required" ]
    },
    bio:{
        type : String,
        default: "Hey Here , I Am Using ShareSphere plateform"
    },
    profileimage:{
        type : String,
        default: "https://ik.imagekit.io/me5kodcnuw/user.webp?updatedAt=1771048910212"
    }

})

const usermodel = mongoose.model("user",userschema)

module.exports = usermodel







