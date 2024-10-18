const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    const token = req.header('x-auth-token');  // You can also use Bearer token in Authorization header

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};
const auth = require('./middleware/authMiddleware');

// Protected Route
router.post('/create', auth, (req, res) => {
    // Your document creation logic here
    res.send('Document created');
});
