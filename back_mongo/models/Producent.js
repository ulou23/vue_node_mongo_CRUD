const mongoose=require("mongoose");
const { Schema} =mongoose;
const Category=require('./Category')
const { CategorySchema }=Category;

const ProducentSchema=new Schema({
        title: String,
        
        category: [CategorySchema]
        
        ,
       phone : Number,
    
    })


module.exports=mongoose.model("Producent", ProducentSchema,"producent")

module.exports.get=function(callback,limit){
    Producent.find(callback).limit(limit)
}