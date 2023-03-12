const mongoose = require('mongoose');

const schema = mongoose.Schema;


// address schema for account
const addressSchema = schema({
    address_line_1: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    }
});

// const Address = mongoose.model("address", addressSchema);

module.exports = mongoose.model("address", addressSchema);

