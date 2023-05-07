import express from 'express'
import { userLogin, userRegister, adminLogin } from '../controllers/controller.js';

const router = express.Router();

//** USER ROUTES  */

//** POST REQUESTS  */
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);




//** ADMIN ROUTES */

//** POST REQUESTS */
router.post('/admin/login', adminLogin);



export default router