import React from 'react'
import { useFormik } from 'formik'
import { adminLogin } from '../../../helper/helpers'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import LoginSignupNav from '../../../components/LoginSignupNav';

const LoginAdmin = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
      let loginPromise = adminLogin(values);

      toast.promise(loginPromise, {
        loading: "Checking...",
        success: <b>Login success...!</b>,
        error: <b>Invalid Email or password !</b>
      });

      loginPromise.then((res) => {
        setTimeout(() => {
          let { token } = res.data;
          localStorage.setItem('adminToken', token)
          navigate('/admin/dashboard')
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

      {/* <div className='bg-[#072541]'>
        <div className='max-w-[1400px] mx-auto h-[100vh] flex justify-center items-center '>
            <h1 className='text-white text-center font-medium text-lg md:text-2xl'>Admin Login</h1>
          <div className='mx-auto  '>
            <form className='flex flex-col gap-5 pt-6 px-5 w-full sm:w-1/2 lg:w-1/2'
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
          </div>
        </div>
      </div> */}

      <div className='bg-[#072541]'>
        <div className='max-w-[1120px] h-screen flex flex-col mx-auto  justify-center items-center '>
          <h1 className='text-white text-center font-medium text-lg'>Admin Login</h1>
          <form className='flex flex-col gap-5 pt-6 px-5 w-full sm:w-1/2 lg:w-1/2'
            onSubmit={formik.handleSubmit}>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-white font-thin text-lg'>Email</label>
              <input type="email" required placeholder='email' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                {...formik.getFieldProps('email')} />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              <label className='text-white font-thin text-lg'>Password</label>
              <input type="password" required placeholder='password' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                {...formik.getFieldProps('password')} />
            </div>
            <div className='flex pt-4 w-full'>
              <button type='submit' className='text-white mx-auto w-full bg-blue-400  py-1 rounded-md font-semibold duration-300 hover:bg-[#015bbb]'>Login</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default LoginAdmin