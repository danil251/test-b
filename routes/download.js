const express = require('express');
const router = express.Router();
const controller = require('../controllers/load');
const upload = require('../middleware/upload');
const fsPromises = require('fs').promises

router.post('/',async (req, res) => {
    console.log(req.body)
    const fileName = req.body.fileName
    res.setHeader('Content-Type', 'text/plain')
    const file = await fsPromises.readFile(`uploads/${fileName}`)
    res.send(file)
} );

module.exports = router;