import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


//** <<----------- USERS HANDLING FUNCTION ------------------->> */

//** User register function */
export const userRegister = async (values) => {
   try {
      const { data: { msg }, status } = await axios.post('user/register', { ...values });

      //**Work pending here (Sending email after registration of the user) */;
      // const status = response.status;
      // console.log(status);
      //**Curently closing with returing msg and status code */

      return Promise.resolve({ msg, status })
   } catch (error) {

      return Promise.reject(
         {
            msg: error.response.data.error,
            status: error.response.status
         }
      )

   }
}

//** User Login function */
export const userLogin = async (values) => {

   try {
      const { data } = await axios.post('user/login', { ...values });
      return Promise.resolve({ data })
   } catch (error) {

      return Promise.reject({
         msg: error.response.data.msg,
         status: error.response.status
      })
   }
}

//** Get all jobs function */
export const getJobPosts = async () => {
   try {
      const { data } = await axios.get('user/job-posts');
      return { data };
   } catch (error) {
      console.log(error);
      return { error: "Some error occured please refresh the page..." }
   }
}

//** Post new job */
export const postJobs = async (post) => {
   try {
      const { data, status } = await axios.post('/user/add-job-post', { ...post });
      return { data, status }
   } catch (error) {
      console.log(error);
      return { msg: error.response.data.msg, status: error.response.status }
   }
}

//** <<------------ END OF USERS HANDLING FUNCTIONS ------------------>> */





//**  <<----------------- ADMIN HANDLING FUNCTIONS ---------------------->> */

//** Admin login function */
export const adminLogin = async (values) => {
   try {
      const { data } = await axios.post('admin/login', { ...values });
      return Promise.resolve({ data })
   } catch (error) {
      return Promise.reject({ error: "Password doesn't Match..!" });
   }
}

//** Get new registered users function */
export const getNewRegisters = async () => {
   try {
      const data = await axios.get('admin/new-registers');
      return { status: data.status, data: data.data }
   } catch (error) {
      console.log(error.data.msg);
      return { error: error.data }
   }
}

//** Accepting new registered users function */
export const statusUpdate = async (id) => {
   try {
      const { data: { msg }, status } = await axios.post(`admin/new-register/${id}`)
      return { msg, status }
   } catch (error) {
      console.log(error.response.data.msg, error.response.status);
      return { msg: error.response.data.msg, status: error.response.status }
   }
}

//** Get all users function */
export const getAllUsers = async (id) => {
   try {

      const { data, status } = await axios.get('admin/users');

      return { data, status }
   } catch (error) {
      return { msg: error.response.data.msg, status: error.response.status }
   }

}

export const deleteUser = async (id) => {
   try {
      const { data, status } = await axios.post(`/admin/reject-user/${id}`);
      console.log(data, status);

      return { data, status }
   } catch (error) {
      console.log(error);
      return { msg: error.response.data.msg, status: error.response.status }
   }
}

export const createJobPost = async (post) => {
   try {
      const { data, status } = await axios.post('/admin/add-job-post', { ...post });
      return { data, status }
   } catch (error) {
      console.log(error);
      return { msg: error.response.data.msg, status: error.response.status }
   }
}

//**  <<----------------- END OF ADMIN HANDLING FUNCTIONS ---------------------->> */






