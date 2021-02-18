const mongoose=require("mongoose");

const { Schema} =mongoose;

const Category=
    new Schema({
        name: String,
        slug:String,
        lampBrands: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Producent"
            }
        ]
    })




var Cat=module.exports=mongoose.model('CatModel', CategorySchema);
module.exports.get=function(callback,limit){
    Cat.find(callback).limit(limit)
}