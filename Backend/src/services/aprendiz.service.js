const aprendizSchema=require('../database/models/aprendiz.model')

class aprendizService{
    constructor(){
        this.model=aprendizSchema
    }
    async get(){
        const aprends= await this.model.find()
        return aprends
    }
    async post(aprendiz){
        const aprend= await this.model.create(aprendiz)
        return aprend
    }
    async getOne(id){
        const aprend= await this.model.findById(id)
        return aprend
    }
    async delete(id){
        const aprend= await this.model.findByIdAndDelete(id)
    }
    async update(id,values){
        const aprend=await this.model.findByIdAndUpdate(id,values)
        return aprend
    }
}
module.exports= aprendizService