const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/men-women-page',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','MEN-woMEN.html'));
});

module.exports = router;