import React, { useEffect, useState } from 'react'
import AdminNav from '../../../components/AdminNav'
import { getAllUsers } from '../../../helper/helpers'
import { formatDate } from '../../../helper/convert';

const Users = () => {

  const [users, setUsers] = useState();
  const [msg, setMsg] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data, status, msg } = await getAllUsers();
      if (status === 201) {
        setUsers(data)
      } else {
        setMsg(msg)
      }
    }

    fetchData()
  }, [])


  const nav = [
    {
      id: 1,
      title: 'New Registers',
      path: '/admin/dashboard/new-registers'
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
      <section className='mt-20 bg-[#112a42]'>
        <div className='title w-full text-center '>
          <h1 className='text-[23px] sm:text-[30px] p-6 text-white font-semibold underline'>Users</h1>
        </div>

        <div className="relative overflow-x-auto h-[100vh] md:p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  User Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Joined at
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users && users.map((user) => {
                  return (
                    <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user._id}
                      </th>
                      <td className="px-6 py-4">
                        {user.firstName}
                      </td>
                      <td className="px-6 py-4">
                        {user.userType}
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(user.createdAt)}
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {
            msg && <div className='w-full'>
              <h3 className='text-white font-bold flex justify-center pt-36'>No users</h3>
            </div>
          }
        </div>
      </section>

    </div>
  )
}

export default Users