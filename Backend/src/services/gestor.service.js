const gestorSchema=require('../database/models/gestor.model')
const loginSchema=require('../database/models/login.model')
class gestorService{
    constructor(){
        this.model= gestorSchema
    }
    async get(){
        const gestors=await this.model.find()
        return gestors
    }
    async post(gestor){
        const gestors=await this.model.create(gestor)
        const {celular, ...usuario}=gestor
        const newlogin= await loginSchema.create(usuario)
        return gestors,newlogin
    }
    async getOne(id){
        const gestor=await this.model.findById(id)
        return gestor
    }
    async delete(id){
        const gestor=await this.model.findByIdAndDelete(id)
        return gestor
    }
    async update(id,values){
        const gestor=await this.model.findByIdAndUpdate(id,values)
        return gestor
    }
}
module.exports=gestorService