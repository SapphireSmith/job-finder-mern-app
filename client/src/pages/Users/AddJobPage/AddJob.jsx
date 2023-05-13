import React from 'react'
import UserNav from '../../../components/UserNav'

const AddJob = () => {
    return (
        <div>
            <UserNav/>
            <section>
                <div className="mt-20 w-full h-[100%] bg-[#02203c]">
                    <div className='title'>
                        <h1 className="text-white text-center pt-10 
            text-[20px] font-semibold sm:text-3xl">Add Job</h1>
                    </div>

                    <div className='w-full pb-32'>
                        <form action="" className='m-6 sm:px-11 md:px-20 lg:px-28 xl:px-44'  >
                            <div className='form-elements flex flex-col '>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Position </label>
                                    <input type="text" className='text-black font-light px-4 p-2 text-[20px] rounded-md placeholder:px-2' placeholder='Position' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Job Location </label>
                                    <input type="text" className='px-4 p-2 text-black font-light text-[20px] rounded-md placeholder:px-2' placeholder='Location' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Company </label>
                                    <input type="text" className='px-4 p-2 text-black font-light text-[20px] rounded-md placeholder:px-2' placeholder='Company' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 font-extralight'>
                                    <label className='text-white'> Job Type </label>
                                    <select name="jobType" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2 text-black' required >
                                        <option value="Internship" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2 ' >Internship</option>
                                        <option value="Remote" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Remote</option>
                                        <option value="Part-Time" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Part Time</option>
                                        <option value="Full-Time" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Full Time</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Description </label>
                                    <textarea type="text" className='px-4 p-2 font-light text-black text-[20px] rounded-md placeholder:px-2' placeholder='Description' required />
                                </div>
                                <div className='p-1 my-2 rounded-md text-center text-white bg-[#436fff] '>
                                    <button className='font-normal' type='submit' >Submit</button>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AddJob