// check usarname, passwrod in post (login) request
// if exist create new JWT
// send back to frontend

// !* LÓGICA:
// (POST): http://localhost:3000/api/login => enviar un json con username y password. Devuelve un token
// (GET): http://localhost:3000/api/dashboard (en headers Authorization: Bearer token_generado_al_hacer_login) => devuelve un mensaje y el secret

import {} from "dotenv/config";

import jwt from "jsonwebtoken";

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            throw new Error("Por favor proveer un correo y una constraseña");
        }
        const id = new Date().getDate();

        const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        return res.status(200).json({ msg: "user created", token });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: "Se produjo un error",
        });
    }
};

export const dashboard = (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100);
    return res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Here is your authorized data: ${luckyNumber}`,
    });
};
