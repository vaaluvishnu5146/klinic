const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../utils");
const { SYSTEM_USERS, PRESCRIPTION_PROVIDERS } = require("../config");

function checkTokenValid(req, res, next) {
    try {
        const token = req.headers['authorization'];
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: error,
            message: "Token is invalid or expired"
        });
    }
}

async function checkUserIsSystemUser(req, res, next) {
    try {
        const token = req.headers['authorization'];
        const decodedToken = jwt.verify(token, SECRET_KEY);
        if(!decodedToken.uId) {
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            });
        }
        if(!SYSTEM_USERS.includes(decodedToken.role)) {
            return res.status(401).json({
                success: false,
                message: "Un authorized access"
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            error: error,
            message: "Token is invalid or expired"
        });
    }
}



module.exports = {
    checkTokenValid,
    checkUserIsSystemUser
};