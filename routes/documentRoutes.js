const express = require('express');
const router = express.Router();

// Example route for document creation
router.post('/create', (req, res) => {
    // Your document creation logic here
    res.send('Document created');
});

router.get('/:id', (req, res) => {
    // Your logic to get a document by ID here
    res.send('Document data');
});

module.exports = router;  // Ensure you are exporting the router
