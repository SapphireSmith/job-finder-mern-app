import React from 'react'
import UserNav from '../../../components/UserNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faLocationArrow, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

    return (
        <div>
            <UserNav />

            <section>
                <div className='bg-[#02203c] pb-16 h-[100%]'>
                    <div className='job-section'>
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
                                    <span className='italic font-medium'>100</span> Jobs found.
                                </p>
                            </div>

                            <div className='job-cards pt-5 px-6 flex flex-col gap-7'>
                                <div className='card bg-white rounded-lg '>
                                    <div className='title border-b-2 p-4 '>
                                        <h2 className='text-black font-semibold'>Web Developer</h2>
                                        <p className='text-[#3d3c3c] text-sm font-thin'>Kollam,Kerala</p>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                            <p className='font-thin'>Part-time</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                            <p className='font-thin'>Kollam,Kerala</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                            <p className='font-thin'>18/4/2004</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end p-4 gap-4'>
                                        <button className='bg-cyan-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >View</button>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >Apply</button>
                                    </div>
                                </div>


                                <div className='card bg-white rounded-lg '>
                                    <div className='title border-b-2 p-4 '>
                                        <h2 className='text-black font-semibold'>Web Developer</h2>
                                        <p className='text-[#3d3c3c] text-sm font-thin'>Kollam,Kerala</p>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                            <p className='font-thin'>Part-time</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                            <p className='font-thin'>Kollam,Kerala</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                            <p className='font-thin'>18/4/2004</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end p-4 gap-4'>
                                        <button className='bg-cyan-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >View</button>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >Apply</button>
                                    </div>
                                </div>


                                <div className='card bg-white rounded-lg '>
                                    <div className='title border-b-2 p-4 '>
                                        <h2 className='text-black font-semibold'>Web Developer</h2>
                                        <p className='text-[#3d3c3c] text-sm font-thin'>Kollam,Kerala</p>
                                    </div>
                                    <div className='p-4 flex flex-col gap-2'>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                            <p className='font-thin'>Part-time</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                            <p className='font-thin'>Kollam,Kerala</p>
                                        </div>
                                        <div className='flex gap-2 items-center'>
                                            <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                            <p className='font-thin'>18/4/2004</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-end p-4 gap-4'>
                                        <button className='bg-cyan-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >View</button>
                                        <button className='bg-green-500 text-white px-3 py-1 rounded-sm text-lg'
                                        >Apply</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home