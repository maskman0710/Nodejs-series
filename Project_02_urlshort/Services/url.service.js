const {generatecode} = require('../Utils/generator')
const {URLShort} = require('../Models/url.short')

const createshorturl = async(original) => {
    const short = generatecode() 

    const checkurl = await URLShort.findOne({shortcode : short})

    while(checkurl){
        short = generatecode()
        checkurl = await URLShort.findOne({shortcode : short})
}
    const urladded =  await URLShort.create({
        originalurl : original,
        shortcode : short,
        clicks : 0
})
    return urladded;
}

const getingurl = async(shortcode) =>{
    
   
    const geturl = await URLShort.findOneAndUpdate({
        shortcode : shortcode
    },{
        $inc : {clicks : 1}
    },{new : true}) 

    if (!geturl) {
        return null
    }
    return geturl.originalurl
    
    
    
}
module.exports = {
    createshorturl,
    getingurl
}
