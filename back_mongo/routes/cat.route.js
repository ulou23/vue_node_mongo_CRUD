const exp=require('express');
const studentroute=exp.Router();

let CategoryModel=require('../models/Category')

studentroute.route('/').get((req,res)=> {
    CategoryModel.find((error,data)=>{
        if(error){
            return console.log(error)
        } else{
            res.json(data)
        }
    })
})

studentroute.route('/create_cat').post((req,res,next)=>{
    CategoryModel.create(req.body,(error,data)=> {
        if(error){
            return console.log(error)
        }else {
            res.json(data)
        }
    })
})

module.exports=studentroute