var GamingStores = require('../models/GamingStores');
var Product = require('../models/Product');
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

var upload = multer({ storage: storage });


var path = require('path'),
    __imagesPath = "logos";


router.get('/',function(req,res,next){
    GamingStores.find(function(err,gamingstore){
        if(err)return next(err);
        res.json(gamingstore);
    })
})

router.get('/:id',function(req,res,next){
    GamingStores.findById(req.params.id,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.get('/search/:searchTerm',function(req,res,next){
    GamingStores.find({"name" : {$regex: req.params.searchTerm} },function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.post('/:id/product', function(req,res,next){
    GamingStores.findById(req.params.id,function(err,gamingStore){
        if(err)return next(err);


        Product.create(req.body,function(err,product){
            if(err)return next(err);
            gamingStore.products.push(product);
            GamingStores.updateOne(gamingStore,function(err,post){
                if(err)return next(err);
                res.json(post);
            })
        })
    });
})

router.post('/',upload.single('image'), function(req,res,next){

    let gamingStores = {
        name: req.body.name,
        description: req.body.description,
        images: [
            {
                public_id: req.body.images_public_id,
                url: __imagesPath + '/' + req.file.filename
            }
        ],
        location:[
            {
                city: req.body.location_city ,
                street: req.body.location_street
            }
        ],
        telephone: req.body.telephone,
        hours:[
            {
                from:req.body.hours_from,
                to:req.body.hours_to
            }
        ]
    }

    GamingStores.create(gamingStores,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})
router.put('/:id', upload.single('image'), function(req,res,next){

    // Deleting old image  // IMPORTANT
    deleteImageGamingStore(req.params.id);

    let gamingStores = {
        name: req.body.name,
        description: req.body.description,
        images: [
            {
                public_id: req.body.images_public_id,
                url: __imagesPath + '/' + req.file.filename
            }
        ],
        location:[
            {
                city: req.body.location_city ,
                street: req.body.location_street
            }
        ],
        telephone: req.body.telephone,
        hours:[
            {
                from:req.body.hours_from,
                to:req.body.hours_to
            }
        ]
    }

    GamingStores.findByIdAndUpdate(req.params.id,gamingStores,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})

router.delete('/:id',function(req,res,next){
    // Deleting image of the item being deleted
    deleteImageGamingStore(req.params.id);

    GamingStores.findByIdAndRemove(req.params.id,req.body,function(err,post){
        if(err)return next(err);
        res.json(post);
    })
})


var deleteImageGamingStore = function(id) {
    GamingStores.findById(id,function(err,post){
        if(err)return next(err);
        console.log(post);
        // fs.unlinkSync("C:\\Users\\Asdren\\Desktop\\foodpicker_app\\front\\public\\" + "\\" + post.images[0].url);
        fs.unlinkSync("/Users/erakastrati/Desktop/foodpicker_app-development/front/public/" + post.images[0].url);
    })
}

module.exports = router;

