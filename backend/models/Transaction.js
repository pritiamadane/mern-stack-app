const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    month: Number,
});

module.exports = mongoose.model('Transaction', transactionSchema);
