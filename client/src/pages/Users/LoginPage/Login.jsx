import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backdrop from '../../../assets/backdrop.jpg';
import { useFormik } from 'formik';
import { userLogin } from '../../../helper/helpers';
import { Toaster, toast } from 'react-hot-toast';


const Login = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      const { msg, status } = await userLogin(values);
      if (status === 201) {
        toast.success(msg)
        navigate('/home');
      } else {
        toast.error(msg)
      }
    }
  })
  return (
    <>
      <main
        className={`flex flex-col items-center justify-center w-screen h-screen bg-cover bg-no-repeat bg-center`}
        style={{ backgroundImage: `url(${backdrop})` }}>
        <Toaster position='top-center' reverseOrder={false}
          toastOptions={{
            style: {
              minWidth: '200px',
              minHeight: '30px',
              fontSize: '10px'
            }
          }}></Toaster>

        {/* Component Start */}
        <h1 className="font-bold text-2xl">Welcome Back :)</h1>
        <form className="flex flex-col gap-4  bg-white rounded shadow-lg p-10 mt-8 sm:w-[50%] md:w-[45%] sm:gap-6 lg:w-[37%] lg:gap-8 xl:w-[40%]"
          onSubmit={formik.handleSubmit}>
          <label className="font-semibold  text-xs sm:text-lg" htmlFor="usernameField">
            Email
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 placeholder:italic bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 sm:w-[100%]"
            type="email"
            required
            placeholder='example@gmail.com'
            {...formik.getFieldProps('email')}
          />
          <label className="font-semibold text-xs mt-3 sm:text-lg" htmlFor="passwordField">
            Password
          </label>
          <input
            className="flex items-center h-12 px-4 w-64 placeholder:italic bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 sm:w-[100%]
            font-thin italic"
            type="text"
            required
            placeholder='example@123'
            {...formik.getFieldProps('password')}
          />
          <button type='submit' className="flex p-4 items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 sm:w-[100%] sm:rounded-md sm:text-lg  ">
            Login
          </button>
          <div className="flex mt- justify-center mt-4 text-xs sm:text-lg">
            <Link className="text-blue-400 hover:text-blue-500">
              {' '}
              Forgot Password
            </Link>
            <span className="mx-2 text-gray-300">/</span>
            <Link
              className="text-blue-400 hover:text-blue-500"
              to={'/user/signup'}
            >
              Sign Up
            </Link>
          </div>
        </form>
        {/* Component End  */}


      </main>
    </>
  );
};

export default Login;
