import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

const connectDb = async () => {
    try {
        const url = process.env.DATABASE_URL;
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(url, options);
        console.log('DataBase Connected');
    } catch (error) {
        console.log(error);
        console.log("Could Not Connect To The DatBase");
    }
}

export { connectDb }