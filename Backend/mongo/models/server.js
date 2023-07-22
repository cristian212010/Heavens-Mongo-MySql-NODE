import express from "express";
import cors from "cors";
import dbConnection from "../config/config.js"

class ServerMongo {

    constructor(){
        this.app = express();
        this.port = process.env.PORTMONGO
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
        
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server Running on port ${this.port}`);  
        })
    }
}

export default ServerMongo;