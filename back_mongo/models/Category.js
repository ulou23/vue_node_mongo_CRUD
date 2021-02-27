const mongoose=require("mongoose");

const { Schema} =mongoose;

const CategorySchema=
    new Schema({
        name: String,
        slug:String,
        
    })

    var Cat=mongoose.model('CatModel', CategorySchema, "category");

module.exports={
    CategorySchema,
    Cat,
}

module.exports.get=function(callback,limit){
    Cat.find(callback).limit(limit)
}