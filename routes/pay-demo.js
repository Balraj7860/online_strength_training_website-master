const express = require('express');

const path = require('path');

const router = express.Router();

router.use('/pay-demo',(req,res,next) =>{
    res.sendFile(path.join(__dirname,'..','views','pay-demo.html'));
});

module.exports = router;