const DeviceData = require('../models/deviceData');
const Channel = require('../models/channels');
const { validationResult } = require('express-validator');


exports.deviceData = async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})

        let {deviceId, data} = req.body

      let channels = await Channel.find({deviceId:deviceId})

// console.timeLog
      for (i=0; i<channels.length; i++) {
        if (data[i]?.channel == channels[i].channelName) {
            await channels[i].updateOne({channelData:data[i].value})
        } else {
            await channels[i].updateOne({channelData:0})
        }
      }

        await DeviceData.create({deviceId, data})



        return res.status(201).send({msg:"Data added"})

    } catch (err) {
        console.log(err)
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