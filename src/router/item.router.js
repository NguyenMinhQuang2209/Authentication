const router = require('express').Router();
const ItemController = require('../controller/item.controller');

router.get('/',ItemController.getItems);
router.post('/',ItemController.setItem);

module.exports = router;