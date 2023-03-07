const { validationResult } = require('express-validator');
const moment = require('moment');
const DeviceData = require('../models/deviceData');
const Channel = require('../models/channels');

exports.deviceData = async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})

        let {deviceId} = req.body
        let data =[]
        
        const entries = Object.entries(req.body);
        entries.forEach(element => {
          if (element[0] !== "deviceId") {
            let obj = {
              channel:element[0],
              value: element[1]
            }
           data.push(obj)
          }
        });

      let channels = await Channel.find({deviceId:deviceId})

      for (i=0; i<channels.length; i++) {
        if(data[i]) {
            if (data[i].channel == channels[i].channelName) {
                await channels[i].updateOne({channelData:data[i].value})
            } else {
                await channels[i].updateOne({channelData:0})
            }
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

      let File = []
      let objects = []
      let time = []
      for (i=0; i < deviceData.length; i++) {
        File.push(deviceData[i].data)
        time.push(deviceData[i].createdAt)
      }
      let num = 0
      for (j=0; j< File.length; j++) {   
        
          num = num+1
        let currObj = {eventId:num, deviceId:req.params.deviceId, time: moment(time[j]).format("DD-MM-YYYY, h:mm:ss a")}

       File[j].forEach(channel => {
         let obj = { [channel.channel] : channel.value}
          Object.assign(currObj, obj)
        });
        
        objects.push(currObj)
      }

        return res.status(200).send(objects)
        
    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}