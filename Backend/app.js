import dotenv from 'dotenv';
import ServerMongo from './mongo/models/server.js';
import ServerMySql from './mysql/models/server.js';

dotenv.config();

const serverMongo = new ServerMongo();
const serverMySql = new ServerMySql();

serverMongo.listen();
serverMySql.listen();