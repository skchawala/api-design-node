// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data

var express = require('express');
var fs = require('fs')

var jsonData = {count: 12, message: 'hey'};

var data = {
    name:'satish',
    surname: 'kumar'
}
var app = express();


//express matches exact match

app.use('/abcd', function (req, res, next) {
    res.json({title:2})
  });

app.use('/abc?d', function (req, res, next) {
    res.json({title:1})
  });



app.get('/',function(req,res){
     
     res.sendFile(__dirname+'/index.html',function(err){
         if(err){
             res.status(500).send(err)
         }
     })
//    fs.readFile('./index.html',function(err,buffer){


//     var html = buffer.toString();
//     res.setHeader('Context-Type','text/html')
//     res.send(html)
//    })

})



app.get('/data',function(req,res){
   res.json(data)
})

//serve static files

//app.use(express.static('public'));  //same as app.use('/',express.static('public'));
//app.use('/',express.static('public'));
app.use('/static',express.static('public'));

//-----------------------------RESTful API design--------------------------------------

app.get('/lions',function(req,res){
   

})






var port = 9002;

app.listen(port,function(){
    console.log('listening on port',port);
})