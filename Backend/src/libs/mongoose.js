const mongoose= require('mongoose')

//mongodb://localhost:27017/

const DB_URI='mongodb://localhost:27017/cloud'

module.exports=()=>{
    const connect=()=>{
        mongoose.connect(DB_URI,
            {
                keppAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err)=>{
                if(err){
                    console.log("Error en la conexion, "+err)
                }
                else{
                    console.log("conexion correacta")
                }
            }
        )
    }
    connect()
}