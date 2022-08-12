const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.send('<h1>Home Page</h1>');
});

router.get('/dashboard',(req,res)=>{
    res.json({message: 'This is a dashboard'});
});

router.get('/report', (req,res)=>{
    res.send('<h1>Report page</h1>');
});

module.exports = router;