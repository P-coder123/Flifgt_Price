const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

//const flight = require('./routes/flight')

//const flight = require('./routes/flight')
const flight = require('./routes/flight')


mongoose.connect('mongodb://127.0.0.1:27017/FLIGHT')
.then(()=>console.log("Mogoose connected"))
.catch((err)=>console.log('Mongo error',err))



app.use(express.json());
app.use(express.urlencoded({extended:true}))

// function getname(){
//   console.log("Function run")
// }

app.use('/api/flight',flight)




console.log("incomming")


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});