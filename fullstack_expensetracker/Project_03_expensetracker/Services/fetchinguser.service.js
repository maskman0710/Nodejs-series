const mongo = require('mongoose')
const {user} = require('../Models/user.model')

const fetchinguser = async(id) => {
    const findid = await user.findById(id)
    .select('-password')

    if(!findid){
        return null
    }
    return findid
}

module.exports = {fetchinguser}