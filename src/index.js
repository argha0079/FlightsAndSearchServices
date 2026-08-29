import express from "express";
import { PORT } from "./config/envConfig.js";
import bodyParser from "body-parser";
import { connectDatabase } from "./config/dbConfig.js";
import apiRoutes from "./routes/index.js"

const setupAndStartServer = async () => {

    // create the express object
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', apiRoutes);

    await connectDatabase();

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setupAndStartServer();