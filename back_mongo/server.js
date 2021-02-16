const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");

const app=express();

var cors_org={
    origin: "http://localhost:8081"
};

app.use(cors(cors_org));
app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}));

const db=require("./models");
db.mongoose.connect(db.url,{ useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{ console.log("connected to the MongoDB lampy");}).catch(err=>{ console.log("Cannot connect",err);
process.exit()});

app.get("/",(req,res)=> {
    res.json({message: "waiting"});
});



const PORT=process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});