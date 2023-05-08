import React from 'react'
import AdminNav from '../../../components/AdminNav'

const Users = () => {
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
      <section>
        <div className='title w-full text-center  bg-[#555555]'>
          <h1 className='text-[23px] sm:text-[30px] p-6 text-white font-semibold'>Users</h1>
        </div>

        <div className="relative overflow-x-auto h-[100vh] bg-[#555555] ">
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
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  36286876287687368
                </th>
                <td className="px-6 py-4">
                  John
                </td>
                <td className="px-6 py-4">
                  Recruter
                </td>
                <td className="px-6 py-4">
                  18/4/2004
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  36286876287687368
                </th>
                <td className="px-6 py-4">
                  John
                </td>
                <td className="px-6 py-4">
                  Recruter
                </td>
                <td className="px-6 py-4">
                  18/4/2004
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  36286876287687368
                </th>
                <td className="px-6 py-4">
                  John
                </td>
                <td className="px-6 py-4">
                  Recruter
                </td>
                <td className="px-6 py-4">
                  18/4/2004
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  )
}

export default Users