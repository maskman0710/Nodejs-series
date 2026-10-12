const {expense} = require('../Models/expense.model')

const creatingexpense = async(creds , userID) => {
    const expenses = await expense.create({
        title : creds.title,
        amount : creds.amount,
        category : creds.category,
        date : creds.date,
        user : userID
    })
    return expenses
}

module.exports = {
    creatingexpense
}