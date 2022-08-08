import express from "express";
import cors from "cors";
import { router as user_routes } from "../router/usuarios.routes.js";


export default class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 8000;

        this.projectPath = '/api/users';

        this.connectDB();

        this.middlewares();

        this.router();

    }

    // conexion a bd
    async connectDB() {}

    // middlewares:
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    // rutas:
    router() {
        this.app.use(this.projectPath, user_routes)
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en el puerto: ${this.port}`);
        });
    }
}