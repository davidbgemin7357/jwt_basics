import jwt from "jsonwebtoken";

export const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        throw new Error('No se proveyó el token')
}

    const token = authHeader.split(' ')[1];
    // console.log(typeof token)
    // console.log(token)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log(decoded)
        const {id, username} = decoded;
        req.user = {id, username}
        next();
    } catch (error) {
        console.log(error)
    }
};
