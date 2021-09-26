const mongoose = require('mongoose');

const {mongoURI} = require('..');

exports.connect = () => {
    mongoose.connect(mongoURI)
    .then(() => console.log(`Connected to the mongodb...`))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    })
}