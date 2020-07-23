const mongoose = require('mongoose');

const ManagerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [
            2,
            'Please provide a name'
        ] 
    },
    price: {
        type: Number
    },
    description: {
        type: String,
        required: [
            2,
            'Please provide at least 2 characters.'
        ]
    }
}, {
    timestamps: true
});

module.exports.Manager = mongoose.model('Manager', ManagerSchema);