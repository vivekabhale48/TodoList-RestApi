const express = require('express');
const router = express.Router();

router.get('/home',(req,res)=>{
    res.json({name: 'Admin'});
});

module.exports = router;