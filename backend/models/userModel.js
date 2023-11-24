const {Schema, model} = require('../connection');

const mySchema = new Schema({
    name: String,
    email: String,
    mobile: String,
    password: String,
    cpassword: String
});

module.exports = model('users', mySchema);