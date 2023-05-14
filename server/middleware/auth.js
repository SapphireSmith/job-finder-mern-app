import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodeToken = jwt.verify(token, JWT_SECRET);
        req.user = decodeToken;
        next();
    } catch (error) {
        res.status(401).send({ error: "Authenticaation failed" });
    }
}