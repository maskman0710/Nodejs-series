const express = require('express')
const urlrouter = express.Router()

const {createsurl , getshorturl} = require('../Controllers/url.control')

urlrouter.get('/:shortid' , getshorturl)
module.exports = {
    urlrouter
}

