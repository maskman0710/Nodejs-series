const mongo = require('mongoose')

const expenseschema = mongo.Schema({
    title : {
        type : String,
        required : true
    },
    amount : {
        type : Number,
        min : 1,
        required : true
    },
    category : {
        type : String,
        enum : ["Food" , "Shopping" , "Taxi"],
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    user : {
        type : mongo.Schema.Types.ObjectId,
        ref : "user",
        required : true
    }
})

const expense = mongo.model("expense" , expenseschema)

module.exports = {
    expense
}