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
    }
});

module.exports = mongoose.model('account', accountSchema);