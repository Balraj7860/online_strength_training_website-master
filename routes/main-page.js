const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/main-page',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
});

module.exports = router;