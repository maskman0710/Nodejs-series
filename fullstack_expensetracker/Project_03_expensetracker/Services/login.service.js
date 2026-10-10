const passhash = require('bcrypt')
const {user} = require('../Models/user.model')

const gettinguserloging = async (creds) => {
    const useremail = creds.email
    const userpass = creds.password

    const finduser = await user.findOne({
        email : useremail,
        
    })
    .select('+password')

    if (!finduser){
        return null
    }
    const comparingpass = await passhash.compare(userpass , finduser.password)

    if(!comparingpass){
        return null
    }
    return finduser

}
module.exports = {
    gettinguserloging
}