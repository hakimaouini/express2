const express = require('express');

const app = express()
const routemembres=require('./routemembers')
app.use('/members',routemembres)
    
app.listen(3000, () => console.log('server started'));
