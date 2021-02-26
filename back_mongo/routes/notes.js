exports.list=function(req,res,next) {
req.db.notes.find({completed:false}).toArray(function(error,notes) {
    if(error) return next(error);
    res.json({
        notes: notes || []
    })
    
})    
}

exports.add=function(req,res,next) {
    if (!req.body || !req.body.name) return next(new Error('No data provided.'));
    req.db.notes.save({
        name:req.body.name,
        completed:false
    }, function(error,note){
        if(error) return next(error);
        if (!note) return next(new Error('Failed to save'));
        console.info('Added %s id  = %s', note.name, note._id);
    })
    
}