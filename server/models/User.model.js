import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    userType: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        require: true
    },
    skill: {
        type: String,
    },
    country: {
        type: String,
    },
    file: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const UserModel = mongoose.model('user', userSchema, 'users');

export { UserModel };