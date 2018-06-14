var express = require('express');
var route =express.Router();

var companies =require('../schema/schema');

route.get('/companies/:name',function(request,response)
{
    let name=request.params.name;

    companies.find({name: name},function(err,data)
    {
        if(err)
        response.json({});
        else
        response.json(data);
    });
});

module.exports=route;