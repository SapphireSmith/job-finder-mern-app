import React from 'react'
import UserNav from '../../../components/UserNav'
import SaveJobCard from '../../../components/SaveJobCard'

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
                            
                            <SaveJobCard />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SavedJobs