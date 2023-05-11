import express from 'express'
import {
    userLogin,
    userRegister,
    adminLogin,
    newRegisters,
    StatusUpdate,
    getAllUsers,
    rejectUser,
    addJob
} from '../controllers/controller.js';

const router = express.Router();

//** USER ROUTES  */

//** POST REQUESTS  */
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);

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

//**END OF ADMIN ROUTES */


export default router