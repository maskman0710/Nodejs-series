const arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","n","o","p","q","r","s",'t','u','v','w','x','y','z'
    ,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    1,2,3,4,5,6,7,8,9,0
]
const generatecode = () => {
    let shortcode = ""
    for (let i=0 ; i<6 ; i++){
        let shuffle = Math.floor(Math.random() * arr.length)
        shortcode += arr[shuffle]
}   
    return shortcode
}

module.exports = {
    generatecode
}