import React from 'react'
import Logo from '../assets/logo.svg'
import { Spin as Hamburger } from 'hamburger-react'

const UserNav = () => {
    return (
        <nav>
            <div className='w-full bg-[#112a42] flex flex-row justify-between px-3 py-3 items-center'>
                <div className='logo'>
                    <img src={Logo} alt="" className=' w-[160px] ' />
                </div>
                <div >
                    <Hamburger color='white' size={23} />
                </div>
            </div>
        </nav>
    )
}

export default UserNav