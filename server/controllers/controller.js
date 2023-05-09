import { AdminModel } from "../models/Admin.model.js";
import { UserModel } from "../models/User.model.js";
import bcrypt from 'bcrypt'


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
                            res.status(201).send({ msg: "User registered successfully" });
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

        //** check for if the email id is registered */
        const user = await UserModel.findOne({ email });

        if (user) {
            const passwordCheck = await bcrypt.compare(password, user.password);
            if (!passwordCheck) {
                return res.status(400).send({ error: "Incorrect password" });
            } else {
                return res.status(201).send({
                    msg: "Login Success.."
                });
            }
        } else {
            return res.status(404).send({ error: "Email id not registered" });
        }

    } catch (error) {
        return res.status(500).send({ error });
    }
}



//** ADMIN ROUTING FUNCTIONS  */

//** Login function */
export const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const admin = await AdminModel.findOne({ email });

        if (!admin) return res.status(404).send({ error: "Invalid admin email id" });

        const passwordCheck = await bcrypt.compare(password, admin.password);

        if (passwordCheck) {
            return res.status(201).send({ msg: "Login success..." });
        } else {
            return res.status(400).send({ error: "Invalid password" });
        }

    } catch (error) {
        console.log(error);
        console.log(error.message);
        res.status(500).send({ error })
    }
}

//** New registers function */
export const newRegisters = async (req, res) => {
    try {
        const NewUsers = await UserModel.find({ status: false }).select('-email -password');
        if (NewUsers.length === 0) {
            return res.status(200).send({ msg: "No new Registers" });
        } else {
            return res.status(200).send(NewUsers);
        }
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};

//** Status update New registers */
export const StatusUpdate = async (req, res) => {
    console.log('herre');
    try {
        console.log('here');
        const { id } = req.params;
        console.log(id);
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
