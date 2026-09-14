const express = require('express')
const router = express.Router()

const {createsurl , getshorturl} = require('../Controllers/url.control')

router.post('/' , createsurl)

module.exports = {
    router
}

router.get('/:shortid' , getshorturl)