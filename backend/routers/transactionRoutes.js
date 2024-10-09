const express = require('express');
const { initializeDatabase, listProducts } = require('../controllers/transactionController');
const router = express.Router();

router.get('/initialize-seed-data', initializeDatabase);
router.get('/', listProducts);

module.exports = router;
