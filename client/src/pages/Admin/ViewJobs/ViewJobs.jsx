import React, { useEffect, useState } from 'react'
import AdminNav from '../../../components/AdminNav';
import { deleteJobPost, getAllJobs } from '../../../helper/helpers';
import { formatDate } from '../../../helper/convert';
import { Toaster, toast } from 'react-hot-toast';

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
    title: 'View Users',
    path: '/admin/dashboard/users'
  }
]


const ViewJobs = () => {
  const [jobs, setJobs] = useState();
  const [error, seetError] = useState('');
  const fetchJobs = async () => {
    let { data, status } = await getAllJobs();
    if (status === 200) {
      setJobs(data);
    } else {
      seetError('No jobs found');
    }

  }
  useEffect(() => {
    fetchJobs()
  }, [])

  const deleteJob = async (e, id) => {
    e.preventDefault()
    const confirm = window.confirm('Are you sure you want to delete this job post?' + id);
    if (confirm) {
      const { data, status } = await deleteJobPost(id);
      if (status === 200) {
        toast.success('Post deleted');
        fetchJobs()
      } else {
        toast.error("Cant't delete job post")
      }

    } else {
      window.close()
    }
  }

  return (
    <div>
      <AdminNav navValues={nav} />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: '200px',
            minHeight: '30px',
            fontSize: '16px'
          }
        }}
      />

      <section className='mt-20 bg-[#112a42]'>
        <div className='title w-full text-center '>
          <h1 className='text-[23px] sm:text-[30px] p-6 text-white font-semibold underline'>All Jobs</h1>
        </div>

        <div className="relative overflow-x-auto h-[100vh] md:p-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Job Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Job Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Posted at
                </th>
                <th>

                </th>
              </tr>
            </thead>
            <tbody>
              {
                jobs && jobs.map((item) => {
                  return (
                    <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {item._id}
                      </th>
                      <td className="px-6 py-4">
                        {item.position}
                      </td>
                      <td className="px-6 py-4">
                        {item.jobLocation}
                      </td>
                      <td className="px-6 py-4">
                        {formatDate(item.createdAt)}
                      </td>
                      <td className="px-6 py-4">
                        <button className='bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 duration-200 hover:text-gray-300'
                          onClick={(e) => {
                            deleteJob(e, item._id)
                          }}
                        >Delete</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          {
            error && <div className='w-full'>
              <h3 className='text-white font-bold flex justify-center pt-36'>No jobs found</h3>
            </div>
          }
        </div>
      </section>
    </div>
  )
}

export default ViewJobs