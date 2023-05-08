import React from 'react'
import AdminNav from '../../../components/AdminNav'

const NewRegisters = () => {
  const nav = [
    {
      id: 1,
      title: 'View Users',
      path: '/admin/dashboard/users'
    },
    {
      id: 2,
      title: 'Create Job Post',
      path: '/admin/dashboard/new-job'
    },
    {
      id: 3,
      title: 'Create new Admin',
      path: '/admin/dashboard/add-admin'
    }
  ]
  return (
    <div>

      <AdminNav navValues={nav} />

      <section>

        <div className='new-registers bg-[#555555] w-full h-[100%] pb-8'>
          <div className='title uppercase text-center text-[25px] font-medium  text-white p-6'>
            <h3>New Registers</h3>
          </div>
          {/* new-registers-card */}
          <div className='new-registers-card bg-white p-10 m-10 rounded-lg flex'>
            <div className='flex flex-col w-full gap-6 font-medium text-[#5c5a5a] justify-around 
             items-center'>
              <div>
                <p>John Doe</p>
              </div>
              <div>
                Employee
              </div>
              <div className='justify-between items-center flex flex-col'>
                <p>date:dd/mm/yy</p>
                <p>Time:12:00</p>
              </div>
            </div>
            <div className='buttons flex flex-col items-center justify-around w-full'>
              <a className='bg-green-500 px-2 py-2 rounded-lg text-center text-white border-none'>Accept</a>
              <a className='bg-red-500 px-2 py-2 rounded-lg text-center text-white border-none'>Reject</a>
            </div>
          </div>

          <div className='new-registers-card bg-white p-10 m-10 rounded-lg flex'>
            <div className='flex flex-col w-full gap-6 font-medium text-[#5c5a5a] justify-around 
             items-center'>
              <div>
                <p>John Doe</p>
              </div>
              <div>
                Employee
              </div>
              <div className='justify-between items-center flex flex-col'>
                <p>date:dd/mm/yy</p>
                <p>Time:12:00</p>
              </div>
            </div>
            <div className='buttons flex flex-col items-center justify-around w-full'>
              <a className='bg-green-500 px-2 py-2 rounded-lg text-center text-white border-none'>Accept</a>
              <a className='bg-red-500 px-2 py-2 rounded-lg text-center text-white border-none'>Reject</a>
            </div>
          </div>

          <div className='new-registers-card bg-white p-10 m-10 rounded-lg flex'>
            <div className='flex flex-col w-full gap-6 font-medium text-[#5c5a5a] justify-around 
             items-center'>
              <div>
                <p>John Doe</p>
              </div>
              <div>
                Employee
              </div>
              <div className='justify-between items-center flex flex-col'>
                <p>date:dd/mm/yy</p>
                <p>Time:12:00</p>
              </div>
            </div>
            <div className='buttons flex flex-col items-center justify-around w-full'>
              <a className='bg-green-500 px-2 py-2 rounded-lg text-center text-white border-none'>Accept</a>
              <a className='bg-red-500 px-2 py-2 rounded-lg text-center text-white border-none'>Reject</a>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default NewRegisters