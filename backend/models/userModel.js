const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type : String,
        required : [true , "Please add a name"] 
    },
    email: {
        type : String,
        required : [true , "Please add a name"],
        unique : true,
        trim : true , 
        match : [
             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
             "Please enter a valid email"
        ]
    },
    password : {
        type : String,
        required : [true , "Please add a password"],
        minLength : [6 , "Password must be up to 6 characters"],
        maxLength : [23 ,"Password must be up to 23 characters"]
    },
    photo : {
        type : String,
        required : [true , "Please add a photo"],
        default : "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg"
    },
    phone : {
        type : String,
        default : '+333'
    },
    bio : {
        type :String,
        maxLength : [250 , " Please enter an bio"],
        default : "bio"
    }
},
{
    timestams : true 
}
)
const User = mongoose.model("User", userSchema)
module.exports = User ;