const {fetchinguser}  = require('../Services/fetchinguser.service')

const fetched = async(req , res) => {
    try {
        const fetchid = req.user?.userId
        if(!fetchid){
            return res.status(403).json({
                message : "Credential not found in mobile"
            })
        }
        const fetchin = await fetchinguser(fetchid)
        if(!fetchin){
            return res.status(400).json({
                message : "Data not found"
            })
        }
         return res.status(200).json({
            message: 'User fetched successfully',
            user: fetchin
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {fetched}