const express = require('express')
const expenserouter = express.Router()
const {verifytoken} = require('../Middlewares/auth.middleware')
const {fetchingexpense} = require('../Controllers/expense.control')

expenserouter.post('/expense' , verifytoken , fetchingexpense)

module.exports ={
    expenserouter
}