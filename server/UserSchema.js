const mongoose = require("mongoose");

// create a database schema for storing Party information
const UserSchema = mongoose.Schema({
    // nickname inputted by user
    id: {
        type: Int32Array,
        required: true,
    },
    // party id provided by user
    first_name: {
        type: String,
        required: true,
    },
    // list containing all restaurants taken from the party schema
    last_name: {
        type: String,
        required: true
    },
    // provided in default scheme
    // could be used as another parameter for authentification?
    email: {
        type: String,
    },
});

// export model party with UserSchema
module.exports = mongoose.model("user", UserSchema);
