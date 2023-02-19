const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeviceSchema = new Schema(
  {
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    adminId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    dealerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    deviceId: {
      type: String,
      required: true,
    },
    parameter: {
      type: Number,
      required: true
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


const Device = mongoose.model("device", DeviceSchema);

module.exports = Device;
