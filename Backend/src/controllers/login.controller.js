const LoginService=require('../services/login.service')

class LoginController{
    constructor(){
        this.service= new LoginService
    }

    async index(){
        const users= await this.service.get()
        return users
    }

    async create(login){
        const user= await this.service.post(login)
        return user
    }

    async getOne(id){
        const user= await this.service.getOne(id)
        return user
    }

    async delete(id){
        const user= await this.service.delete(id)
        return user
    }

    async update(id,values){
        const user= await this.service.update(id,values)
        return user
    }
}
module.exports=LoginController