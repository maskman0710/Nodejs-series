const mongo = require('mongoose')

const dbconnect = async (URL) => {
    const connect = await mongo.connect(URL)
    if(connect){
        console.log("connect mongodb")
    }
}

module.exports = {
    dbconnect
}