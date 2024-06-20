const jwt = require('jsonwebtoken');
const { secretjwt } = require('../../config/config');
const loginSchema = require('../../database/models/login.model');
const rolSchema = require('../../database/models/roles.model');

const validateToken = async (req, res, next) => {
    const accessToken = req.headers['authorization'] || req.query.accesstoken;

    if (!accessToken) return res.status(404).json({ message: "No hay token" });

    try {
        const userverify = jwt.verify(accessToken, secretjwt);
        req.userId = userverify.id;

        const user = await loginSchema.findById(req.userId, { password: 0 });
        if (!user) return res.status(404).json({ message: "El usuario no se encontró" });

        req.userRoles = await rolSchema.find({ _id: { $in: user.rol } });
        next();
    } catch (error) {
        return res.status(401).json({ message: "No tiene autorización!" });
    }
};

const verifyRole = (requiredRole) => {
    return (req, res, next) => {
        if (!req.userRoles) {
            return res.status(500).json({ message: "Roles del usuario no encontrados" });
        }

        const hasRole = req.userRoles.some(role => role.name === requiredRole);
        if (hasRole) {
            next();
        } else {
            return res.status(403).json({ message: `Debe tener permiso de ${requiredRole}` });
        }
    };
};

module.exports = {
    validateToken,
    verifyRole
};
