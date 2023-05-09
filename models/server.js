import express from "express"
import cors from "cors"
import router from "../routes/user.js";


class Server{
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath= '/api/users';
        // middlewares
        this.meddlewares();
        // Routs 
        this.routs();
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