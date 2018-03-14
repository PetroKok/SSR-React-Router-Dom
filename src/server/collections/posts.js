import mongoose from "mongoose"

let posts = mongoose.Schema({
    title: String,
    text: String,
    img: String
});

module.exports = mongoose.model('posts', posts);