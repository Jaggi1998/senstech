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
