const express = require('express');
const router = express.Router();

const {
    saveData,
    getData,
    getInsights,
    getAlerts,
    getCostAnalysis
} = require('../controllers/energyController');

router.post('/data', saveData);
router.get('/data', getData);
router.get('/insights', getInsights);
router.get('/alerts', getAlerts);
router.get('/cost', getCostAnalysis);

module.exports = router;