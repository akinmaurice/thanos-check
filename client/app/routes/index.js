const express = require('express');

const router = express.Router();

const appController = require('../controllers/appController');

/* GET home page. */
router.get('/', (req, res) => {
  const ipAddress = req.connection.remoteAddress;
  appController.getStatus(ipAddress)
    .then((response) => {
      res.render('index', {
        title: 'Did Thanos Kill You',
        response,
      });
    })
    .catch((error) => {
      res.render('error', {
        title: 'Error',
        error,
      });
    });
});

module.exports = router;
