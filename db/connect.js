const mongoose = require('mongoose');

const username = 'tushar';
const password = encodeURIComponent('tushar@123');
const dbName = 'myApi';

const URL = `mongodb+srv://${username}:${password}@cluster0.5cg3uyj.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

const connectDB = () => {
    console.log("Connected with DB...");
    return mongoose.connect(URL);
}

module.exports = connectDB;