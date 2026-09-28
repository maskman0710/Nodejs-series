const mongo = require('mongoose')

const userschema = mongo.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true

    },
    password : {
        type : String,
        minlength : 8,
        required : true,
        select : false
    }
} , {timestamps : true})

const user = mongo.model("user" , userschema)

module.exports = {
    user
}