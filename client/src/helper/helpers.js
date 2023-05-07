import axios from 'axios'

const URL = import.meta.env.BASE_URL

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


//** User register function */
export const userRegister = async (values) => {
   try {
      const response = await axios.post('user/register', { ...values });

      //**Work pending here (Sending email after registration of the user) */;
      // const status = response.status;
      // console.log(status);
      //**Curently closing with returing msg and status code */
      const msg = response.data.msg;
      const status = response.status;
      return { msg, status }
   } catch (error) {
      return {
         msg: error.response.data.error,
         status: error.response.status
      }
   }
}

//** User Login function */
export const userLogin = async (values) => {
   try {
      const response = await axios.post('user/login', { ...values });
      
      const msg = response.data.msg;
      const status = response.status;

      return { msg, status }
   } catch (error) {
      return {
         msg: error.response.data.error,
         status: error.response.status
      }
   }
}

//** Admin login function */
export const adminLogin = async (values) => {
   try {

      const response = await axios.post('admin/login', { ...values });

      const msg = response.data.msg;
      const status = response.status;

      return { msg, status }
   } catch (error) {
      return {
         msg: error.response.data.error,
         status: error.response.status
      }
   }
}