var express = require('express');
var multer = require('multer');
const path = require('path');

var controller = require('../controller/employee.controller');

var router = express.Router();

router.get('/',controller.index);


storage = multer.diskStorage({
    destination: function (req, file, next) {
          next(null, './public/uploads')
       },
       filename: function (req, file, next) {
          next(null,Date.now() + path.extname(file.originalname))
       }
    });
    const upload = multer({
        storage: storage
    }).any('img');

router.post('/',controller.create);

router.put('/:eplCode',upload,controller.image);

router.delete('/delete-employee/:id',controller.delete);

router.patch('/update-employee/:id',controller.update);

module.exports = router;