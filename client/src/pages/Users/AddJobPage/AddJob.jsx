import React from 'react'
import UserNav from '../../../components/UserNav'
import { postJobs } from '../../../helper/helpers'
import { useFormik } from 'formik'
import { Toaster, toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const AddJob = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            position: '',
            jobLocation: '',
            company: '',
            jobType: '',
            description: '',
            email: ''
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values) => {
            const { data, status } = await postJobs(values);
            if (status === 201) {
                toast.success("Created Successfully")
                navigate('/home')
                formik.resetForm();
            } else {
                toast.error("Can't post Please try again later");
            }
        }
    })

    return (
        <div>
            <UserNav />

            <Toaster
                position="top-center"
                toastOptions={{
                    style: {
                        minWidth: '200px',
                        minHeight: '30px',
                        fontSize: '16px'
                    }
                }}
            />
            <section>
                <div className="mt-16 w-full h-[100%] bg-[#02203c]">
                    <div className='title'>
                        <h1 className="text-white text-center pt-10 
            text-[20px] font-semibold sm:text-3xl">Add Job</h1>
                    </div>

                    <div className='w-full pb-32'>
                        <form action="" className='m-6 sm:px-11 md:px-20 lg:px-28 xl:px-44' onSubmit={formik.handleSubmit} >
                            <div className='form-elements flex flex-col '>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Position </label>
                                    <input {...formik.getFieldProps('position')} type="text" className='text-black font-light px-4 p-2 text-[20px] rounded-md placeholder:px-2' placeholder='Position' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Job Location </label>
                                    <input {...formik.getFieldProps('jobLocation')} type="text" className='px-4 p-2 text-black font-light text-[20px] rounded-md placeholder:px-2' placeholder='Location' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Company </label>
                                    <input {...formik.getFieldProps('company')} type="text" className='px-4 p-2 text-black font-light text-[20px] rounded-md placeholder:px-2' placeholder='Company' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 font-extralight'>
                                    <label className='text-white'> Job Type </label>
                                    <select {...formik.getFieldProps('jobType')} name="jobType" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2 text-black' required >
                                        <option value="Internship" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2 ' >Internship</option>
                                        <option value="Remote" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Remote</option>
                                        <option value="Part-Time" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Part Time</option>
                                        <option value="Full-Time" className='px-4 p-2 text-[20px] rounded-md placeholder:px-2' >Full Time</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label> Description </label>
                                    <textarea {...formik.getFieldProps('description')} type="text" className='px-4 p-2 font-light text-black text-[20px] rounded-md placeholder:px-2' placeholder='Description' required />
                                </div>
                                <div className='flex flex-col gap-2 py-3 text-white font-extralight'>
                                    <label>Email <span className='font-thin italic'>(For contacting)</span></label>
                                    <input {...formik.getFieldProps('email')} type="email" className='px-4 p-2 font-light text-black text-[20px] rounded-md placeholder:px-2' placeholder='Description' required />
                                </div>
                                <div className='p-1 my-2 rounded-md text-center text-white bg-[#436fff] '>
                                    <button className='font-normal w-full' type='submit' >Submit</button>
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