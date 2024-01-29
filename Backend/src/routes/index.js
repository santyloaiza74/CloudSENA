const {Router} = require('express')
const loginRouter=require('./login.routes')
const aprendizRouter=require('./aprendiz.routes')
const fichaRouter=require('./ficha.routes')
const gestorRouter=require('./gestor.routes')
const proyectoRouter=require('./proyecto.routes')
function routerApi(app){
    const router = Router()

    app.use('/api/v1',router)
    router.use('/login',loginRouter)
    router.use('/aprendiz',aprendizRouter)
    router.use('ficha',fichaRouter)
    router.use('gestor',gestorRouter)
    router.use('proyecto',proyectoRouter)
}

module.exports = routerApi