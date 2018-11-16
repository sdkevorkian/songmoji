var mongoose = require('mongoose');

var artistSchema = new mongoose.Schema({
    songs: [{ type: Schema.Types.ObjectId, ref: 'Song' }]
});

// create a schema
var songSchema = new mongoose.Schema({
    artist: { type: Schema.Types.ObjectId, ref: 'Artist', required: true },
    title: { type: String, required: true },
    rating: Number,
    fiveStars: Number,
    fourStars: Number,
    threeStars: Number,
    twoStars: Number,
    oneStars: Number
});

module.exports = artistSchema, songSchema;