var GamingStores = require('../models/GamingStores');
var express=require('express');
var mongoose=require('mongoose');
const multer = require('multer');
const fs = require('fs');
var router=express.Router();


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../front/public/logos')
    },
    filename: function (req, file, cb) {
        let ext = ''; // set default extension (if any)
        if (file.originalname.split(".").length>1) // checking if there is an extension or not.
            ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
        cb(null, Date.now() + ext)
    }
});