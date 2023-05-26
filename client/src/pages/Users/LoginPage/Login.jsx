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
            <form className='flex flex-col mx-8 gap-5 pt-6 w-[1/2] sm:w-[300px] lg:w-[400px]'
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
              <p className='text-white font-semibold'>Not a member yet? <Link className='font-semibold text-[#4ea3ff] hover:text-[#015bbb] duration-150' to={'/user/signup'}>Register</Link></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
















// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import backdrop from '../../../assets/backdrop.jpg';
// import { useFormik } from 'formik';
// import { userLogin } from '../../../helper/helpers';
// import { Toaster, toast } from 'react-hot-toast';


// const Login = () => {

//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       password: ''
//     },
//     validateOnBlur: false,
//     validateOnChange: false,
//     onSubmit: async (values) => {
//       let UserLoginPending = userLogin(values);

//       toast.promise(UserLoginPending, {
//         loading: "Checking...",
//         success: <b>Login success...!</b>,
//         error: (res) => {
//           return res.msg
//         }
//       })

//       UserLoginPending.then((res) => {
//         setTimeout(() => {
//           console.log(res);
//           let { token } = res.data;
//           localStorage.setItem('userToken', token)
//           navigate('/home')
//         }, 1500)
//       })
//     }
//   })
//   return (
//     <>
//       <main
//         className={`flex flex-col items-center justify-center w-screen h-screen bg-cover bg-no-repeat bg-center`}
//         style={{ backgroundImage: `url(${backdrop})` }}>
//         <Toaster
//           position="top-center"
//           reverseOrder={false}
//           toastOptions={{
//             style: {
//               minWidth: '200px',
//               minHeight: '30px',
//               fontSize: '16px'
//             }
//           }}
//         />

//         {/* Component Start */}
//         <h1 className="font-bold text-2xl">Welcome Back :)</h1>
//         <form className="flex flex-col gap-4  bg-white rounded shadow-lg p-10 mt-8 sm:w-[50%] md:w-[45%] sm:gap-6 lg:w-[37%] lg:gap-8 xl:w-[40%]"
//           onSubmit={formik.handleSubmit}>
//           <label className="font-semibold  text-xs sm:text-lg" htmlFor="usernameField">
//             Email
//           </label>
//           <input
//             className="flex items-center h-12 px-4 w-64 placeholder:italic bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 sm:w-[100%]"
//             type="email"
//             required
//             placeholder='example@gmail.com'
//             {...formik.getFieldProps('email')}
//           />
//           <label className="font-semibold text-xs mt-3 sm:text-lg" htmlFor="passwordField">
//             Password
//           </label>
//           <input
//             className="flex items-center h-12 px-4 w-64 placeholder:italic bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 sm:w-[100%]
//             font-thin italic"
//             type="text"
//             required
//             placeholder='example@123'
//             {...formik.getFieldProps('password')}
//           />
//           <button type='submit' className="flex p-4 items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700 sm:w-[100%] sm:rounded-md sm:text-lg  ">
//             Login
//           </button>
//           <div className="flex mt- justify-center mt-4 text-xs sm:text-lg">
//             <Link className="text-blue-400 hover:text-blue-500">
//               {' '}
//               Forgot Password
//             </Link>
//             <span className="mx-2 text-gray-300">/</span>
//             <Link
//               className="text-blue-400 hover:text-blue-500"
//               to={'/user/signup'}
//             >
//               Sign Up
//             </Link>
//           </div>
//         </form>
//         {/* Component End  */}


//       </main>
//     </>
//   );
// };

// export default Login;
