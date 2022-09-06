const express = require('express');const router = express.Router();
const Url = require('../controllers/url');

router.get('/:code', Url.redirect);

router.post('/shorten', Url.shorten);

module.exports = router;
