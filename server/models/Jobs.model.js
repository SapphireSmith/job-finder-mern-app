import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    position: {
        type: String,
        required: true
    },
    jobLocation: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    jobType: {
        type: String,
        enum: ['Internship', 'Remote', 'Part-Time', 'Full-Time'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    email:{
        type:String,
        required:true
    }
    // userType: {
    //     type: String,
    //     enum: ['Employee', 'Recruiter', 'Admin'],
    //     required: true
    // }
});

const JobModel = mongoose.model('Job', jobSchema, 'jobs');

export { JobModel }