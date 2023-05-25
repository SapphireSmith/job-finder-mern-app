import React, { useEffect, useState } from 'react'
import UserNav from '../../../components/UserNav'
import { getJobPosts } from '../../../helper/helpers'
import JobCard from '../../../components/JobCard'



const Home = () => {

    const [post, setPost] = useState();
    const [postCount, setPostCount] = useState();
    const [filteredList, setFilteredList] = useState();
    const [query,setQuery] = useState()

    const fethPost = async () => {
        let { data } = await getJobPosts();
        setPost(data);
        setFilteredList(data)
        setPostCount(data.length)
    }
    useEffect(() => {
        fethPost()
    }, [])

    const filterBySearch = async (event) => {
        const query = event.target.value;
        var updatedList = [...post];
        updatedList = updatedList.filter((item) => {
            return item.position.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        })
        setFilteredList(updatedList);
        setPostCount(updatedList.length)
    }
    const clearForm = (e) => {
        e.preventDefault()
        setQuery('')
        fethPost()
    }

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
                                <div className='flex flex-row gap-3 w-full sm:w-1/2'>
                                    <div className='input-search flex flex-col sm:w-3/4 w-3/4 '>
                                        <label className='text-white font-medium'>Search</label>
                                        <input type='text' placeholder='Search Jobs' className='px-3 p-1 rounded-md font-medium text-[#190505]
                                         focus:outline-none' value={query} onChange={(e => { 
                                            setQuery(e.target.value)
                                            filterBySearch(e) })} />
                                    </div>
                                    <div className='grid content-end sm:w-1/4 w-1/4'>
                                        <button onClick={clearForm} className='bg-[#f24150] min-[428px]:px-5 min-[428px]:py-1 py-1 px-2 rounded-md font-medium text-white
                                              focus:outline-none' >Clear</button>
                                    </div>
                                </div>
                            </form>

                            <div className='mt-5 mx-6 border-b-2 border-[#d4d3d3]' />

                            <div className='pt-3 px-6'>
                                <p className='text-white font-medium'>
                                    <span className='italic font-medium'>{postCount || 0}</span> Jobs found.
                                </p>
                            </div>

                            <JobCard post={filteredList} />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home


