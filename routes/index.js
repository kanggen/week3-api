var express = require('express');
var router = express.Router();
var qurey = require('../mysql/mysql.js')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/select', function(req, res, next) {

});

module.exports = router;