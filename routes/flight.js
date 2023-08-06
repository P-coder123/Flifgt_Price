
const express = require('express');

const FLIGHT_INFO = require('../FLIGHT_INFO')

const addController = require('../controller/getAdd')
const getController = require('../controller/getallFlightPrice')
 
const router = express.Router();

router.post('/airlines', addController.getAdd)
router.get('/airlines', getController.getallFlightPrice)


module.exports=router








