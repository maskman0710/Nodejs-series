const express = require('express')
const app = express()
const env = require('dotenv')
const cors = require('cors')
env.config()
const {dbconnect} = require('./Connections/db.connect')
const {signupuser , loginuser} = require('./Routes/user.route')

app.use(cors({
    origin: process.env.origin,
    Credential: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const startserver = async() =>{
    try {    
    
    const mongoconnect = await dbconnect(process.env.Mongo_URI)

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


