import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../server/routes/routes.js'
import { connectDb } from './database/connection.js';
import morgan from 'morgan';


const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.disable('x-power-by')
app.use('/', routes)

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    console.log("Could not connect to the database");
})

