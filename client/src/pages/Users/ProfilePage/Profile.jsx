import React, { useEffect, useState } from 'react'
import UserNav from '../../../components/UserNav'
import { getProfile, updateName, updatePassword, verifyPassword } from '../../../helper/helpers'
import { Toaster, toast } from 'react-hot-toast'
import { useFormik } from 'formik'
import { nameValidate, passwordValidation } from '../../../helper/validate'

const Profile = () => {

  //** Declaring the states */
  const [update, setUpdate] = useState({
    userName: false,
    oldPassword: false,
    password: false,
  })
  const [userName, setUserName] = useState({
    firstName: '',
    lastName: ''
  })

  const [updateUserName, setUpdateUserName] = useState({
    updatedFirstName: '',
    updatedLastName: ''
  })

  const [passwordUpdate, setPasswordUpdate] = useState(true)
  const [newPassword, setNewPassword] = useState(false)

  //** use effect for username retreval */
  const fetchUserName = async () => {
    const { firstName, lastName } = await getProfile();
    setUserName(prev => {
      return {
        ...prev,
        firstName: firstName,
        lastName: lastName
      }
    })
  }

  useEffect(() => {
    fetchUserName()
  }, [])

  //** Update control */
  const updateControll = (e, condition) => {
    e.preventDefault()
    if (condition === 'username') {
      setUpdateUserName(prev => {
        return { ...prev, updatedLastName: '', updatedFirstName: '' }
      })
      setUpdate(prevState => {
        return { ...prevState, userName: !prevState.userName }
      })
    } else if (condition === 'password') {
      setUpdate(prevState => {
        return { ...prevState, oldPassword: !prevState.oldPassword }
      })
    }
  }

  const formik1 = useFormik({
    initialValues: {
      fname: '',
      lname: ''
    },
    validate: nameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      const nameUpdatePromise = updateName(values);
      toast.promise(nameUpdatePromise, {
        pending: 'Updating...',
        success: 'Updated.',
        error: 'Error while updating.',
      })
      nameUpdatePromise.then((res) => {
        if (res.status === 201) {
          setUpdate(prev => {
            return { ...prev, userName: !prev.userName }
          })
          fetchUserName()
        }
      })
    }
  })

  const formik2 = useFormik({
    initialValues: {
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      const checkPassswordPromise = verifyPassword(values);
      toast.promise(checkPassswordPromise, {
        loading: 'Checking...',
        success: 'Password verified.',
        error: 'Invalid Password',
      })

      checkPassswordPromise.then((res) => {
        if (res.status === 200) {
          setPasswordUpdate(false);
          setNewPassword(true)
          formik3.resetForm()
        }
      })
    }
  })

  const formik3 = useFormik({
    initialValues: {
      newpassword: '',
    },
    validate: passwordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      const newPasswordPromise = updatePassword(values);

      toast.promise(newPasswordPromise, {
        loading: 'Updating...',
        success: 'Password Updated.',
        error: 'Something went wrong.'
      })

      newPasswordPromise.then((res) => {
        if (res.status === 201) {
          formik2.resetForm()
          formik3.resetForm()
          setPasswordUpdate(true)
          setNewPassword(false)
          setUpdate(prev => {
            return { ...prev, oldPassword: false, password: false }
          })
        }
      })
    }
  })

  //** Cancel Update for password */
  const cancelUpdate = (e) => {
    e.preventDefault();
    setUpdate(prev => {
      return { ...prev, oldPassword: false }
    })
  }

  return (
    <div>
      <UserNav />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: '160px',
            minHeight: '30px',
            fontSize: '14px'
          }
        }}
      />

      <div className='bg-[#02203c] w-full h-screen pt-24'>
        <div className='max-w-[1100px] mx-auto'>
          <div className='text-center text-white pt-6 sm:pt-16 '>
            <h1 className=' text-2xl sm:text-3xl font-semibold'>Profile</h1>
          </div>

          {/* Form one for updating username */}

          <form className='pt-7 flex flex-col px-14 gap-7 sm:px-[140px] md:px-[170px] lg:px-[230px] xl:px-[300px]'
            onSubmit={formik1.handleSubmit}>
            <div className='flex flex-col gap-2'>
              <label className='font-thin text-sm text-white'>First Name</label>
              <input type="text" className='px-3 py-1 rounded-md placeholder:font-mono font-normal
               disabled:bg-slate-200 disabled:text-gray-500 placeholder:text-gray-600  focus:outline-none'
                disabled={!update.userName}
                placeholder={userName.firstName}
                {...formik1.getFieldProps('fname')}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label className='font-thin text-sm text-white'>Last Name</label>
              <input type="text" className='px-3 py-1 rounded-md placeholder:font-mono font-normal
               disabled:bg-slate-200 disabled:text-gray-500 focus:outline-none  placeholder:text-gray-600 '
                disabled={!update.userName}
                placeholder={userName.lastName}
                {...formik1.getFieldProps('lname')}
              />
            </div>
            <div className='flex justify-end'>
              {
                !update.userName ?
                  <button className='px-3 py-1 bg-red-500 text-white rounded-md border-green-400 font-light'
                    onClick={e => { updateControll(e, 'username') }}
                  >Update</button> :
                  <div className='flex flex-row gap-3'>
                    <button className='px-3 py-1 bg-red-500 rounded-md text-white font-light'
                      onClick={e => { updateControll(e, 'username') }}
                    >Cancel</button>
                    <button className='px-3 py-1 bg-green-400 rounded-md text-gray-700 font-light'
                      type='submit'
                    >Change</button>
                  </div>
              }
            </div>

            {/* form two for updating password */}

          </form>
          {
            passwordUpdate ?
              <form className='pt-16 flex flex-col px-14 gap-7  sm:px-[140px] md:px-[170px] lg:px-[230px] xl:px-[300px]'
                onSubmit={formik2.handleSubmit} >
                <div className='flex flex-col gap-2'>
                  <label className='font-thin text-sm text-white'>{update.oldPassword ? 'Enter your old password' : update.password ? 'Enter your new password' : 'Password'}</label>
                  <input type="text" placeholder={!update.oldPassword ? '***********' : ''} className='px-3 py-1 rounded-md placeholder:font-mono font-normal placeholder:text-black
               focus:outline-none   disabled:bg-slate-200 disabled:placeholder:text-gray-500 '
                    disabled={!update.oldPassword ? true : false}
                    {...formik2.getFieldProps('password')} />
                </div>
                <div className='flex justify-end'>
                  {
                    update.oldPassword ?
                      <div className='flex gap-2'>
                        <button className='px-3 py-1 bg-red-500 text-white rounded-md  font-light text-sm'
                          onClick={e => {
                            formik2.resetForm()
                            cancelUpdate(e)
                          }}
                          type='reset'
                        >Cancel</button>

                        <button className='px-3 py-1 bg-green-400 text-black rounded-md  font-light text-sm'
                          type='submit'
                        >Check</button>
                      </div> :
                      <button className='px-3 py-1 bg-red-500 text-white rounded-md  font-light text-sm'
                        onClick={e => { updateControll(e, 'password') }}
                      >Change password</button>
                  }
                </div>
              </form> : ''
          }
          {
            newPassword ?
              <form className='pt-16 flex flex-col px-14 gap-7  sm:px-[140px] md:px-[170px] lg:px-[230px] xl:px-[300px]'
                onSubmit={formik3.handleSubmit} >
                <div className='flex flex-col gap-2'>
                  <label className='font-thin text-sm text-white'>Enter new password</label>
                  <input type="text" placeholder='Enter new password' className='px-3 py-1 rounded-md placeholder:font-mono font-normal placeholder:text-black
               focus:outline-none   disabled:bg-slate-200 disabled:placeholder:text-gray-500 '
                    disabled={!update.oldPassword ? true : false}
                    {...formik3.getFieldProps('newpassword')} />
                </div>
                <div className='flex justify-end gap-2'>
                  <button className='px-3 py-1 bg-red-500 text-white rounded-md  font-light text-sm'
                    onClick={e => {
                      formik2.resetForm()
                      setNewPassword(false)
                      setPasswordUpdate(true)
                      cancelUpdate(e)
                    }}
                    type='reset'
                  >Cancel</button>
                  <button className='px-3 py-1 bg-green-400 text-black rounded-md  font-light text-sm'
                    type='submit'
                  >Update</button>
                </div>
              </form> : ''
          }


        </div>
      </div>
    </div>
  )
}

export default Profile