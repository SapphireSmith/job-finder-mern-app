import express from 'express'
import { userLogin, userRegister, adminLogin, newRegisters } from '../controllers/controller.js';

const router = express.Router();

//** USER ROUTES  */

//** POST REQUESTS  */
router.post('/user/register', userRegister);
router.post('/user/login', userLogin);




//** ADMIN ROUTES */

//** POST REQUESTS */
router.post('/admin/login', adminLogin);

//** GET REQUESTS */
router.get('/admin/new-registers', newRegisters)



export default router