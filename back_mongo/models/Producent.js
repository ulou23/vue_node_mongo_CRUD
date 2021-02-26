const mongoose=require("mongoose");
const { Schema} =mongoose;

const ProducentSchema=new Schema({
        title: String,
        
        category: [CategorySchema]
        
        ,
       phone : Number,
    
    })


module.exports=mongoose.model("Producent", ProducentSchema,)

module.exports.get=function(callback,limit){
    Producent.find(callback).limit(limit)
}