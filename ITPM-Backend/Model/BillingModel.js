const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BillingSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    gmail: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("BillingModel", BillingSchema);
