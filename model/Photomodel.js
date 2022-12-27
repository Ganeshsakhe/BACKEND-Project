const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    // Album_id: String,
    // User_id:String,
    Name:String,
    ImageUrl: String,
    date: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Photo', photoSchema)