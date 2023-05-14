import mongoose from "mongoose";


const SavedPostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user' // reference to User collection
    },
    savedPosts: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Job' // reference to Job collection
    }]
});

const SavedPostModel = mongoose.model('SavedPost', SavedPostSchema);

export { SavedPostModel }