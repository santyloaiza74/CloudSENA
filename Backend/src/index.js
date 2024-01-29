const express = require('express')
const mongoose=require('mongoose')
const { port: APP_PORT, port } = require('./config/config')
const routerApi=require('./routes/index')
const cors = require('cors')

const app = express()


mongoose.connect('mongodb://127.0.0.1:27017/cloud')
//mongoose.connect('mongodb+srv://santyloaiza74:CloudSENA@cloudsena.pkkyfqz.mongodb.net/')

app.use(express.json())

routerApi(app)

app.use(cors())

app.listen(port, () => {
    console.log(`APP corriendo por el puerto ${port}`
    )
})