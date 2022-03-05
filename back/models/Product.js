const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Please enter product name'],
        trim:true,
        maxLength:[100,'Product name cannot exceed 100 characters']
    },
    price: {
        type:Number,
        required:[true, 'Please enter price']
    },
    description: {
        type:String,
        required:[true, 'Please enter product description']
    }

})

module.exports = mongoose.model('Product',ProductSchema);