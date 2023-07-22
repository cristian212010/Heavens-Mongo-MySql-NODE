import express from "express";
import cors from 'cors';
import conectarDB from "../config/dbConnect.js";
import departamentosRoutes from "../routes/departamentos.routes.js";
import municipiosRoutes from "../routes/municipios.routes.js";
import comunasRoutes from "../routes/comunas.routes.js";
import barriosRoutes from "../routes/barrios.routes.js";
import creyentesRoutes from "../routes/creyentes.routes.js";

class ServerMySql{

    constructor(){
        this.app = express();
        this.port = process.env.PORTSQL;
        this.departamentosPath = '/api/departamentos';
        this.municipiosPath = '/api/municipios';
        this.comunasPath = '/api/comunas';
        this.barriosPath = '/api/barrios';
        this.creyentesPath = '/api/creyentes';
        this.conectar();
        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    async conectar(){
        await conectarDB();
    }

    routes(){
        this.app.use(this.departamentosPath, departamentosRoutes);
        this.app.use(this.municipiosPath, municipiosRoutes);
        this.app.use(this.comunasPath, comunasRoutes);
        this.app.use(this.barriosPath, barriosRoutes);
        this.app.use(this.creyentesPath, creyentesRoutes);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER MYSQL RUNNING ON PORT ${this.port}`);
        });
    }
}

export default ServerMySql;