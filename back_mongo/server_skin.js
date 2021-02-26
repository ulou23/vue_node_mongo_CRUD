var express=require('express');
var mongoskin=require('mongoskin');
var bodyparser=require('body-parser');

var routes=require('./routes')
var notes=require('./routes/notes')

var app=express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


var db=mongoskin.db('localhost:27017/test2', {safe:true});
app.use(function(req,res,next) {
    req.db={};
    req.db.notes=db.collection('notes');
    next();
})
app.locals.appname="Notes"

app.set('port', process.env.PORT || 3000);


app.param('note_id', function(req,res,next,taskId) {
    req.db.notes.findById(noteId, function(error,note) {
        if(error) return next(error);
        if (!note) return next(new Error("Not found"));
        req.note=note;
        return next()
        
    });
});

app.get('/',routes.index)