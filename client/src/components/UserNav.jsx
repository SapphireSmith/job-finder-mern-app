import React, { useState } from 'react';
import jwtDecode from "jwt-decode";
import Logo from '../assets/logo.svg';
import { Spin as Hamburger } from 'hamburger-react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { getProfile } from '../helper/helpers';

const UserNav = ({ refresh }) => {

    const [toggle, setToggle] = useState(false);
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const userLogOut = () => {
        localStorage.removeItem('userToken');
        navigate('/user/login');
    }

    const token = localStorage.getItem('userToken');
    const payload = jwtDecode(token);
    useState(() => {
        const fetchUsername = async () => {
            let data = await getProfile()
            if (data.firstName.length > 0) {
                setUsername(data.firstName)
            }
        }
        fetchUsername();
    }, [refresh])
    if (payload.userType === 'Recruiter') {
        var userType = true
    } else {
        var userType = false
    }


    return (
        <nav className='z-50 fixed top-0 w-full'>
            <div className='w-full bg-[#112a42] flex flex-row justify-between px-3 py-3 items-center
         min-[500px]:p-9 sm:px-20'>
                <div className='logo'>
                    <Link to={'/Home'}>
                        <img src={Logo} alt="" className=' w-[160px] ' />
                    </Link>
                </div>
                <div className='md:hidden' onClick={() => {
                    setToggle(!toggle)
                }} >
                    <Hamburger color='white' size={23} />
                </div>
                {
                    toggle && <div className='md:hidden hamburger-values absolute right-[3rem] top-[5rem] sm:right-[7rem] sm:top-[6rem] '>
                        <ul className=' text-white bg-blue-900 flex flex-col gap-5 px-7 py-9 rounded-lg font-extralight'>
                            <li><Link to={'/add-job'}>Add Jobs</Link></li>
                            {
                                !userType ?
                                    < li > <Link to={'/saved-jobs'}>Saved Jobs</Link></li>
                                    : ''
                            }
                            <li>
                                <div className='flex justify-around items-center profile h-7 w-28 bg-blue-500 rounded-lg'>
                                    <div className='user-icon px-2 py-1 w-1/3'>
                                        <FontAwesomeIcon icon={faUser} color='#ffff' />
                                    </div>
                                    <div className='user-name w-2/3'>
                                        <p className='text-white text-sm font-thin truncate '>{username || 'Hello'}</p>
                                    </div>
                                </div>
                            </li>
                            <li><Link onClick={userLogOut}>Log out</Link></li>
                        </ul>
                    </div>
                }
                <div className='hidden md:block'>
                    <div className='flex md:gap-5 lg:gap-10 items-center justify-center'>
                        <div className='hidden md:block'>
                            <div className='nav-links'>
                                <ul className='text-white flex gap-4 '>
                                    <li><Link to={'/add-job'}>Add Jobs</Link></li>
                                    {
                                        !userType ?
                                            < li > <Link to={'/saved-jobs'}>Saved Jobs</Link></li>
                                            : ''
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='hidden md:block'>
                            <Link to={'/profile'}>
                                <div className='flex justify-around items-center profile h-7 w-28 bg-blue-500 rounded-sm'>
                                    <div className='user-icon px-2 py-1 w-1/3'>
                                        <FontAwesomeIcon icon={faUser} color='#ffff' />
                                    </div>
                                    <div className='user-name w-2/3'>
                                        <p className='text-white text-sm font-thin truncate '>{username || 'Hello'}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='hidden md:block'>
                            <div className='nav-links'>
                                <ul className='text-white flex gap-4 '>
                                    <li><Link onClick={userLogOut}>Log out</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav >
    );
}

export default UserNav;
