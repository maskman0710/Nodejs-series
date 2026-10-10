const jwt = require('jsonwebtoken')


const generatetoken = (userId) => {
    let secretkey = process.env.JWT_SECRET
    let data = {
        userId : userId
    }
    const token = jwt.sign(data , secretkey)
    return token
}

module.exports = {
    generatetoken
}