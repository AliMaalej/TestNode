var mongoose = require('mongoose')
var schema = mongoose.Schema
var Hotel = new schema({
    name: String,
    fabricationDate: Date,
    nbrRooms: Number

})
module.exports = mongoose.model('hotels', Hotel)