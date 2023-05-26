import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
const LoginSignupNav = () => {
  return (
    <div>
      <nav className='w-full bg-[#02203c] fixed'>
        <div className='max-w-[1120px] mx-auto'>
          <Link to={'/'}>
            <div className='logo p-5 md:p-8'>
              <img src={Logo} alt="" className='flex w-[150px]' />
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default LoginSignupNav