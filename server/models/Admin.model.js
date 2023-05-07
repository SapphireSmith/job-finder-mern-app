import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const AdminModel = mongoose.model('admin', adminSchema,'admins');

export { AdminModel }