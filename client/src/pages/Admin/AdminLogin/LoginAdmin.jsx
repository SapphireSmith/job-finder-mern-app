import React from 'react'
import backdrop from '../../../assets/backdrop.jpg'
import adminLoginBackdrop from '../../../assets/adminLoginBackdrop.jpg'
import { useFormik } from 'formik'
import { adminLogin } from '../../../helper/helpers'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

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
      const { msg, status } = await adminLogin(values);

      if (status === 200) {
        navigate('/admin/dashboard')
      } else {
        toast.error(msg)
      }
    }
  })
  return (
    <div>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            minWidth: '200px',
            minHeight: '30px',
            fontSize: '16px'
          }
        }}
      />
      <div className=" h-screen w-screen" style={{ backgroundImage: `url(${backdrop})` }}>
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: "500px" }}>
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Admin Login</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <input {...formik.getFieldProps('email')} id="email" type="email" className="flex-grow h-8 px-2 border rounded border-grey-400" name="email" placeholder="Email" required />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input {...formik.getFieldProps('password')} id="password" type="text" className="flex-grow h-8 px-2 rounded border border-grey-400" name="password" required placeholder="Password" />
                    </div>
                    <div className="flex flex-col mt-8">
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{ background: `url(${adminLoginBackdrop})`, backgroundSize: "cover", backgroundPosition: "center center" }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAdmin