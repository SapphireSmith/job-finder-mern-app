import React from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faAnglesRight } from '@fortawesome/free-solid-svg-icons'


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
        <div className='h-[100%] bg-[#f2f2f2]'>
          <div className='managing-cards cards flex flex-col w-full'>

            <div className='manage-user-card px-14 py-12 flex flex-col'>
              <h3 className='mb-8 font-semibold text-[20px]'>View Users</h3>
              <div className='flex users-card bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-sm'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold text-[#eaeaea]'>Users</h4>
                  <p className='pt-6 text-[#eaeaea] font-thin text-[10px]'>Click here to view users</p>
                </div>
                <div className='users-icon flex w-full relative justify-center items-center'>
                  <FontAwesomeIcon icon={faUsers} color='#ffff' size='4x' />
                  <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                </div>
              </div>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col'>
              <h3 className='mb-8 font-semibold text-[20px]'>New Registers</h3>
              <div className='flex users-card bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-sm'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold text-[#eaeaea]'>Confirm</h4>
                  <p className='pt-6 text-[#eaeaea] font-thin text-[10px]'>Click here to confirm new registrations</p>
                </div>
                <div className='users-icon flex w-full relative justify-center items-center'>
                  <FontAwesomeIcon icon={faUsers} color='#ffff' size='4x' />
                  <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                </div>
              </div>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col'>
              <h3 className='mb-8 font-semibold text-[20px]'>Create New Job Post</h3>
              <div className='flex users-card bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-sm'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold text-[#eaeaea]'>Create openings</h4>
                  <p className='pt-6 text-[#eaeaea] font-thin text-[10px]'>Click here to add new openings</p>
                </div>
                <div className='users-icon flex w-full relative justify-center items-center'>
                  <FontAwesomeIcon icon={faUsers} color='#ffff' size='4x' />
                  <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                </div>
              </div>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col'>
              <h3 className='mb-8 font-semibold text-[20px]'>Generate New Admin</h3>
              <div className='flex users-card bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-sm'>
                <div className='flex flex-col'>
                  <h4 className='text-xl font-semibold text-[#eaeaea]'>Create admin</h4>
                  <p className='pt-6 text-[#eaeaea] font-thin text-[10px]'>Click here manage users</p>
                </div>
                <div className='users-icon flex w-full relative justify-center items-center'>
                  <FontAwesomeIcon icon={faUsers} color='#ffff' size='4x' />
                  <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
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