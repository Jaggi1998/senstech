const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChannelSchema = new Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    channelName: {
      type: String,
      required: true
    },
    channelDisplayName: {
      type: String,
    },
    min: {
      type:Number
    },
    max:{
      type:Number
    },
    prefix:{
      type: String
    },
    postfix: {
      type: String
    },
    channelData:{
        type: Number,
      default: 0
    }
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


const Channels = mongoose.model("chanels", ChannelSchema);

module.exports = Channels;
