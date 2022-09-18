const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/sub-page',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','subscription.html'));
});

module.exports = router;