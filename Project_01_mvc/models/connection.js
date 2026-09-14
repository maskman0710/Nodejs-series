const mongo = require('mongoose')



const connect = async(URL) =>{
     return await mongo.connect(URL)
     .then (console.log("mongo started"))
}

module.exports = connect