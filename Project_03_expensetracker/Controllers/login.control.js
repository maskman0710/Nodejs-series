const {gettinguserloging} = require('../Services/login.service')
const {generatetoken} = require('../Utils/jwt')


const login = async(req, res) => {
   try {
    const logindetails = req.body
    if(!logindetails){
        return res.status(400).json({
            message : "we did not get any user data to login"
        })
    }
    const loginuser = await gettinguserloging(logindetails)
    if(loginuser == null){
       return res.status(401).json({
            message : "Incorrect password"
        })
    }
    const token = generatetoken(loginuser._id)
    res.cookie('token' , token , {
        httpOnly : true
    })
    return res.status(200).json({
        message : "user logged in succesfully",
        token,
        user : {
            email : loginuser.email
        }}
    )

   } catch (error) {
    console.log(error)
    return res.status(500).json({
        message : "internal server error"
        
    })
   }


}

module.exports = {
    login
}