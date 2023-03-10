const express = require("express");
const router = express.Router();
const app = express();
const { check } = require('express-validator');
const AUTH = require('../controller/auth');
app.use('/api',router);
const  User  = require("../models/user");

router.post('/register',[
    check('name', 'Please enter a valid name').trim().notEmpty().isString(),
    check('email', 'Please enter a valid email').trim().normalizeEmail().isEmail(),
    check('phone_no', 'Please enter a valid phone number').trim().notEmpty().isNumeric(),
    check('address', 'Please enter a valid address').trim().notEmpty().isString(),
    check('password', 'Password must include one lowercase character, one uppercase character, a number, a special character and minimum length of 8 characters.').notEmpty().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    check('confirmPassword', 'Please enter confirm password').notEmpty(),
], AUTH.postUser);


router.post("/login", async (req, res) => {
    try {
      console.log(req.body.email, req.body.password)
        if (!req.body.email) return res.status(400).send({status:0, message:"Email is required"})
        if (!req.body.password) return res.status(400).send({status:0, message:"Password is required"})

        User.findOne({ email: req.body.email }, (err, user) => {
          if (err) return res.json({ success: false });
          if (!user)
            return res.status(400).json({
              isAuth: false,
              message: "Email Not Found"
            });
          if (user) {
            user.comparePassword(req.body.password, (err, isMatch) => {
              if (err) return res.json({ success: false });
              if (!isMatch)
                return res.status(400).json({
                  isAuth: false,
                  message: "Wrong email or password"
                });
              user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("auth", user.token).send({
                  isAuth: true,
                  accessToken: user.token,
                  id: user._id,
                  role:user.role,
                  level:user.level,
                  email: user.email,
                  name: user.name
                });
              });
            });
          }
        });
    
    } catch (err) {
      console.log(err);
      res.status(400).json(err);
    }
  });

module.exports = router;
