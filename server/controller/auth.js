const User = require("../models/user");
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');


exports.postUser = async (req, res) => {
  const errors = validationResult(req);
       
  if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})

  const {phone_no, name ,email, password, address, confirmPassword } = req.body;
  
  const checkPhone = await User.findOne({phone_no})
  if (checkPhone) {return res.status(400).send({status:0,msg:"This Phone number is already exist"}) } 
  const checkEmail = await User.findOne({email})
  if (checkEmail) {return res.status(400).send({status:0,msg:"Email already exist"}) } 
  if (password !== confirmPassword) {return res.status(400).send({status:0,msg:"Password did not match"}) } 
 
        const newUser = new User({ name, email, phone_no, address, password });
        
        bcrypt.genSalt(12, (err, salt) => {
            if(err) console.error('There was an error', err);
            else {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if(err) console.error('There was an error', err);
                    else {
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => {
                              return res.json({status:1,user})
                            }); 
                    }
                });
            }
        });
    

      
};