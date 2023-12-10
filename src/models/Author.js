const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
    guid: String,
    isActive: Boolean,
    balance: String,
    picture: String,
    age: Number,
    eyeColor: String,
    name: {
      first: String,
      last: String,
    },
    company: String,
    email: String,
    phone: String,
    address: String,
    about: String,
    registered: String,
    latitude: String,
    longitude: String,
    tags: [String],
    range: [Number],
    friends: [
      {
        greeting: String,
        favoriteFruit: String,
      },
    ], 
})

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;