import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'
const AdminNav = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav >
            <div className=' bg-[#02203c] flex justify-between w-full '>
                <div className='menu m-5 sm:pl-5 md:pl-20'>
                    <div className='hamberger' onClick={() => {
                        setToggle(!toggle)
                    }}>
                        <Hamburger color='white' size={23} />
                    </div>
                </div>

                {toggle && <div className='hamburger-values static'>
                    <ul className='absolute  top-24 left-14 md:left-28 bg-[#02203c] px-10 z-10 py-9
                        flex flex-col gap-4 rounded-xl text-white font-thin sm:font-light
                         '>
                        <Link to={'/admin/dashboard/view-jobs'}>View Jobs</Link>    
                        <li>Log out</li>
                    </ul>
                </div>}

                <div className='logo w-1/2 my-auto m-5 text-white'>
                    <h1 className='text-center font-semibold text-[30px] italic'>Dashboard</h1>
                </div>
            </div>

        </nav>
    )
}

export default AdminNav