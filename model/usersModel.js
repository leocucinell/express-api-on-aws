const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: { //This should be hased/salted before sending over pub internet
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;