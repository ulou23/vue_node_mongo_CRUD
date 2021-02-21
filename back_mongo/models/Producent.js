const mongoose=require("mongoose");
const { Schema} =mongoose;

const ProducentSchema=new Schema(
    "Producent",
    new mongoose.Schema({
        title: String,
        description: String,
        category: [
            {
                type: Schema.Types.ObjectId,
                ref: "Category",
                required:true
            }
        ],
       phone : Number,
       contact_person: String, 
    })
);

module.exports=mongoose.model("Producent", ProducentSchema)
module.exports.get=function(callback,limit){
    Producent.find(callback).limit(limit)
}