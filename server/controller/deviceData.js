const { validationResult } = require('express-validator');
const moment = require('moment');
const DeviceData = require('../models/deviceData');
const Channel = require('../models/channels');

exports.deviceData = async (req, res) => {
    try {
        const errors = validationResult(req);
       
        if (!errors.isEmpty()) return res.status(400).send({status:0,msg:errors.array()[0].msg})


        

        let {deviceId} = req.query
        let data =[]
        
        const entries = Object.entries(req.query);
        entries.forEach(element => {
          if (element[0] !== "deviceId") {
            let obj = {
              [element[0]] : element[1]
            }
           data.push(obj)
          }
        });

        console.log("data",data)

      let channels = await Channel.find({deviceId:deviceId})

      for (i=0; i<channels.length; i++) {
        if(data[i]) {
          var arr = Object.keys(data[i])
          var arr2 = Object.values(data[i])
          var [keyName] = arr;  
          var [keyValue] = arr2;  

            if (keyName == channels[i].channelName) {
                await channels[i].updateOne({channelData:keyValue})
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


        console.log("File",File[j])
        
          num = num+1
        let currObj = {eventId:num, deviceId:req.params.deviceId, time: moment(time[j]).format("DD-MM-YYYY, h:mm:ss a")}

       File[j].forEach(channel => {
         let obj = {...channel}
          Object.assign(currObj, obj)
        });
        
        objects.push(currObj)
      }

        return res.status(200).send(objects)
        
    } catch (err) {
        return res.status(400).send({msg:err.message})
    }
}