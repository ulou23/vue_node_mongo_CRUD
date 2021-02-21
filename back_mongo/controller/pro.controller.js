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
    var pro=new Produ();
    pro.title=req.body.title? req.body.title:pro.title;
    pro.description=req.body.description;
    pro.category=req.body.category;
    pro.phone=req.body.phone;
    pro.contact_person=req.body.contact_person;

    pro.save(function(err){
        if (err)
        res.json(err);
        res.json({
            message:"New ok",
            data:pro
        }).populate('category', 'name');
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
        pro.category=req.body.category;
        pro.phone=req.body.phone;
        pro.contact_person=req.body.contact_person;

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

