const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
    wikipedia: String,
    city: String
});

export default mongoose.model('City', CitySchema);
