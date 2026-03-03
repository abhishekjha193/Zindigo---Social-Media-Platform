const mongoose = require("mongoose");

const followschema = new mongoose.Schema(
  {
    follower: {
      type: String,
    },
    followee: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

followschema.index({follower:1, followee:1},{unique:true})

const followModel = mongoose.model("follows", followschema);

module.exports = followModel;
