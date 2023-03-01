const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.send('HEllo');
})

app.use(morgan('combined'));

app.listen(port,()=>{
    debug("Listen on port: %d" + chalk.green(port));
})