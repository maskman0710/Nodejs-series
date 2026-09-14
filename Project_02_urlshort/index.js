const express = require('express')
const { connectshortDB } = require('./Connection')
const { router } = require('./Routes/url.route')
const { urlrouter } = require('./Routes/express.route')

const app = express()
const port = 1729

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const startServer = async () => {
    try {
        await connectshortDB("mongodb://127.0.0.1:27017/urlshortner")

        app.use('/api/urls', router)
        app.use('/', urlrouter)

        app.listen(port, () => {
            console.log("Your server started successfully")
        })
    } catch (error) {
        console.log("Unable to start server:", error)
    }
}

startServer()