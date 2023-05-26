import express from 'express'
import {
    userLogin,
    userRegister,
    adminLogin,
    newRegisters,
    StatusUpdate,
    getAllUsers,
    rejectUser,
    addJob,
    getJobs,
    saveJobPost,
    getSavedPost,
    removeSavedPost,
    getProfile,
    usernameUpdate,
    verifyPassword,
    updatePasssword,
    getUsers,
    getAllJobs,
    deletePost
} from '../controllers/controller.js';
import { auth } from '../middleware/auth.js';


const router = express.Router();

//** USER ROUTES  */

//** POST REQUESTS  */
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);
router.post('/user/add-job-post', addJob);
router.post('/user/save-post', auth, saveJobPost);
router.post('/user/remove-saved-post/:postId', auth, removeSavedPost);
router.post('/user/profile-update', auth, usernameUpdate)
router.post('/user/verify', auth, verifyPassword)
router.post('/user/update-password', auth, updatePasssword)

//** GET REQUESTS */
router.get('/user/job-posts', getJobs);
router.get('/user/get-saved-post', auth, getSavedPost);
router.get('/user/profile', auth, getProfile);
router.get('/user/getusers', getUsers);

//**END OF USERS ROUTES */



//** ADMIN ROUTES */

//** POST REQUESTS */
router.post('/admin/login', adminLogin);
router.post('/admin/new-register/:id', StatusUpdate);
router.post('/admin/reject-user/:id', rejectUser);
router.post('/admin/add-job-post', addJob)

//** GET REQUESTS */
router.get('/admin/new-registers', newRegisters);
router.get('/admin/users', getAllUsers)
router.get('/admin/get-all-jobs', getAllJobs);
router.get('/admin/delete-post/:id', deletePost);


//**END OF ADMIN ROUTES */


export default router