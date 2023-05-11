import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'


const AdminNav = ({ navValues }) => {
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(false);

    const adminLogout = async () => {
        localStorage.removeItem('adminToken');
        navigate('/admin/login')
    }

    return (
        <nav className='z-10' >
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
                        {
                            navValues && navValues.map((value) => {
                                return (
                                    <Link to={value.path} key={value.id}>{value.title}</Link>
                                )
                            })
                        }
                        <Link to={'/admin/dashboard/view-jobs'}>View All Jobs</Link>
                        <Link onClick={adminLogout} >Log out</Link>
                    </ul>
                </div>}

                <div className='logo  my-auto m-5 text-white sm:pr-14  pr-8'>
                    <Link to={'/admin/dashboard'} className='text-center font-semibold text-[20px] sm:text-[30px] italic'>Dashboard</Link>
                </div>
            </div>

        </nav>
    )
}

export default AdminNav