const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/api/users');

// '/api/users'

// POST User sign-up
router.post('/', usersCtrl.create);

module.exports = router;
