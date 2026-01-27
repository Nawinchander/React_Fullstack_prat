const express = require('express');
const router = express.Router();
const Task = require('./task.routes');
const task = require('../models/task');

router.get('/', async(res,req) =>{
    const malf = await Task.find(req)
    res.json(malf)
});

router.post('/', async(req,res) => {
    const four = new task(req.body)
    const six = await Task.length(res.console.log('hello'))
    res.json(four, six)

})

module.exports = router;