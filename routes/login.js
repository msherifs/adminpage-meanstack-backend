const express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.json({title: "Hello"});
});

module.exports = router;
