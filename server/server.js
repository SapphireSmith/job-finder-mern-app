import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../server/routes/routes.js'
import { connectDb } from './database/connection.js';
import morgan from 'morgan';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import path,{dirname} from 'path'
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
app.use(express.json())
app.use(fileUpload());
app.use(cors({
  origin: ['https://job-finder-client.onrender.com','http://localhost:5173']
}));
app.use(bodyParser.json({ limit: '10mb'}));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true}));
app.use(morgan('tiny'));
app.disable('x-powered-by');
app.use('/', routes);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use('/uploads',express.static(path.join('uploads')));
app.use(express.static(path.join(__dirname, 'uploads')));


const PORT = process.env.PORT;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(error);
    console.log("Could not connect to the database");
})