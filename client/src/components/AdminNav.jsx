import React from 'react'
import logo from '../assets/logo.svg';
const AdminNav = () => {
    return (
        <nav >
            <div className='bg-[#02203c]'>
                <div className='logo w-7'>
                    <img src={logo} alt="logo" />
                </div>
            </div>
        </nav>
    )
}

export default AdminNav