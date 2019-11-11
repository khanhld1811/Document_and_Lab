var express = require('express');


var db = require('../db');
var controller = require('../controller/user.controller');

var router = express.Router();


// Render file html users/index.pug
router.get('/', controller.index);

// Search users
router.get('/search', controller.search);

// render file html create.pug
router.get('/create', controller.create);

router.get('/:id',controller.get);

//post users
router.post('/create',controller.postCreate);

module.exports = router;