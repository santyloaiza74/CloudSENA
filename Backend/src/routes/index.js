const {Router} = require('express')
const loginRouter=require('./login.routes')
const fichaRouter=require('./ficha.routes')
const gestorRouter=require('./gestor.routes')
const proyectoRouter=require('./proyecto.routes')
const rolRouter=require('./rol.routes')
function routerApi(app){
    const router = Router()

    app.use('/api/v1',router)
    router.use('/login',loginRouter)
    router.use('/ficha',fichaRouter)
    router.use('/gestor',gestorRouter)
    router.use('/proyecto',proyectoRouter)
    router.use('/rol',rolRouter)
    app.use('/login',loginRouter)
}

module.exports = routerApi