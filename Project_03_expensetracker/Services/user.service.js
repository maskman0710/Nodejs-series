const mongo = require('mongoose')
const passhash = require('bcrypt')
const {user} = require('../Models/user.model')
const saltround = 10

const gettinguserlogin = async(creds) => {
    const verifyingemail = await user.findOne({email:creds.email})
    if(verifyingemail){
        return null
    }

    const crypting = await passhash.hash(
        creds.password,
        saltround
    )
     const creatinguser = await user.create({
        name : creds.name,
        email : creds.email,
        password : crypting

    })
    return creatinguser
    }

module.exports = {
    gettinguserlogin
}
   
