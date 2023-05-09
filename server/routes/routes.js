import express from 'express'
import { userLogin, userRegister, adminLogin, newRegisters, StatusUpdate } from '../controllers/controller.js';

const router = express.Router();

//** USER ROUTES  */

//** POST REQUESTS  */
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);



//** ADMIN ROUTES */

//** POST REQUESTS */
router.post('/admin/login', adminLogin);
router.post('/admin/new-register/:id', StatusUpdate);

//** GET REQUESTS */
router.get('/admin/new-registers', newRegisters);



export default router