const express = require('express');
const router = express.Router();

const admin = require('firebase-admin');

const getAuthToken = (req, res, next) => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(' ')[0] === 'Bearer'
    ) 
    {
        req.authToken = req.headers.authorization.split(' ')[1];
    } 
    else {
        req.authToken = null;
    }
    next();
};

const checkIfAuthenticated = (req, res, next) => {
    getAuthToken(req, res, async () => {
        try {
            const { authToken } = req;
            const userInfo = await admin
                .auth()
                .verifyIdToken(authToken);
            req.authId = userInfo.uid;
            return next();
        } 
            catch (e) {
            return res
                .status(401)
                .send({ error: 'You are not authorized to make this request!' });
        }
    });
};

const serviceAccount = require("../test--auth-vue-firebase-admin.json")
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),

})

const Products = require('../models/Products');

router.get('/', checkIfAuthenticated,async (req, res) => {
    try { 
        const products = await Products.find(); 
        res.json(products);
    } 
    catch (err) {
        res.json({ message : err })
    }
});



router.get('/:productId', async (req, res) => {
    try {
         const product = await Products.findById(req.params.productId);
         res.json(product);
    } 
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const product = new Products({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })


    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } 
    catch (err) {
        res.json(err);
    }
})

router.delete('/:productId', async(req, res) => {
    try {
        const removedProduct = await Products.remove({ _id: req.params.productId });
        res.json(removedProduct);
    } 
    catch (err) {
        res.json({message: err})
    }
})

router.patch('/:productId', async(req, res) => {
    try {
        const updatedProduct = await Products.updateOne({ _id: req.params.productId}, { $set : {title: req.body.title, description: req.body.description, price: req.body.description} });
        res.json(updatedProduct);
    } 
    catch (err) {
        res.json({ message: err} )
    }
})

module.exports = router;
