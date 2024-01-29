const {Router} = require('express')
const loginRouter=require('./login.route')

function routerApi(app){
    const router = Router()

    app.use('/api/v1',router)
    router.use('/login',loginRouter)
}

module.exports = routerApi