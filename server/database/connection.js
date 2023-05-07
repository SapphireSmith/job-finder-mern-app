import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const url = 'mongodb://localhost:27017/JobFinder'
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