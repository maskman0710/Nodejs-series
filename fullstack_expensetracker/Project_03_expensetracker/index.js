const express = require('express')
const app = express()
const env = require('dotenv')
const cors = require('cors')
const {expenserouter} = require('./Routes/expense.route')
const cookieparser = require('cookie-parser')
env.config()
const {dbconnect} = require('./Connections/db.connect')
const {signupuser , loginuser, fetchuser} = require('./Routes/user.route')

app.use(cors({
    origin: process.env.origin,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieparser())


const startserver = async() =>{
    try {    
    
    const mongoconnect = await dbconnect(process.env.Mongo_URI)

        app.use('/user/' , signupuser)
        app.use('/user/' , loginuser)
        app.use('/user/' , fetchuser)
        app.use('/api/' , expenserouter)

    app.listen(process.env.port , ()=>{
    console.log("Server has started succesfully")
})
} catch (error) {
    console.log(error)
}
}

startserver()


