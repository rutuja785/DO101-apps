var express = require('express');
app = express();

app.get('/',function (req,res){
    res.send('Hello World!\n');
});

app.get('/mars', function(req,res){
    res.send('Hello Mars!\n');
});

app.listion(8080,function(){
    console.log("Hello World");
});


