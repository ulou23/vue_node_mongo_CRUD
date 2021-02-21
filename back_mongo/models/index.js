url="mongodb://localhost:27017/baza";


const mongoose=require("mongoose");
const Category = require("./Category");

const conn=mongoose.createConnection(url,{ useNewUrlParser:true, useUnifiedTopology:true});


// create TEST 
const Cat=conn.model('Category', Category);
const newcat=new Cat({  name: 'italian',
        slug:'it',
        lampBrands:[]})
        newcat.save(function (err){
            if (err) return handleError(err)
        })


     Cat.findOne({}, function(err,catt){
            if (err) return handleError(err);
            console.log(`%s,%s`, catt.name,catt.slug)
        })


        