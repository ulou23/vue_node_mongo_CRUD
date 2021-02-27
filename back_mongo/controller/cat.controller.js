Cat=require('../models/Category')

exports.index=function(req,res){
    Cat.get(function(err,cat){
        if(err)
        res.json({
            status: "error",
            message:err
        });
        res.json({
            status:"success",
            message:"Suuuuper",
            data:cat
        });
    });
};




exports.add=(req,res)=>{
    const proid=req.params.proid;
    const doAddCat=(req,res,data)=>{
        if(!data){
            res.status(400).json({"message":"not found"});
        }else{
            const {name,slug} =req.body;
            data.category.push({
                name,
                slug
            });
            data.save((err,data)=> {
                if(err) {
                    res.status(400).json(err);
                }else{
                    res.status(201).json(data)
                }
            })
        }
    }
    if(proid){
        Produ.findById(proid).select('category').exec((err,data)=>{
            if(err){
                res.status(400).json(data)
            }else{
                doAddCat(req,res,data);
            }
        });
    } else{
        res.status(400).json({"message": "produ lost"})
    }
}

exports.view=function(req,res){
    Cat.findById(req.params.cat_id,function(err,cat){
        if(err)
        res.send(err);
        res.json({
            message:'Category detail',
            data:cat
        });
    });
};

exports.update=function(req,res){
    Cat.findById(req.params.cat_id, function(err,cat){
        if (err)
        res.send(err);
        cat.name=req.body.name? req.body.name:cat.name;
        cat.slug=req.body.slug;
        

        cat.save(function(err){
            if(err) 
            res.json(err)
            res.json({
                message: 'Updated ok',
                data:cat,
            });
        });

    });
};

exports.delete=function(req,res){
    Cat.deleteOne({
        _id:req.params.cat_id
    }, function(err,contact){
        if(err)
        res.send(err)
        res.json({
            status: "success",
            message: 'Deleted ok'
        })
    })
}

