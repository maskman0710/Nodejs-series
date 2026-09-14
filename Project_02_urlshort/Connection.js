const mongo = require('mongoose')

async function connectshortDB (URL){
    try {
        await mongo.connect(URL)
    } catch (error) {
        console.log("there is some error Connecting you with the Database")
    }
}
module.exports = {
    connectshortDB
}