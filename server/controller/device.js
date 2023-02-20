const Device = require('../models/deviceInfo');

const { validationResult } = require('express-validator');


exports.addDevice = async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})

        let {deviceId, userId, dealerId, adminId, parameter} = req.body

        await Device.create({deviceId, userId, dealerId, adminId, parameter})

        return res.status(201).send({msg:"Device added"})

    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}

exports.getDevice = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg});

    let { userId } = req.params

    let devices = await Device.find({ $or:[ {'userId':userId}, {'adminId':userId}, {'dealerId':userId} ]});

    return res.status(200).send(devices);
} catch (err) {
    return res.status(400).send({msg:err.message})
}
}