const Device = require('../models/deviceInfo');
const Channel = require('../models/channels');
const { validationResult } = require('express-validator');

exports.addDevice = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})
        let {deviceId, userId, dealerId, adminId, parameter} = req.body
        let checkDevice = await Device.findOne({deviceId})
        if (checkDevice) return res.status(400).send({status:0, msg:"device already exist"})
        if (parameter < 1) return res.status(400).send({status:0, msg:"device should have atleast 1 channel"})

        await Device.create({deviceId, userId, dealerId, adminId, parameter})
        
        for (i=1; i<= parameter; i++) {
            await Channel.create({deviceId, channelName:"d"+i, channelDisplayName:"d"+i})
        }

        return res.status(200).send({msg:"Device added"})

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

exports.updateDeviceChannel = async (req, res) =>{
    try {
        let {channelId} = req.params
        let { channelDisplayName, min, max, prefix, postfix } = req.body;

        let findChannel = await Channel.findById(channelId)

      await Channel.findOneAndUpdate({_id: channelId}, {$set:
        {
        channelDisplayName:channelDisplayName?channelDisplayName:findChannel.channelDisplayName,
        min:min ? min :findChannel.min ,
        max:max? max :findChannel.max ,
        prefix: prefix ? prefix :findChannel.prefix,
        postfix: postfix ? postfix :findChannel.postfix
    }
    })

      console.log(req.body)

         return res.status(200).send({msg:"channel Updated"})
    } catch (err) {
        return res.status(400).send({msg:err.message})
    }

    // 63fb38bdfcec5fabfdf9066f 63fb38bdfcec5fabfdf9066f
}

exports.getChannels = async (req, res) => {
    try {
      let { deviceId } = req.params
  
      let channels = await Channel.find({deviceId:deviceId})

      if (channels.length == 0) return res.status(400).send({status:0, msg:"No channel found!"})

      return res.status(200).send(channels)

    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}