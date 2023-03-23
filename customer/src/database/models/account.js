const mongoose = require('mongoose');

const schema = mongoose.Schema;

const accountSchema = schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
    salt: {
        type: String,
        required: true,
    },
    address: [
        { type: schema.Types.ObjectId, ref: 'address', require: true}
    ],
    cart: [
        {
            product: {
                _id: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                },
                banner: {
                    type: String,
                },
                price: {
                    type: Number,
                }
            },
            unit: {
                type: Number,
                required: true,
            }
        }
    ],
    wishlist: [
        {
            _id: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            banner: {
                type: String,
                required: true,
            },
            available: {
                type: Boolean,
                required: true
            },
            price: {
                type: Number,
                required: true,
            }
        }

    ],
    orders: [
        {
            _id: {
                type: String,
                required: true,
            },
            amount: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now(),
            }
        }
    ]
});

module.exports = mongoose.model('account', accountSchema);