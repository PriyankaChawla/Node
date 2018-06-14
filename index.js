var express= require('express');
var app=express();

var bodyParser = require('body-parser');
var mroute=require('./mroutes/mroute'); 
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/capgemini');

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error:'));

db.once('open', function()
{
   
    console.log("db is open");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.listen("4780",function()
{
    console.log("Server is listening on 4780");
})

app.use("/mongo-api",mroute);