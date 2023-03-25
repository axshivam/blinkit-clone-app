const jwt = require('jsonwebtoken');

function auth( req, res, next ) {
    const token = req.header('Authorization').replace("Bearer ", "");

    if(!token) {
        return res.status(403).send("Token is missing");
    }

    try {
        const decode = jwt.verify(token, process.env.SECRET_KEY);
        req.customer = decode;

        return next();
    } catch {
        return res.status(403).send("Token is missing");
    }
} 