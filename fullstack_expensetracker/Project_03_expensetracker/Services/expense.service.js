const {expense} = require('../Models/expense.model')

const creatingexpense = async(creds , userID) => {
    try {
        const expenses = await expense.create({
        title : creds.title,
        amount : creds.amount,
        category : creds.category,
        date : creds.date,
        user : userID
    })
    return expenses
    } catch (error) {
        console.log(error.message)
        console.log("error gerring expense service")
    }
}

module.exports = {
    creatingexpense
}