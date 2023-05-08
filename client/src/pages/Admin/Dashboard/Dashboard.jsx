import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faAnglesRight, faUserPlus, faFileImport, faUserGear } from '@fortawesome/free-solid-svg-icons'
import AdminNavbar from '../../../components/AdminNav'

const Dashboard = () => {

  return (
    <div>
      <AdminNavbar />
      <section>
        <div className='h-[100%] bg-[#f2f2f2]'>
          <div className='managing-cards cards flex flex-col w-full sm:flex-row sm:flex-wrap sm:justify-around md:px-20'>

            <div className='manage-user-card px-14 py-12 flex flex-col min-[480px]:px-20 
              sm:w-[50%] sm:px-10 sm:py-14'>
              <h3 className='mb-8 font-semibold text-[20px]'>View Users</h3>
              <Link to={'/admin/dashboard/users'}>
                <div className='flex users-card  hover:cursor-pointer bg-[#3366f3] p-7 rounded-lg shadow-inner hover:shadow-xl
                    sm:w-[100%] sm:h-[155px] '>
                  <div className='flex flex-col'>
                    <h4 className='text-xl font-semibold text-[#eaeaea]'>Users</h4>
                    <p className='pt-6 text-[#eaeaea] font-thin text-[10px] '>Click here to view users </p>
                  </div>
                  <div className='users-icon flex w-full relative justify-center items-center'>
                    <FontAwesomeIcon icon={faUsers} color='#ffff' size='4x' />
                    <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                  </div>
                </div>
              </Link>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col min-[480px]:px-20
               sm:w-[50%] sm:px-10 sm:py-14'>
              <h3 className='mb-8 font-semibold text-[20px]'>New Registers</h3>
              <Link to={'/admin/dashboard/new-registers'}>
                <div className='flex users-card  hover:cursor-pointer bg-[#55cf74] p-7 rounded-lg shadow-inner hover:shadow-xl
                   sm:w-[100%] sm:h-[155px]'>
                  <div className='flex flex-col'>
                    <h4 className='text-xl font-semibold text-[#eaeaea]'>Confirm</h4>
                    <p className='pt-6 text-[#ffffff] font-thin text-[10px] '>Click here to  confirm new registrations</p>
                  </div>
                  <div className='users-icon flex w-full relative justify-center items-center'>
                    <FontAwesomeIcon icon={faUserPlus} color='#ffff' size='4x' />
                    <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                  </div>
                </div>
              </Link>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col min-[480px]:px-20
               sm:w-[50%] sm:px-10 sm:py-14 sm:mb-10'>
              <h3 className='mb-8 font-semibold text-[20px]'>Create New Job Post</h3>
              <Link to={'/admin/dashboard/new-job'}>
                <div className='flex users-card  hover:cursor-pointer bg-[#e06844] p-7 rounded-lg shadow-inner hover:shadow-xl
                sm:w-[100%] sm:h-[155px]'>
                  <div className='flex flex-col'>
                    <h4 className='text-xl font-semibold text-[#eaeaea]'>Create Job</h4>
                    <p className='pt-6 text-[#eaeaea] font-thin text-[10px] '>Click here to add new openings</p>
                  </div>
                  <div className='users-icon flex w-full relative justify-center items-center'>
                    <FontAwesomeIcon icon={faFileImport} color='#ffff' size='4x' />
                    <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                  </div>
                </div>
              </Link>
            </div>

            <div className='manage-user-card px-14 pb-12 flex flex-col min-[480px]:px-20
              sm:w-[50%] sm:px-10 sm:py-14 sm:mb-10[2z
              \'>
              <h3 className='mb-8 font-semibold text-[20px]'>Add New Admin</h3>
              <Link to={'/admin/dashboard/add-admin'}>
                <div className='flex users-card  hover:cursor-pointer bg-[#42a0ec] p-7 rounded-lg shadow-inner hover:shadow-xl
                sm:w-[100%] sm:h-[155px]'>
                  <div className='flex flex-col'>
                    <h4 className='text-xl font-semibold text-[#eaeaea]'>Create admin</h4>
                    <p className='pt-6 text-[#eaeaea] font-thin text-[10px] '>Click here manage users</p>
                  </div>
                  <div className='users-icon flex w-full relative justify-center items-center'>
                    <FontAwesomeIcon icon={faUserGear} color='#ffff' size='4x' />
                    <FontAwesomeIcon icon={faAnglesRight} color='#e6e9f2' className='absolute right-0 bottom-0 ' />
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard