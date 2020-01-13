var express = require('express');
var router = express.Router();
const outputAmendedTemplate = require('./docx')

router.get('/', function(req,res) {
  outputAmendedTemplate()
})

module.exports = router;
