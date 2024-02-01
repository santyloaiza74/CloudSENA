const jwt=require('jsonwebtoken')
const {secretjwt}=require('../../config/config')
function validateToken(req,res,next){
    const accessToken=req.headers['authorization'] || req.query.accesstoken
    if(!accessToken)res.send('Acceso denegado')
    jwt.verify(accessToken,secretjwt,(err,user)=>{
        if(err){
            res.send('Acceso denegado, token expirado o incorrecto')
        }else{
            req.user=user
            next()
        }
    })
}
module.exports=validateToken