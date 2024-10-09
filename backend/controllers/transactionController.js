const fetch = require('node-fetch');
const Transaction = require('../models/Transaction');

// Initialize the database with third-party API data
const initializeDatabase = async (req, res) => {
    try {
        const response = await fetch('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const data = await response.json();

        await Transaction.insertMany(data);
        res.status(200).json({ message: 'Database initialized successfully' });
    } catch (error) {
        console.error('Error initializing database:', error);
        res.status(500).json({ error: 'Failed to initialize the database' });
    }
};

// List products based on filters
const listProducts = async (req, res) => {
    const { month, page = 1, perPage = 10, search } = req.query;
    const filter = { month: parseInt(month) };

    try {
        const transactions = await Transaction.find(filter)
            .skip((page - 1) * perPage)
            .limit(perPage);

        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch transactions' });
    }
};

module.exports = { initializeDatabase, listProducts };
