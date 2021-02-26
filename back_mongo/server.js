const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const mongoose=require('mongoose');

const app=express();

url="mongodb://localhost:27017/tar";





const catAPI=require('../back_mongo/routes/cat.route')

var cors_org={
    origin: "http://localhost:8081"
};

app.use(cors());

app.use(bodyparser.urlencoded({
    extended:true }));  //false or true
app.use(bodyparser.json());



const Prod=require('./models/Producent')

app.post('/addpro',async (req,res)=> {
    try{
        const prod=new Prod(req.body);
        await prod.save();
        res.status(201).json({success:true,data:prod});
    } catch(err){
        res.status(400).json({success:false,message:err.message
        })
    }
})

/*
const db=require("./models");
db.mongoose.connect(db.url,{ useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{ console.log("connected to the MongoDB lampy");}).catch(err=>{ console.log("Cannot connect",err);
process.exit()});

app.get("/",(req,res)=> {
    res.json({message: "waiting"});
});

*/

const conn=mongoose.connect(url,{ useNewUrlParser:true, useUnifiedTopology:true}).then(()=> {
    console.log("DB connected")
}, error=>{
    console.log("DB couldnt be connected"+ error)
})

const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

