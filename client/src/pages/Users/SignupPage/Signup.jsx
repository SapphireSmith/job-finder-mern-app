import React, { useState } from 'react'
import LoginSignupNav from '../../../components/LoginSignupNav'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerValidate } from '../../../helper/validate';
import { Toaster, toast } from 'react-hot-toast';
import { userRegister } from '../../../helper/helpers';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [addOnForm, setaddOnFrom] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: '',
      ...(addOnForm && { skill: '', country: 'India' }),
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (!addOnForm) {
        values.skill = ''
        values.country = ''
      } else {

      }
      const userRgisterPromise = userRegister(values);

      toast.promise(userRgisterPromise, {
        loading: "Creating Account",
        success: (res) => {
          console.log(res);
          return res.msg
        },
        error: (res) => {
          console.log(res);
          return res.msg
        }
      })

      userRgisterPromise.then((res) => {
        setTimeout(() => {
          navigate('/user/login')
        }, 1900)
      })
    }
  })

  return (
    <div>
      <LoginSignupNav />

      <Toaster position='top-center' reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: '200px',
            minHeight: '30px',
            fontSize: '16px'
          }
        }}></Toaster>

      <div className='bg-[#072541] '>
        <div className='max-w-[1120px] h-screen flex flex-col mx-auto  justify-center items-center '>
          <h1 className='text-white text-center font-medium text-lg sm:text-2xl'>Register</h1>
          <form className='flex flex-col gap-5 pt-6 px-5 w-full sm:w-1/2 lg:w-1/2'
            onSubmit={formik.handleSubmit}
          >
            <div className='flex  justify-between'>
              <div className='flex flex-col gap-2 w-[45%]'>
                <label className='text-white font-thin text-sm'>First Name</label>
                <input type="text" required placeholder='Name' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                  {...formik.getFieldProps('firstName')}
                />
              </div>
              <div className='flex flex-col gap-2 w-[45%]'>
                <label className='text-white font-thin text-sm'>Last Name</label>
                <input type="text" required placeholder='Name' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                  {...formik.getFieldProps('lastName')}
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-white font-thin text-lg'>Email</label>
              <input type="email" required placeholder='email' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                {...formik.getFieldProps('email')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='text-white font-thin text-lg'>Password</label>
              <input type="password" required placeholder='password' className='px-3 py-1 rounded-md font-normal focus:outline-none'
                {...formik.getFieldProps('password')}
              />
            </div>
            <div className='flex justify-between text-white text-lg'>
              <div className='flex flex-row w-[45%] justify-center'>
                <input type="radio" {...formik.getFieldProps('userType')} value="Employee" name="userType"
                  onChange={formik.handleChange} onClick={() => setaddOnFrom(true)} />
                <label className='pl-4'>Employee</label>
              </div>
              <div className='flex flex-row w-[45%] justify-center'>
                <input type="radio" {...formik.getFieldProps('userType')} value="Recruiter" name="userType"
                  onChange={formik.handleChange} onClick={() => setaddOnFrom(false)} />
                <label className='pl-4'>Recruiter</label>
              </div>
            </div>

            {
              addOnForm &&
              <>
                <div className='flex flex-col gap-2'>
                  <label className='text-white font-thin text-lg'>Skill</label>
                  <input type="text" required placeholder='eg. Golang Developer or Copy Writter'
                    className='px-3 py-1 rounded-md font-normal focus:outline-none placeholder:italic'
                    {...formik.getFieldProps('skill')}
                  />
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='text-white font-thin text-lg'>Country</label>
                  <select
                    required
                    className='px-3 py-1 rounded-md font-normal focus:outline-none'
                    {...formik.getFieldProps('country')}
                  >
                    <option value="">Select Country</option>
                    <option value='India'>India</option>
                    <option value='USA'>USA</option>
                    <option value='Canada'>Canada</option>
                    <option value='UK'>UK</option>
                    {/* Add more options for other countries */}
                  </select>
                </div>
              </>
            }
            <div className='flex pt-4'>
              <button type='submit' className='text-white mx-auto bg-blue-400 w-full py-1 rounded-md font-semibold duration-300 hover:bg-[#015bbb]'>Login</button>
            </div>
          </form>
          <div className='text-center pt-4'>
            <p className='text-white font-semibold'>Already have an account? <Link className='font-semibold text-[#4ea3ff] hover:text-[#015bbb] duration-150' to={'/user/login'}>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup


