const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user'
    },
    level:{
        type: Number,
        default: 4
    },
    adminId:{
       type: mongoose.Schema.Types.ObjectId,
    },
    phone_no: {
      type: Number,
    },
    token: {
        type: String
    },
    password:{
      type: String,
      required: true
    },
    email:{
      type: String,
      required: true
    },
    address:{
      type: String,
      required: true
    },
    isRegisterd: {
      type: Number,
        enum : [0,1],
        default: 1
    },
  },

  {
    timestamps: true,
    versionKey: false,
  }
);


UserSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
      if (err) cb(err);
      cb(null, isMatch);
    });
  };
  
  UserSchema.methods.generateToken = function (cb) {
    var user = this;
    var token = jwt.sign(user._id.toHexString(),"SUPERSECRETPASSWORDFORJWT");
    user.token = token;
    user.save(function (err, user) {
      if (err) return cb(err);
      cb(null, user);
    });
  };


const User = mongoose.model("users", UserSchema);

module.exports = User;
