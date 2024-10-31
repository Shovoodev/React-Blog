const express = require('express')
const dotenv = require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const userRoute = require('./routes/userRoute');
const errorMiddleWear = require('./middlewear/errorMiddleWear');
const app = express()
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended:false}))
app.use("/api/users" , userRoute)
app.use(errorMiddleWear)

app.get("/", (req, res) =>{
    res.send("Home page")
})

mongoose.connect(process.env.MONGODB_URL).then(()=>{
    app.listen(PORT , ()=>{
        console.log("server connect " + PORT)
    })
}).catch((err)=>{
    console.log(err.message )
})