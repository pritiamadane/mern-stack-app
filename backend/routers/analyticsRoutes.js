const express = require('express');
const { getStatistics, getBarChartData, getPieChartData } = require('../controllers/analyticsController');
const router = express.Router();

router.get('/statistics', getStatistics);
router.get('/bar-chart', getBarChartData);
router.get('/pie-chart', getPieChartData);

module.exports = router;
