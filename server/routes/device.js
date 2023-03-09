const express = require("express");
const router = express.Router();
const app = express();
const { check } = require('express-validator');
app.use('/api',router);
const DEVICEDATA = require('../controller/deviceData');
const DEVICE = require ('../controller/device');

router.post('/device-data',[
    check('deviceId', 'Please enter a valid deviceId').trim().notEmpty().isString(),
    
], DEVICEDATA.deviceData);


router.get('/get-device-data/:deviceId', DEVICEDATA.getDeviceData);

router.post('/add-device',[
    check('deviceId', 'Please enter a valid deviceId').trim().notEmpty().isString(),
    check('userId', 'Please select a user').trim().notEmpty().isString(),
    check('parameter', 'Please enter a valid parameter').trim().notEmpty().isNumeric()
], DEVICE.addDevice);

router.get('/get-devices/:userId', DEVICE.getDevice);

router.get('/get-channels/:deviceId', DEVICE.getChannels);
router.post('/update-channel/:channelId', DEVICE.updateDeviceChannel);


module.exports = router;
