const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/paid-women',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','paid-women.html'));
});

module.exports = router;