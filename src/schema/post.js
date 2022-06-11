const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    postBody: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);