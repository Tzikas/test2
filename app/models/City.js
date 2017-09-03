const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    lat: Number,
    lon: Number,
    wikipedia: String,
    city: String
});

const City = mongoose.model('City', CitySchema);


export default City;
