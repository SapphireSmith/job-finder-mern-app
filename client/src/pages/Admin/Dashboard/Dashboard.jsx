import React from 'react'
import UsersIcon from '../../../assets/users-alt.svg';
import { Spin as Hamburger } from 'hamburger-react'

const Dashboard = () => {
  return (
    <div>
      <nav >
        <div className=' bg-[#02203c] flex justify-between w-full '>
          <div className='menu m-5 w-1/2'>
            <div className='hamberger'>
              <Hamburger color='white' size={23} />
            </div>
          </div>

          <div className='logo w-1/2 my-auto m-5 text-white'>
            <h1 className='text-center font-semibold text-[30px] italic'>Dashboard</h1>
          </div>
        </div>

      </nav>

      <section>
        <div className='h-[100vh] bg-[#f2f2f2]'>
          <div className='managing-cards flex flex-col w-full'>
            <div className='manage-user p-14 flex flex-col'>
              <h3 className='mb-8 font-semibold text-[20px]'>Manage Users</h3>
              <div className='flex users-card bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-sm'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold text-[#eaeaea]'>Users</h4>
                  <p className='pt-6 text-[#eaeaea] font-thin text-[10px]'>Click here manage users</p>
                </div>
                <div className='users-icon'>
                  <img src={UsersIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard