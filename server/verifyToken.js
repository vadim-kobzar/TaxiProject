const jwt = require('jsonwebtoken');
const config = require('./config');

function verifyToken(req, res, next) {
    const token = req.headers['token'];
    if (!token) {
        return res.status(403).send({ message: 'No token provided.' });
    }

    jwt.verify(token, config.secret, function (err, decoded) {
        if (err) {
            return res.status(500).send({ message: 'Failed to authenticate token.' });
        }
        // if everything good, save to request for use in other routes
        req.userId = decoded.id;
        next();
    });
}

module.exports = verifyToken;