const express = require('express');
const db = require('../models/index');
const CRUDservices = require('../services/CRUDservices');
const router = express.Router();
const homecontrollers = require('../controllers/homecontrollers');

const initWebRoute = (app, upload) => {
  router.post(
    '/addfamily/post-family',
    upload.single('image'),
    async (req, res) => {
      try {
        let imagePath = null;

        if (req.file) {
          imagePath = req.file.path;
        }

        const data = {
          Namefamily: req.body.Namefamily,
          EmployeeName: req.body.EmployeeName,
          addressfamily: req.body.addressfamily,
          roleId: req.body.roleId,
          imagePath: imagePath, // Lưu đường dẫn tệp hình ảnh (hoặc null nếu không có file)
        };

        await CRUDservices.createfamily(data);
        res.send('Create a new family succeeded');
      } catch (error) {
        console.error('Error creating family:', error);
        res.status(500).send('Error creating family');
      }
    }
  );

  // Các route khác
  router.get('/', (req, res) => {
    return res.render('home/home.ejs');
  });

  router.get('/addfamily', (req, res) => {
    return res.render('famlily/addfamily.ejs');
  });

  router.get('/show', homecontrollers.pagehienthifamily);

  return app.use('/', router);
};

module.exports = initWebRoute;
