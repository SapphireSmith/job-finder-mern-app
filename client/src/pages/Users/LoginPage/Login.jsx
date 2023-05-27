import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { Toaster, toast } from 'react-hot-toast';
import { userLogin } from '../../../helper/helpers';
import LoginSignupNav from '../../../components/LoginSignupNav';


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
      let UserLoginPending = userLogin(values);

      toast.promise(UserLoginPending, {
        loading: "Checking...",
        success: <b>Login success...!</b>,
        error: (res) => {
          return res.msg
        }
      })

      UserLoginPending.then((res) => {
        setTimeout(() => {
          console.log(res);
          let { token } = res.data;
          localStorage.setItem('userToken', token)
          navigate('/home')
        }, 1500)
      })
    }
  })

  return (
    <div>
      <LoginSignupNav />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: '200px',
            minHeight: '30px',
            fontSize: '16px'
          }
        }}
      />

      <div className='bg-[#072541]'>
        <div className='max-w-[1400px] mx-auto h-[100vh] flex justify-center items-center '>
          <div className='mx-auto '>
            <h1 className='text-white text-center font-medium text-lg'>Welcome Back <span className='ml-1'> :)</span></h1>
            <form className='flex flex-col mx-8 gap-5 pt-6 sm:w-[300px] lg:w-[400px]'
              onSubmit={formik.handleSubmit}>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-thin text-lg'>Email</label>
                <input type="email" required placeholder='email' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                  {...formik.getFieldProps('email')} />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-white font-thin text-lg'>Password</label>
                <input type="password" required placeholder='password' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                  {...formik.getFieldProps('password')} />
              </div>
              <div className='flex pt-4'>
                <button type='submit' className='text-white mx-auto bg-blue-400 w-full py-1 rounded-md font-semibold duration-300 hover:bg-[#015bbb]'>Login</button>
              </div>
            </form>
            <div className='text-center pt-4'>
              <p className='text-white font-semibold'>Not a Member yet? <Link className='font-semibold text-[#4ea3ff] hover:text-[#015bbb] duration-150' to={'/user/signup'}>Register</Link></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login

