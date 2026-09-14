const {createshorturl , getingurl} = require('../Services/url.service')


const createsurl = async(req , res) =>{
    try {
        const originalurl = req.body.originalurl
        if (!originalurl) {
            return res.status(400).json({
            message: "originalurl is required"
    })
}

    const pass = await createshorturl(originalurl)
    return res.status(201).json({
        message : "Here is your Short URL",
        pass
        
    })
    } catch (error) {
        res.status(500).json({
            message : "unable to short url"
        })
    }
}


const getshorturl = async(req , res)=>{
    try {
    const shortid = req.params.shortid
    const shorturls = await getingurl(shortid)

    if(shorturls == null){
       return res.status(404).json({
            message : "URL not found"
        })
    }
    return res.redirect(shorturls)
    } catch (error) {
        return res.status(500).json({
            message  : "error connecting to the server",
            error : error.message
        })
    }

}
module.exports = {
    createsurl,
    getshorturl
}