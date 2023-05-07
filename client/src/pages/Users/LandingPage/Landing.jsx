import React, { useState } from 'react'
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { Spin as Hamburger } from 'hamburger-react'
import jobHunting from '../../../assets/main.svg'

const Landing = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className='landing-page bg-[#02203c] h-[100%]' >
      <nav className="w-90vw max-w-1120 mx-auto h-6rem flex p-5 pt-11
       items-center justify-between md:pl-7 md:pr-7 lg:pl-20 lg:pr-20 xl:pl-28 xl:pr-28" >
        <img src={logo} alt="" className='flex w-[150px] ' />
        <div onClick={() => setToggle((prev) => !prev)} className='hamberger-icon flex ml-5 md:hidden'>
          <Hamburger color='white' />
        </div>

        {
          toggle && <div className='toggle-nav absolute right-[40px] top-[90px] bg-[#1c366c] rounded-xl '>
            <div className='flex flex-col text-white w-36 items-center md:hidden'>
              <ul>
                <Link to={'user/login'}><li className='pl-8 pt-8 pb-8 font-medium'><a href="">Login</a></li></Link>
                <Link to={'user/signup'}><li className='pl-8 pr-8 pb-8 font-medium'><a href="">Register</a></li></Link>
                <Link to={'admin/login'}><li className='pl-8 pr-8 pb-8 font-medium'><a href="">Admin</a></li></Link>
              </ul>
            </div>
          </div>
        }
        <div className='nav-tags hidden md:block'>
          <div className=' text-white flex mr-6 gap-16 font-medium lg:gap-20 '>
            <Link to={'user/login'}>Login</Link>
            <Link to={'user/signup'}>Register</Link>
            <Link to={'admin/login'}>Admin</Link>
          </div>
        </div>
      </nav>

      <section className='pb-64'>
        <div className='hero-section w-full flex md:pl-7 md:pr-7 lg:pl-20 lg:pr-20 xl:pl-28 xl:pr-28'>
          <div className='sm:w-1/2'>
            <div className='Landing-page-title mt-[150px] m-5'>
              <h1 className='text-white text-[40px] font-semibold '>
                Job <span className='text-[#2cb1bc]'>Finder</span> App
              </h1>
              <p className='text-white mt-8 font-extralight mr-7'>
                Welcome to our job finder app, the ultimate solution for job seekers and employers alike.
                Our app is designed to simplify the job search process and connect job seekers with the best
                possible opportunities. Whether you're looking for your first job, a new challenge, or a career
                change, our app makes it easy to find and apply for jobs that match your skills, experience, and
                preferences.
              </p>
            </div>

            <div className='m-5 mt-9'>
              <Link to={'user/signup'}>
                <button className='text-white text-[20px] w-1/2 bg-[#626ee3] py-1 font-semibold hover:bg-[#4048a0]
             hover:text-[#c9c7c7] rounded-sm'>
                  Join <span className='text-[#2cb1bc]'>Now</span>
                </button>
              </Link>
            </div>
          </div>

          <div className='job-hunting-image sm:w-1/2 hidden sm:block  mt-[150px] mr-8 '>
            <img src={jobHunting} alt="" />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Landing