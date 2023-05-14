import React, { useEffect, useState } from 'react'
import UserNav from '../../../components/UserNav'
import { getJobPosts} from '../../../helper/helpers'
import JobCard from '../../../components/JobCard'



const Home = () => {

    const [post, setPost] = useState();
    const [postCount, setPostCount] = useState();

    useEffect(() => {
        const fethPost = async () => {
            let { data } = await getJobPosts();
            setPostCount(data.length)
            setPost(data);
        }
        fethPost()
    }, [])


    return (
        <div>
            <UserNav />
            <section>

                <div className='bg-[#02203c] h-screen overflow-auto w-full pt-20 '>
                    <div className='job-section min-[500px]:p-9 sm:px-20'>
                        <div className='all-jobs text-white text-center pt-7'>
                            <h1 className='font-semibold text-[25px]'>Jobs</h1>
                        </div>
                        <div className='jobs-listing-menu'>
                            <form className='pt-3 px-6'>
                                <div className='flex flex-col gap-3'>
                                    <div className='input-search flex flex-col gap-1'>
                                        <label className='text-white font-medium'>Search</label>
                                        <input type='text' placeholder='Search Jobs' className='px-3 p-1 rounded-md font-medium text-[#190505]
                                         focus:outline-none' />
                                    </div>
                                    <div className='flex flex-row gap-3 justify-around'>
                                        <div className='input-type flex flex-col gap-1'>
                                            <label className='text-white font-medium text-[14px]'>Type</label>
                                            <select name="type" className='px-1 py-[3px] p-1 rounded-md font-medium text-[#716a6a]
                                              focus:outline-none'>
                                                <option >Select</option>
                                                <option value="Part-time">Part time</option>
                                                <option value="Full-time">Full time</option>
                                                <option value="Remote">Remote</option>
                                            </select>
                                        </div>
                                        <div className='input-type flex flex-col'>
                                            <label className='text-white font-medium'>Sort</label>
                                            <select name="sort-by" className='px-1 py-[3px] p-1 rounded-md font-medium text-[#716a6a]
                                              focus:outline-none'>
                                                <option >Select</option>
                                                <option value="latest">latest</option>
                                                <option value="oldest">oldest</option>
                                            </select>
                                        </div>
                                        <div className='grid content-end'>
                                            <button className='bg-[#f24150] px-5 py-1 rounded-md font-medium text-white
                                              focus:outline-none'>Clear</button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className='mt-5 mx-6 border-b-2 border-[#d4d3d3]' />

                            <div className='pt-3 px-6'>
                                <p className='text-white font-medium'>
                                    <span className='italic font-medium'>{postCount || 0}</span> Jobs found.
                                </p>
                            </div>

                            <JobCard post={post} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home


