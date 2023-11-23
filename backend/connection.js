const mongoose = require('mongoose');
const url = "mongodb+srv://Aditya:akd889977@cluster0.yjttxm4.mongodb.net/novelDatabase?retryWrites=true&w=majority";

mongoose.connect(url)

.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});

module.exports = mongoose;