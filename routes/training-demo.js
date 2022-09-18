const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/training-demo',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','training-demo.html'));
});

module.exports = router;