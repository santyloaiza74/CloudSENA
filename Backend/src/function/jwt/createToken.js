const jwt=require('jsonwebtoken')
const secret="cloudsena"
function generateAcessToken(user) {
    return jwt.sign({user},secret)
}
module.exports=generateAcessToken
