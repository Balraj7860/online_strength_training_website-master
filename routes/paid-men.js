const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/paid-men',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','paid-men.html'));
});

module.exports = router;