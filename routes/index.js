var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('Views/index', { title: 'Express' });
});

router.get('/GetInitData', function (req, res, next) {
    res.json({FirstName: "Viram", LastName : "Keshwala"});
});

router.post('/PostName', function (req, res, next) {
    var firstName = req.body.FirstName;
    var lastName = req.body.LastName;
    res.json({ Success: true, Data : 'Hello, ' + firstName +' ' + lastName });
});

module.exports = router;
