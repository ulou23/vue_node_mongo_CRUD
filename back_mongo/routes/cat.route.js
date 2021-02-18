const exp=require('express');
const Catroute=exp.Router();

let CategoryModel=require('../models/Category')

Catroute.route('/').get((req,res)=> {
    res.json({
        status: 'API',
        message: 'welcome'
    })
   /* CategoryModel.find((error,data)=>{
        if(error){
            return console.log(error)
        } else{
            res.json(data)
        }
    }) */
})

Catroute.route('/create_cat').post((req,res,next)=>{
    CategoryModel.create(req.body,(error,data)=> {
        if(error){
            return console.log(error)
        }else {
            res.json(data)
        }
    })
})

module.exports=Catroute