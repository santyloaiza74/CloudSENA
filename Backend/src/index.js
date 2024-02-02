const express = require('express')
const mongoose=require('mongoose')
const {port } = require('./config/config')
const routerApi=require('./routes/index')
const connect=require('./libs/mongoose')
const createRoles=require('./seeders/rol.seeder')
const cors = require('cors')
const helmet =require('helmet')

const app = express()

connect()
createRoles()

app.use(express.json())
//app.use(helmet())
routerApi(app)

app.use(cors())

app.listen(port, () => {
    console.log(`APP corriendo por el puerto ${port}`
    )
})