const express = require('express')
const app = express()
const env = require('dotenv')
env.config()
const {dbconnect} = require('./Connections/db.connect')
const {signupuser , loginuser} = require('./Routes/user.route')
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const startserver = async() =>{
    try {    
    
    const mongoconnect = await dbconnect(process.env.mongo_URI)

        app.use('/user/signup' , signupuser)
        app.use('/user/login' , loginuser)

    app.listen(process.env.port , ()=>{
    console.log("Server has started succesfully")
})
} catch (error) {
    console.log(error)
}
}

startserver()


