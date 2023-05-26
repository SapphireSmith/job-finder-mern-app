import React from 'react'
import LoginSignupNav from '../../../components/LoginSignupNav'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { registerValidate } from '../../../helper/validate';
import { Toaster, toast } from 'react-hot-toast';
import { userRegister } from '../../../helper/helpers';
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      userType: ''
    },
    validate: registerValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
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
        <div className='max-w-[1120px] mx-auto h-[100vh] flex justify-center items-center '>
          <div className=''>
            <h1 className='text-white text-center font-medium text-lg sm:text-2xl'>Register</h1>
            <form className='flex flex-col mx-8 gap-5 pt-6 w-[1/2] sm:w-[300px] lg:w-[400px]'
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
                    onChange={formik.handleChange} />
                  <label className='pl-4'>Employee</label>
                </div>
                <div className='flex flex-row w-[45%] justify-center'>
                  <input type="radio" {...formik.getFieldProps('userType')} value="Recruiter" name="userType"
                    onChange={formik.handleChange} />
                  <label className='pl-4'>Recruiter</label>
                </div>
              </div>
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
    </div>
  )
}

export default Signup
















// import React, { useState } from 'react'
// import registerlogo from '../../../assets/registerlogo.svg'
// import backdrop from '../../../assets/backdrop.jpg';
// import { Link } from 'react-router-dom';
// import { useFormik } from 'formik'
// import { registerValidate } from '../../../helper/validate';
// import { Toaster, toast } from 'react-hot-toast';
// import { userRegister } from '../../../helper/helpers';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       userType: ''
//     },
//     validate: registerValidate,
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit: async (values) => {
//       const userRgisterPromise = userRegister(values);

//       toast.promise(userRgisterPromise, {
//         loading: "Creating Account",
//         success: (res) => {
//           console.log(res);
//           return res.msg
//         },
//         error: (res) => {
//           console.log(res);
//           return res.msg
//         }
//       })

//       userRgisterPromise.then((res) => {
//         setTimeout(() => {
//           navigate('/user/login')
//         }, 1900)
//       })
//     }
//   })


//   return (
//     <>
//       <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

//       <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5"
//         style={{ backgroundImage: `url(${backdrop})` }} >
//         <Toaster position='top-center' reverseOrder={false}
//           toastOptions={{
//             style: {
//               minWidth: '200px',
//               minHeight: '30px',
//               fontSize: '16px'
//             }
//           }}></Toaster>
//         <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
//           <div className="md:flex w-full">
//             <div className="hidden md:block w-1/2 bg-indigo-500 py-10 px-10">
//               <img src={registerlogo} alt="" />
//             </div>
//             <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
//               <div className="text-center mb-10">
//                 <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
//                 <p>Enter your information to register</p>
//               </div>
//               <div>
//                 <form action="" onSubmit={formik.handleSubmit}>

//                   <div className="flex -mx-3">
//                     <div className="w-1/2 px-3 mb-5">
//                       <label htmlFor="" className="text-xs font-semibold px-1">First name</label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
//                         <input {...formik.getFieldProps('firstName')} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                           placeholder="John"
//                           name='firstName'
//                         />
//                       </div>
//                     </div>
//                     <div className="w-1/2 px-3 mb-5">
//                       <label htmlFor="" className="text-xs font-semibold px-1">Last name</label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
//                         <input {...formik.getFieldProps('lastName')} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-5">
//                       <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
//                         <input {...formik.getFieldProps('email')} type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-5">
//                       <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
//                       <div className="flex">
//                         <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
//                         <input {...formik.getFieldProps('password')} type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500
//                         font-thin italic
//                         " placeholder="************" />
//                       </div>
//                     </div>
//                   </div>
//                   <div className='flex -mx-3'>
//                     <div className="w-full px-3 mb-10">
//                       <h3 className="text-xs font-semibold px-1" >Iam a,</h3>
//                       <div className="flex ml-3">
//                         <div className='w-1/2 mt-3'>
//                           <input {...formik.getFieldProps('userType')} type="radio" name="userType"
//                             value="Employee"
//                             onChange={formik.handleChange}
//                           />
//                           <label htmlFor="" className="ml-5 text-sm sm:text-lg font-semibold px-1">Employee</label>
//                         </div>
//                         <div className='w-1/2 mt-3'>
//                           <input {...formik.getFieldProps('userType')} type="radio" name="userType"
//                             value="Recruiter"
//                             onChange={formik.handleChange}
//                           ></input>
//                           <label htmlFor="" className=" ml-5 text-sm sm:text-lg font-semibold px-1">Recruiter</label>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex -mx-3">
//                     <div className="w-full px-3 mb-5">
//                       <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
//                     </div>
//                   </div>
//                 </form>

//                 <div className="flex mt-6 justify-center text-sm sm:text-lg">
//                   <Link to={'/user/login'} className="text-blue-400 hover:text-blue-500">
//                     Already Have an account ?
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div >
//     </>
//   )
// }

// export default Signup