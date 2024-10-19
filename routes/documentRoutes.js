const express = require('express');
const router = express.Router();


router.post('/create', (req, res) => {
    
    res.send('Document created');
});

router.get('/:id', (req, res) => {
    
    res.send('Document data');
});

module.exports = router;  
