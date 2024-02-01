const jwt=require('jsonwebtoken')
const {secretjwt}=require('../../config/config')
function generateAcessToken(user) {
    return jwt.sign({user},secretjwt)
}
module.exports=generateAcessToken
