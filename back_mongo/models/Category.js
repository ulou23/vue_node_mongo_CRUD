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


module.exports=Category;

module.exports=mongoose.model('CatModel', Category)