const jwt = require('jsonwebtoken');
const config = process.env;

const verifyToken = (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['authorisation'];
    if(!token) {
        res.status(403).send('A token is required for authentication');;
    }

    try{
        token = token.replace('Bearer ', '');
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
    }catch(err){
        return res.status(401).send('Invalid Token');
    }

    return next();
}


module.exports = verifyToken;