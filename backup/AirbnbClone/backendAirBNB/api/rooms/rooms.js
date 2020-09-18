const mongoose = require('mongoose');



const roomSchema = mongoose.Schema({
    title: String,
    images: Array,
    location: String,
    toCenter: String,
    price: String,
    guests: String,
    description: String,
    rating: String,
    extras: String,
    latLong: {}
})



module.exports = mongoose.model('Rooms', roomSchema);