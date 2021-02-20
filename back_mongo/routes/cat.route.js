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

/*
Catroute.route('/create_cat').post((req,res,next)=>{
    CategoryModel.create(req.body,(error,data)=> {
        if(error){
            return console.log(error)
        }else {
            res.json(data)
        }
    })
})
*/

var catcontroller=require("../controller/cat.controller")

Catroute.route('/cat')
.get(catcontroller.index)
.post(catcontroller.add)

Catroute.route('/cat/:cat_id')
.get(catcontroller.view)
.patch(catcontroller.update)
.put(catcontroller.update)
.delete(catcontroller.delete)


//produkt 

var procontroller=require("../controller/pro.controller");
Catroute.route('/pro')
.get(procontroller.index)
.post(procontroller.add)

Catroute.route('/pro/:pro_id')
.get(procontroller.view)
.patch(procontroller.update)
.put(procontroller.update)
.delete(procontroller.delete)



module.exports=Catroute