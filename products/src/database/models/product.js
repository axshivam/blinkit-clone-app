const mongoose = require('mongoose');

const schema = mongoose.Schema;

const productSchema = schema({
    name: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
        require: true,
    },
    banner: {
        type: String,
        require: true,
    },
    type: {
        type: String,
    },
    unit: {
        type: Number,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    available: {
        type: Boolean,
    },
    supplier: {
        type: String,
    }
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;