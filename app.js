const express = require('express');
const path = require('path');

const app = express();

app.set('views','views');

const MPData = require('./routes/main-page');
const SPData = require('./routes/sub-page');
const MWData = require('./routes/MEN-woMEN');

//app.use(bodyparser.urlencoded({extended: false})); 

app.use(MPData);
app.use(SPData);
app.use(MWData);
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000);