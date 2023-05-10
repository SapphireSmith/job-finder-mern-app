import React, { useEffect, useState } from 'react'
import AdminNav from '../../../components/AdminNav'
import { deleteUser, formatDate, getNewRegisters, statusUpdate } from '../../../helper/helpers'

const NewRegisters = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNewRegisters();
      if (response.status === 200) {
        setData(response.data);
      }
    }
    fetchData();
  }, [])



  //complete the function if status === 200 then refresh the page 
  const acceptUser = async (id) => {
    const { status } = await statusUpdate(id)
    if (status === 200) {
      window.location.href = "/admin/dashboard/new-registers"
    }
  }

  const rejectUser = async (id) => {
    const { status } = await deleteUser(id);
    if (status === 200) {
      window.location.href = "/admin/dashboard/new-registers"
    }
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
        <div className='new-registers bg-[#555555] w-full h-[100vh] md:h-[100vh] pb-8'>
          <div className='title uppercase text-center text-[25px] font-medium  text-white p-6'>
            <h3>New Registers</h3>
          </div>
          {/* new-registers-card */}
          {
            data ? data.map((user) => {
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
                    <a className='bg-green-500 px-2 py-2 rounded-lg text-center text-white border-none'
                      onClick={() => {
                        acceptUser(user._id)
                      }}
                    >Accept</a>
                    <a className='bg-red-500  px-3 py-2  rounded-lg text-center text-white border-none'
                      onClick={() => {
                        rejectUser(user._id)
                      }}
                    >Reject</a>
                  </div>
                </div>
              )
            }) : <div className='bg-[#555555]  text-center text-white h-[80vh]'>
              <h3>No new Registers</h3>
            </div>
          }

        </div>
      </section>
    </div>
  )
}

export default NewRegisters