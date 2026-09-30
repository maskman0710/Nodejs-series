const jwt = require('jsonwebtoken')
const {generatetoken} = require('../Utils/jwt')

const verifytoken = (req, res, next) => {
    try {
        const gettingtoken = req.cookies.token // same name as the cookie we created in login.control.js

    const decoded = jwt.verify(
        gettingtoken,
        process.env.jwtsecretkey
    )
    req.user = decoded
    next()
    } catch (error) {
        return res.status(403).json({
        message: "Invalid token"
    })
    }
    

}