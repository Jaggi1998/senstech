const DeviceData = require('../models/deviceData')
const { validationResult } = require('express-validator');


exports.deviceData = async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})

        let {deviceId, data} = req.body

        await DeviceData.create({deviceId, data})

        return res.status(201).send({msg:"Data added"})

    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}

exports.getDeviceData = async (req, res) => {
    try {
        
      let deviceData =  await DeviceData.find({deviceId: req.params.deviceId})

        return res.status(200).send(deviceData)
        
    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}