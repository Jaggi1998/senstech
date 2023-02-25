const User = require("../models/user");

exports.getUsers = async (req, res) => {
    try {
        let { adminId } = req.params
        let user = await User.find({role:'user', adminId:adminId})
        
        return res.status(200).send(user)
        
    } catch(err) {
        return res.satus(400).send({status:0,msg:err.message})
    }
}