const express = require('express')
const mongoose=require('mongoose')
const {port } = require('./config/config')
const routerApi=require('./routes/index')
const connect=require('./libs/mongoose')
const cors = require('cors')

const app = express()

connect()

app.use(express.json())

routerApi(app)

app.use(cors())

app.listen(port, () => {
    console.log(`APP corriendo por el puerto ${port}`
    )
})