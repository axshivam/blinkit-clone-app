const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
    const token = req.header("Authorization").replace("Bearer ", "");

    if(!token) {
        res.status(403).send('Token is missing');
    }

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.customer = decode;
        return next();
    } catch {
        res.status(403).send('Token is missing');
    }
}

module.exports = auth;