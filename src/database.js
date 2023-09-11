import mongoose from 'mongoose';
require('dotenv').config();

const DBHOST = process.env.DBHOST;

mongoose.connect(DBHOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Base de datos conectada"))
    .catch(error => console.log(error))
