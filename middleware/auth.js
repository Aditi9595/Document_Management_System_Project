const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Authorization header should be: "Bearer TOKEN"

    if (!token) return res.sendStatus(403); // If no token is present

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user; // Attach user info from token to the request object
        next();
    });
}

module.exports = { authenticateToken };
