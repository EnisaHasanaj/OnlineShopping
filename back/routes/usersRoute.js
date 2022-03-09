var User = require('../models/User');
var express=require('express');
// var mongoose=require('mongoose');
const multer = require('multer');
const fs = require('fs');
var router=express.Router();

router.get('/',function(req,res,next){
    User.find(function(err,user){
        if(err)return next(err);
        res.json(user);
    })
})

router.get('/:id',function(req,res,next){
    User.findById(req.params.id,function(err,user){
        if(err)return next(err);
        res.json(user);
    })
})





router.delete('/:id',function(req,res,next){


    User.findByIdAndRemove(req.params.id,req.body,function(err,user){
        if(err)return next(err);
        res.json(user);
    })
})

module.exports = router;

