const mongoose = require('mongoose');

const EnergySchema = new mongoose.Schema({
    device: String,
    power: Number,
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Energy', EnergySchema);