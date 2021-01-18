const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required."],
        minlength: [2, "Player name must be at least 3 characters long."]
    }, 
    position: {
        type: String,
        required: [false]
    }, 
    game1Status: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },
    game2Status: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },
    game3Status: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },

}, { timestamp: true } )

module.exports.Player = mongoose.model('Player', PlayerSchema);


