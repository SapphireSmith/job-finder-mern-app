import React from 'react'
import UserNav from '../../../components/UserNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faLocationArrow, faCalendarDay } from '@fortawesome/free-solid-svg-icons'

const SavedJobs = () => {
    return (
        <div>
            <UserNav />

            <section>
                <div className='bg-[#02203c] h-screen overflow-auto w-full pt-20 '>
                    <div className='job-section min-[500px]:p-9 sm:px-20'>
                        <div className='all-jobs text-white text-center pt-7'>
                            <h1 className='font-semibold text-[25px]'>Saved Jobs</h1>
                        </div>
                        <div className='jobs-listing-menu'>

                            <div className='mt-5 mx-6 border-b-2 border-[#d4d3d3]' />

                            <div className='pt-3 px-6'>
                                <p className='text-white font-medium'>
                                    <span className='italic font-medium'>100</span> Saved Jobs.
                                </p>
                            </div>

                            <div className='job-cards pt-5 px-6 flex flex-col gap-7  md:flex-row md:w-[100%] md:flex-wrap md:gap-12 md:items-center md:justify-center'>
                                <div className='card bg-white rounded-lg md:w-[46%]'>
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


                                <div className='card bg-white rounded-lg md:w-[46%]'>
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


                                <div className='card bg-white rounded-lg md:w-[46%]'>
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

export default SavedJobs