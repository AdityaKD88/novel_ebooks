const multer = require('multer');
const express = require('express');
const router = express.Router();

// initialize multer
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const uploader = multer({storage: fileStorage});

router.post('/uploadcover', uploader.single('mycover'), (req, res) => {
    res.json({status: 'success'});
})

router.post('/uploadbook', uploader.single('mybook'), (req, res) => {
    res.json({status: 'success'});
})

module.exports = router;