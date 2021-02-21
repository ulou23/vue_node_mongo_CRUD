const mongoose=require("mongoose");

const { Schema} =mongoose;

const CategorySchema=
    new Schema({
        name: String,
        slug:String,
        
    })


var Cat=module.exports=mongoose.model('CatModel', CategorySchema);
module.exports.get=function(callback,limit){
    Cat.find(callback).limit(limit)
}