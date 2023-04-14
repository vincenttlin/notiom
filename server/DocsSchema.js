const mongoose = require("mongoose");

const DocsSchema = mongoose.Schema({
    id: {
        type: Int32Array,
        required: true,
    },
    user_id: {
        type: Int32Array,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

// export model party with DocsSchema
module.exports = mongoose.model("docs", DocsSchema);
