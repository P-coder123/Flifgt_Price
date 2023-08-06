
const mongoose = require('mongoose');

const flightPriceSchema = new mongoose.Schema({

    source :{
        type :  String,
        required : true
    },

    designtion : {
        type : String,
        required : true
    },

    date : {
        type : String,
        required : true
    },

    price : {
        type : Object,
        required : true
    }
})



//model genration

const FLIGHT_INFO = mongoose.model('FLIGHT_INFO',flightPriceSchema)


module.exports = FLIGHT_INFO