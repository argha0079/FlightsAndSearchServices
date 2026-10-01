import express from "express";
import { PORT } from "./config/envConfig.js";
import bodyParser from "body-parser";
import { connectDatabase } from "./config/dbConfig.js";
import apiRouter from "./routes/index.js"
import morgan from "morgan";

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(morgan('dev'));

    app.use('/api', apiRouter);

    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();