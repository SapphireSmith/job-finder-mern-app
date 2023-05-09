import React, { useEffect, useState } from 'react'
import AdminNav from '../../../components/AdminNav'
import { getNewRegisters } from '../../../helper/helpers'

const NewRegisters = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getNewRegisters();
      setData(data);
    }
    fetchData();
  }, [])


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }


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
        <div className='new-registers bg-[#555555] w-full h-[100%] md:h-[100vh] pb-8'>
          <div className='title uppercase text-center text-[25px] font-medium  text-white p-6'>
            <h3>New Registers</h3>
          </div>
          {/* new-registers-card */}
          {
            data && data.map((user) => {
              return (

                <div key={user._id} className='new-registers-card bg-white p-10 m-10 rounded-lg flex'>
                  <div className='flex flex-col w-full gap-6 font-medium text-[#5c5a5a] justify-around 
                      items-center'>
                    <div>
                      <p>{user.firstName} {user.lastName}</p>
                    </div>
                    <div>
                      <p>{user.userType}</p>
                    </div>
                    <div className='justify-between items-center flex flex-col'>
                      <p>date: {formatDate(user.createdAt)}</p>
                    </div>
                  </div>
                  <div className='buttons flex flex-col items-center justify-around w-full'>
                    <a className='bg-green-500 px-2 py-2 rounded-lg text-center text-white border-none'>Accept</a>
                    <a className='bg-red-500  px-3 py-2  rounded-lg text-center text-white border-none'>Reject</a>
                  </div>
                </div>
              )
            })
          }

        </div>
      </section>
    </div>
  )
}

export default NewRegisters