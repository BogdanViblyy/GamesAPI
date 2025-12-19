const mongoose = require('mongoose');

// Определение схемы для игр
const gameSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    category: {
        type: String
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    releaseDate: {
        type: Date,
        default: Date.now
    }
});

// Создание модели на основе схемы
module.exports = mongoose.model('Game', gameSchema);