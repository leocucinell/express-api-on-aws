const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.route('/')
        .get(ctrl.refreshToken.refreshAccessToken);

module.exports = router;