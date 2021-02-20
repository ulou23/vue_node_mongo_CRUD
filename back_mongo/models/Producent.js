const mongoose=require("mongoose");

const Producent=mongoose.model(
    "Producent",
    new mongoose.Schema({
        title: String,
        description: String,
        category: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category"
            }
        ],
       phone : Number,
       contact_person: String, 
    })
);

module.exports=Producent
module.exports.get=function(callback,limit){
    Producent.find(callback).limit(limit)
}