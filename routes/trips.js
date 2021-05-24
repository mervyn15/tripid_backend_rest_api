const express = require('express');
const tripController = require('../controllers/trip.controller');
const checkAuthMiddleware = require('../middleware/check-auth');

const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, tripController.save);
router.get('/', tripController.show);

module.exports = router;