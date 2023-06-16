import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../server/routes/routes.js'
import { connectDb } from './database/connection.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
  origin: ['https://job-finder-client.onrender.com','http://localhost:5173']
}));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use('/', routes);

const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    console.log("Could not connect to the database");
})