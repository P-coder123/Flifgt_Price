
const FLIGHT_INFO = require('../FLIGHT_INFO')
 

exports.getallFlightPrice = async(req,res) =>{
    

    try{
        const source = req.body.source;
        const designation = req.body.designation;
        const date = req.body.date;
 
        console.log(source,designation,date)
        
        if(source && designation && date){
            const getFlightPrice = await FLIGHT_INFO.findOne({source:source,
                designtion:designation,
                date:date})
            
            console.log(getFlightPrice)
            const prices = getFlightPrice.price
            return res.status(200).send(prices)
            

        }else{
            
            return res.status(401).send({message:'Please enter the source degisation and date'})
        }
    }catch(error){
        return res.status(401).send({
    
             message : error                                      
        })
    }
}



