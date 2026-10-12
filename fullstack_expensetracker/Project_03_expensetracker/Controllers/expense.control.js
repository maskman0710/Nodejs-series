const {creatingexpense} = require('../Services/expense.service')

const fetchingexpense = async(req , res) => {
    try {
       const body = req.body
    const userId = req.user.userId

    if(!body.title || !body.amount || !body.category ){
        return res.status(400).json({
            message : "All fields are required"
        })
    }
    if(body.amount == 0 || body.amount < 0 || !Number.isFinite(body.amount)){
       return res.status(400).json({
            message : "Enter Correct Amount"
        }) 
    }
    const gettingexpense = await creatingexpense(body , userId)
    return res.status(200).json({
        message : "Succesfully created expense",
        gettingexpense
    })  
    } catch (error) {
        res.status(500).json({
            message : "Internal server error"
        })
        console.log(error.message)
        console.log("cannot create expense controler")

    }
}

module.exports = {
    fetchingexpense
}