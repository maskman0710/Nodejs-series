const {gettinguserlogin} = require('../Services/user.service')

const signup = async(req, res) => {
   try {
    const userdetails = req.body
    if(!userdetails){
        return res.status(404).json({
            message : "we did not get any user data"
        })
    }
    const registeringuser = await gettinguserlogin(userdetails)
    if(registeringuser == null){
       return res.status(409).json({
            message : "user already exists Please login"
        })
    }
    return res.status(201).json({
        message : "user logged in succesfully please login",
        user : {
            id : registeringuser.id,
            name : registeringuser.name,
            email : registeringuser.email
        }
    })

   } catch (error) {
    console.log(error)
    return res.status(500).json({
        message : "internal server error"
        
    })
   }


}

module.exports = {
    signup
}