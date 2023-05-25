import React from 'react'
import { faToolbox, faLocationArrow, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const UserCard = ({ post }) => {

    function handleContactButtonClick(email) {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }

    return (
        <>
            <div className='job-cards pt-5 px-6 flex flex-col gap-7  md:flex-row md:w-[100%] md:flex-wrap md:items-center md:justify-center'>

                {
                    post && post.map((item) => (
                        <div className='card bg-white rounded-lg md:w-[46%]'>
                            <div className='title border-b-2 p-4 '>
                                <h2 className='text-black font-semibold'>
                                    {item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}{' '}
                                    {item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase()}
                                </h2>
                            </div>
                            <div className='p-4 flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                    <p className='font-thin'>Mern Stack developer</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                    <p className='font-thin'>Contry</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                    <p className='font-thin'>18/4/2004</p>
                                </div>
                            </div>
                            <div className='flex justify-between p-4 gap-4 items-center'>
                                <div className='bookmark flex flex-col font-light '>
                                    {/* how to rerender the p tag only */}
                                    <p className='text-center text-[13px] text-[#3d3c3c] font-medium mt-1'>
                                    </p>
                                </div>
                                <button className='bg-green-500 text-white px-3 py-1 rounded-lg text-lg'
                                    value={item.email}
                                    onClick={() => handleContactButtonClick(item.email)}
                                >Contact</button>
                            </div>
                        </div>
                    ))
                }


            </div>
        </>
    )
}

export default UserCard