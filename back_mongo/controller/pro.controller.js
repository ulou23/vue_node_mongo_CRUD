Produ=require('../models/Producent')

exports.index=async function(req,res){
    await Produ.find({}).populate('category').exec().then((pro)=> {

    res.json({
            status:"success",
            message:"Suuuuper",
            data:pro
        }), (err)=>{
            res.send(err);
        
    };
});
}

exports.add=function(req,res){
    Produ.create({
        title:req.body.title,
        phone:req.body.phone,
    }, (err,data)=>{
        if (err){
            res.status(400).json(err)
        }else{
            res.status(201).json(data)
        }
    });
  
    

};

exports.view=function(req,res){
    Produ.findById(req.params.pro_id,function(err,pro){
        if(err)
        res.send(err);
        res.json({
            message:'Producent detail',
            data:pro
        });
    });
};

exports.update=function(req,res){
    Produ.findById(req.params.pro_id, function(err,pro){
        if (err)
        res.send(err);
        pro.title=req.body.title? req.body.title:pro.title;
        pro.description=req.body.description;
        
        pro.phone=req.body.phone;
 

        pro.save(function(err){
            if(err) 
            res.json(err)
            res.json({
                message: 'Updated ok',
                data:pro,
            });
        });

    });
};

exports.delete=function(req,res){
    Produ.deleteOne({
        _id:req.params.pro_id
    }, function(err,contact){
        if(err)
        res.send(err)
        res.json({
            status: "success",
            message: 'Deleted ok'
        })
    })
}

