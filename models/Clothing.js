const mongoose = require('mongoose');

const clothingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
        required: false,
    },
    });

const Clothing = mongoose.model('Clothing', clothingSchema);
module.exports = Clothing;