var express = require('express');
const userModel = require('../model/user');
const md5 = require('md5');
var router = express.Router();

/* GET users listing. */
router.get('/form', async function (req, res, next) {
  res.render('user/form', { title: 'Express' });
});

router.post('/form', async function (req, res, next) {
  let body = {
    name: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    gender: req.body.optradio,
    password: md5(req.body.password),
    added_on : new Date()
  }
  await userModel.insert_data(body);
  res.render('user/form', { toast: true });
});

router.get('/search', async function (req, res, next) {
  res.render('user/search', {  });
});


router.post('/search', async function (req, res, next) {
 let user_data = await userModel.search_user(req.body.Keyword);
  res.render('user/search', {userdata : user_data  });
});


module.exports = router;
