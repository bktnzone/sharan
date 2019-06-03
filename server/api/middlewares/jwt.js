const expressJwt = require('express-jwt');

function jwt() {
    const { jwtSecret } = {jwtSecret:process.env.JWT_SECRET};
    return expressJwt({ secret:jwtSecret }).unless({
        path: [
            // public routes that don't require authentication
            '/api/auth/login'
        ]
    });
}

module.exports = jwt;



