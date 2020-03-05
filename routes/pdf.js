const express = require('express');
const router = express.Router();
const createPdf = require('../helper/pdf.js');

router.get('/', async function (req, res, next) {
  // await createPdf.barcode();
  // await createPdf.pdfhtml();
  await createPdf.pdfWithData();
  
  console.log("/////////////pdf end////////")
  return res.send({ msg: "done" });
});


module.exports = router;