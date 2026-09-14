const mongo = require('mongoose')


const URLShortschema = new mongo.Schema({
    originalurl : {
        type : String,
        required : true
    },
    shortcode : {
        type : String,
        required : true,
        unique : true
    },
    clicks : {
        type : Number,
        default : 0
    },
    

}, {timestamps : true})

const URLShort = mongo.model("user",URLShortschema)

module.exports = {
    URLShort
}