const FLIGHT_INFO = require('../FLIGHT_INFO')


exports.getAdd = async(req,res)=>{

    try{
        const addData = new FLIGHT_INFO(req.body);
        const inserData = await addData.save();
        return res.status(201).send(inserData)
    }catch(error){
        return res.status(401).send(error);
    }
}