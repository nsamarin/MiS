var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* GET detailed page. */
router.get('/events/:id', function (req, res, next) {
    res.render('detailed');
});

router.get('/events/', function (req, res, next) {
    res.render('list');
});



module.exports = router;
