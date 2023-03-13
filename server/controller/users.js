const User = require("../models/user");

exports.getUsers = async (req, res) => {
    try {
        let { adminId } = req.params
        let user = await User.find({role:'user', adminId:adminId, isDeleted:false})
        
        return res.status(200).send(user)
        
    } catch(err) {
        return res.status(400).send({status:0,msg:err.message})
    }
}

exports.deleteUser = async (req, res) => {
    try {
        let { userId } = req.params
        await User.findOneAndUpdate({_id: userId}, {$set:{isDeleted:true}})

        return res.status(200).send({msg:"User Deleted"})
    } catch (err) {
        return res.status(400).send({status:0,msg:err.message})
    }
}