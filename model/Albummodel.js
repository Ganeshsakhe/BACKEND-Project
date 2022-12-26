const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    Name: String,
    date: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Album', albumSchema)