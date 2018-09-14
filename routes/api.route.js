var express = require('express');
var router = express.Router();

var berat = require('../controllers/berat.controller');

const Berat = new berat;

/* API for create new berat record */
router.post('/create', function(req, res, next) {
  Berat.create(req,res);
});

/* API for update a berat record depends on tanggal */
router.put('/update', function(req, res, next) {
  Berat.update(req,res);
});

/* API for get all berat records */
router.get('/get-all', function(req, res, next) {
  Berat.showAll(res);
});

/* API for get detail of a record depends on tanggal */
router.get('/show-detail/:tanggal', function(req, res, next) {
  Berat.showDetail(req,res);
});

module.exports = router;
