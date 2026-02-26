const mongoose = require("mongoose");

async function connecttodb () {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected To DB");
    
}

module.exports = connecttodb; 