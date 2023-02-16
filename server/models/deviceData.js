const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DataSchema = new Schema(
  {
    deviceId: {
      type: String,
      required: true,
    },
    data: {
      type: Number,
      required: true
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


const DeviceData = mongoose.model("deviceData", DataSchema);

module.exports = DeviceData;
