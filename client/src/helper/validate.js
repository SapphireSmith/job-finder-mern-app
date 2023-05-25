import { toast } from 'react-hot-toast';


//** User Registration validating */
export const registerValidate = async (values) => {
    const errors = registerFormValidate({}, values);

    return errors;
}


//**To validate the register form */
export const registerFormValidate = ({ }, values) => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = toast.error('First name is required ')
    }
    if (!values.lastName) {
        errors.lastName = toast.error('Last name is required');
    }
    if (!values.email) {
        errors.email = toast.error('Email id is required');
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = toast.error('Invalid email address');
    }
    if (!values.password) {
        errors.password = toast.error('Password is required');
    } else if (values.password.length < 6 || !/\W/.test(values.password)) {
        errors.password =
            toast.error('Password should be at least 6 characters long and contain one special character');
    }
    if (!values.userType) {
        errors.userType = toast.error('User type is required')
    }
    // if (Object.keys(errors).length === 0) {
    //     return {};
    // } else {
    //     // Show the error message using react-hot-toast
    //     toast.error('There are errors in the form');
    // }
    return errors;
};

export const nameValidate = (values) => {
    const regex = /[!@#$%^&*(),.?":{}|<>0-9\s]/;
    if (regex.test(values.fname) || regex.test(values.lname)) {
        toast.error('no special character or numbers')
        return false
    } else {
        return true
    }
}

export const passwordValidation = (values) => {
    const errors = {};

    if (!values.newpassword) {
        errors.password = toast.error('Password is required');
    } else if (values.newpassword.length < 6 || !/\W/.test(values.newpassword)) {
        errors.password =
            toast.error('Password should be at least 6 characters long and contain one special character');
    }
    return errors;
}




