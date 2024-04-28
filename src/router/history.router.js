const router = require('express').Router();
const HistoryController = require('../controller/history.controller');

router.post('/:username',HistoryController.createHistory);
router.get('/:username',HistoryController.getHistories);

module.exports = router;