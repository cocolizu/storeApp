const express = require('express');
const cors = require('cors')
const bodyparser = require('body-parser')
var banner = require('./routers/banner.js')
var app = express();
app.listen(5050);
app.use(bodyparser.urlencoded({
    extended:false
}))
app.use(cors({
    origin:'*',
    credentials:true
}))
app.use(express.static(__dirname+'/public'));
app.use('/store',banner)
