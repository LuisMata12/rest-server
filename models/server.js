import express from "express"
import cors from "cors"
import router from "../routes/user.js";
import dbConection from "../db/config.js";


class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath= '/api/users';

        // conectar a base de datos
        this.dbOnline();

        // middlewares
        this.meddlewares();

        // Routs 
        this.routs();
    }
    async dbOnline(){
        await dbConection();
    }
    meddlewares(){
        // CORS
        this.app.use(cors());
        // Reading and JSON parse
        this.app.use(express.json());
        // Public dir
        this.app.use(express.static('public'));
    }
    routs(){
        this.app.use(this.usuariosPath,router);
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Runing in port' + this.port);
        })
    }
}

export default Server;