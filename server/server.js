// TODO: make this work.
// if yuo go to localhost:3000 the app
// there is expected crud to be working here
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var _ = require('lodash');


// express.static will serve everything
// with in client as a static resource
// also, it will server the index.html on the
// root of that directory on a GET to '/'
app.use(express.static('client'));

// body parser makes it possible to post JSON to the server
// we can accss data we post on as req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var lions = [];
var id = 0;

// app.use('/',function(req,res,next){
//     console.log('##########')
//     console.log(res)
//     //res.send("hello")
//     next()
// })

// make the REST routes to perform CRUD on lions

app.get('/lions',function(req,res,next){
   res.json(lions);
   //next(new Error('bad cll'))
})

app.get('/lions/:id',function(req,res){
    console.log(req.params)
    console.log(req.query)
    console.log(req.params.hi)
    var lion = _.find(lions,{id:req.params.id});
    res.json(lion||{})
})

app.post('/lions',function(req,res){
      var lion = req.body;
      id++;
      lion.id = id+'';
      lions.push(lion)
      res.json(lions)
})

app.put('/lion/:id',function(){
     
        var update = req.body
        if(update.id){
            delete update.id
        } 
        var lion = _findIndex(lions,{id:req.params.id});
        if(!lions[lion]){
          res.send() 
        }else{
            var updatedLion = _.assign(lions[lion], update)
            res.json(updatedLion);
        }
})

app.delete('./lion/:id',function(){
     
    var lion = _findIndex(lions,{id:req.params.id});
    if(!lions[lion]){
      res.send() 
    }else{
        var updatedLion = lions.splice(lion,1);
        res.json(updatedLion);
    }
})

// app.use(function(err,req,res,next){
//     console.log('error###########')
//     res.send('bad error')
// })
// app.use(function(req,res,next){
//     console.log('*******error###########')
//     res.send('error')
// })


// app.listen(9002,"192.168.0.12",function(){
//     console.log('on port 9002');
// });

app.listen(9002,function(){
    console.log('on port 9002');
});

