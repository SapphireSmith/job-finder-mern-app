import { AdminModel } from "../models/Admin.model.js";
import { JobModel } from "../models/Jobs.model.js";
import { UserModel } from "../models/User.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv';
import { SavedPostModel } from "../models/SavedJobs.model.js";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET

//** USER ROUTING FUNCTIONS */

//** This function is used to register a new user */
export const userRegister = async (req, res) => {
    try {
        const { firstName, lastName, email, password, userType } = req.body;

        //** Check if email is already registered */
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(500).json({ error: "This EmailId is already Registered" });
        }

        //** Hash password and save user */
        if (password) {
            bcrypt.hash(password, 10)
                .then((hashedPassword) => {
                    const user = UserModel({
                        firstName,
                        lastName,
                        password: hashedPassword,
                        email,
                        status: false,
                        userType
                    });

                    user.save()
                        .then((result) => {
                            res.status(201).send({ msg: "Account created..." });
                        })
                        .catch((error) => {
                            return res.status(404).send({ error: error.message });
                        });
                })
                .catch((error) => {
                    return res.status(500).send({
                        error: "Can't generate Hashed password"
                    });
                });
        }
    } catch (error) {
        return res.status(500).send({ error: "Some error occurred" });
    }
}

//** This function is used to log in a user */
export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (user?.status) {
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return res.status(400).send({ msg: "Incorrect password" });
            }
            //Create JWT token
            const token = jwt.sign({
                userId: user._id,
            }, JWT_SECRET, { expiresIn: '8hr' });

            return res.status(200).send({
                msg: "Login success...",
                token
            });
        } else if (user) {
            return res.status(401).send({ msg: "Admin approval pending" });
        }
        return res.status(404).send({ msg: "Email id not registered" });
    } catch (error) {
        return res.status(500).send({ error });
    }
}

//** To get all jobs */
export const getJobs = async (req, res) => {
    try {
        const allJobs = await JobModel.find();
        if (allJobs.length === 0) {
            return res.status(404).send({ msg: "No Job Posts" })
        } else {
            return res.status(201).send(allJobs)
        }

    } catch (error) {
        return res.status(500).send({ error });
    }
}

//** Get saved post */
export const getSavedPost = async (req, res) => {
    try {
        const { userId } = req.user;

        if (!userId) {
            return res.status(400).json({ message: 'User id not found' });
        }

        const savedPost = await SavedPostModel.findOne({ userId })
            .populate('savedPosts');

        if (!savedPost) {
            return res.status(404).json({ message: 'Saved posts not found' });
        }

        return res.status(200).json({ savedPosts: savedPost.savedPosts });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

//** Function for saving post */
export const saveJobPost = async (req, res) => {
    try {
        const { userId } = req.user;
        if (userId) {
            const { postId } = req.body;
            const savedPost = await SavedPostModel.findOne({ userId });
            if (!savedPost) {
                const newSavedPost = new SavedPostModel({
                    userId,
                    savedPosts: [postId],
                });
                await newSavedPost.save();
                return res.status(200).send({ message: "Post saved successfully" });
            } else {
                const { savedPosts } = savedPost;
                if (!savedPosts.includes(postId)) {
                    savedPosts.push(postId);
                    await savedPost.save();
                    return res.status(200).send({ message: "Post saved successfully" });
                } else {
                    return res.status(400).send({ message: "Post already saved" });
                }
            }
        } else {
            return res.status(401).send({ message: "Unauthorized" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error });
    }
};

//** Function for deleting saved post */
export const removeSavedPost = async (req, res) => {
    const { postId } = req.params;
    const { userId } = req.user;
    console.log(userId, postId);

    try {
        const savedPost = await SavedPostModel.findOne({ userId });
        if (!savedPost) {
            return res.status(404).json({ message: 'Saved post not found' });
        }

        const updatedSavedPosts = savedPost.savedPosts.filter(
            (id) => id.toString() !== postId
        );

        savedPost.savedPosts = updatedSavedPosts;
        await savedPost.save();

        res.status(200).json({ message: 'Saved post removed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};






//** ADMIN ROUTING FUNCTIONS  */

//** Login function */
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminModel.findOne({ email });

        if (!admin) {
            return res.status(401).send({ error: "Invalid admin email id" });
        }

        const passwordCheck = await bcrypt.compare(password, admin.password);

        if (!passwordCheck) {
            return res.status(401).send({ error: "Invalid password" });
        }

        //Create JWT token
        const token = jwt.sign({
            adminId: admin._id,
        }, JWT_SECRET, { expiresIn: '4hr' });

        return res.status(200).send({
            msg: "Login success...",
            token
        });


    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: "Internal server error" });
    }
}

//** New registers function */
export const newRegisters = async (req, res) => {
    try {
        const NewUsers = await UserModel.find({ status: false }).select('-email -password');
        if (NewUsers.length === 0) {
            return res.status(204).send({ msg: "No new Registers" });
        } else {
            return res.status(200).send(NewUsers);
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

//** Status update New registers function */
export const StatusUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findOneAndUpdate(
            { _id: id },
            { status: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).send({ msg: "User not found" });
        }

        return res.status(200).send({ msg: "User status updated successfully" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

//** Reject and Delete user */
export const rejectUser = async (req, res) => {

    try {
        const { id } = req.params;

        // Assuming you have a User model, you can delete the user like this:
        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        return res.status(500).json({ message: "Server error", error: error });
    }

}

//** Get all users list function*/
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({ status: true }).select('-email -password -status');

        if (users.length === 0) {
            return res.status(404).send({ msg: "No users" })
        } else {
            return res.status(201).send(users)
        }
    } catch (error) {
        return res.status(500).send({ error })
    }
};

//** To create job post */
export const addJob = async (req, res) => {
    try {
        const { position, jobLocation, company, jobType, description } = req.body;
        //   const userId = req.user.id; // assuming user ID is retrieved from authentication middleware
        const jobPost = new JobModel({
            position,
            jobLocation,
            company,
            jobType,
            description,
            userId: '645a93109d149481386e6fa4',
            createdTime: Date.now()
        });
        const savedJobPost = await jobPost.save();
        res.status(201).json(savedJobPost);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}
