const express = require('express')
const router = express.Router()
const {signup} = require('../Controllers/auth.control')
const {login} = require('../Controllers/login.control')
const {verifytoken} = require('../Middlewares/auth.middleware')
const { fetched } = require('../Controllers/fetch.control')

const signupuser = router.post('/signup' , signup)

const loginuser = router.post('/login' , login)

const fetchuser = router.get('/me' ,verifytoken , fetched)
module.exports = {
    signupuser,
    loginuser,
    fetchuser
}
