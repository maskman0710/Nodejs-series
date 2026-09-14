const express = require('express');
const connect = require('./models/connection')
const app = express()

const connecting = connect("mongodb://127.0.0.1:27017/my-first-mongo")
''

app.listen(1234 , ()=>{
     console.log("server started")
})