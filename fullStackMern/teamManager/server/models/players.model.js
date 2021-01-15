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
    gameOneStatus: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },
    gameTwoStatus: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },
    gameThreeStatus: {
        type: String,
        default: "Not Playing",
        required: [true, "Player status is required"]
    },

}, { timestamp: true} )

module.exports.Player = mongoose.model('Player', PlayerSchema);