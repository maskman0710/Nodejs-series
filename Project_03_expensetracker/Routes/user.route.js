const express = require('express')
const router = express.Router()
const {signup} = require('../Controllers/auth.control')
const {login} = require('../Controllers/login.control')

const signupuser = router.post('/' , signup)

const loginuser = router.get('/' , login)
module.exports = {
    signupuser,
    loginuser
}
