const aprendizService=require('../services/aprendiz.service')

class aprendizController{
    constructor(){
        this.service=new aprendizService
    }
    async index(){
        const aprendiz= await this.service.get()
        return aprendiz
    }
    async create(aprendiz){
        const aprendizs=await this.service.post(aprendiz)
        return aprendizs
    }
    async getById(id){
        const aprendiz=await this.service.getOne(id)
        return aprendiz
    }
    async remove(id){
        const aprendiz=await this.service.delete(id)
        return aprendiz
    }
    async update(id,values){
        const aprendiz=await this.service.update(id,values)
        return aprendiz
    }
}
module.exports=aprendizController