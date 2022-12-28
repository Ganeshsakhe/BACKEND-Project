const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    albumid: String,
    userid:String,
    name:String,
    ImageUrl: String,
    date: { type: Date, default: Date.now },
})
module.exports = mongoose.model('Photo', photoSchema)