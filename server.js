const express = require('express');

const app = express();

app.use("/css", express.static(__dirname + '/css')); 

app.get('/',function(req,res){
    console.log('Hello from server');
    console.log(__dirname);
    res.sendFile(__dirname + '/index.html');
});

app.get('/about',function(req,res){
    res.sendFile(__dirname + '/about.html');
});

app.listen(3000,function(){
    console.log('Server is live');
})