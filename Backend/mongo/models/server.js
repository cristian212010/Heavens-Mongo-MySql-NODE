import express from "express";
import cors from "cors";
import dbConnection from "../config/config.js"
import creyentesRoutes from "../routes/creyentes.routes.js";
import ministeriosRoutes from "../routes/ministerios.routes.js";
import nivelFormacionRoutes from "../routes/nivelFormacion.routes.js";
import nivelRutasRoutes from "../routes/nivelRutas.routes.js";

class ServerMongo {

    constructor(){
        this.app = express();
        this.port = process.env.PORTMONGO
        this.creyentesPath = '/api/creyentes';
        this.ministeriosPath = '/api/ministerios';
        this.nivelFormacionPath = '/api/nivelFormacion';
        this.nivelRutasPath = '/api/nivelRutas';
        this.conectDB();
        this.middlewares();
        this.routes();
    }
    async conectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.creyentesPath, creyentesRoutes);
        this.app.use(this.ministeriosPath, ministeriosRoutes);
        this.app.use(this.nivelFormacionPath, nivelFormacionRoutes);
        this.app.use(this.nivelRutasPath, nivelRutasRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server Running on port ${this.port}`);  
        })
    }
}

export default ServerMongo;