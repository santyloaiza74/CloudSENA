const jwt=require('jsonwebtoken')
const secret="cloudsena"
function validateToken(req,res,next){
    const accessToken=req.headers['authorization'] || req.query.accesstoken
    if(!accessToken)res.send('Acceso denegado')
    jwt.verify(accessToken,secret,(err,user)=>{
        if(err){
            res.send('Acceso denegado, token expirado o incorrecto')
        }else{
            req.user=user
            next()
        }
    })
}
module.exports=validateToken