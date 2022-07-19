const express = require('express');
const mongoose = require('mongoose');
const restaurantRoutes=require('./routes/routes')
const bodyParser = require('body-parser');


// port no
const PORT = 9191;

// for mongo db
const DBSTRING = "mongodb://127.0.0.1:27017/zomato";

// connecting to mongo db
mongoose.connect(DBSTRING, () => {
    console.log("mongoDB connected")
}, e =>
    console.log("error occurred while connecting to DB:", e));


// Initializing express
let app = express();


// middleWares
app.use(bodyParser.json());
app.use('/restaurants',restaurantRoutes);



app.listen(PORT,()=>{
    console.log(`the server is running on port : ${PORT}`)
})


