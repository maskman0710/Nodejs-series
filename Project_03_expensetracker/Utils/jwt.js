const jwt = require('jsonwebtoken')


const generatetoken = (userId) => {
    let secretkey = expense_secret_key
    let data = {
        userId : userId
    }
    const token = jwt.sign(data , secretkey)
    return token
}

module.exports = {
    generatetoken
}