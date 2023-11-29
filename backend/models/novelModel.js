const {Schema, model} = require('../connection');

const mySchema = new Schema({
    title: String,
    author: String,
    price: String,
    uploadedby: String,
    coverphoto: String,
    book: String
});

module.exports = model('novels', mySchema);