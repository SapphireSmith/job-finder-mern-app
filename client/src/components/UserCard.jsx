import React from 'react'
import { faToolbox, faLocationArrow, faCalendarDay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDate } from '../helper/convert';
import { getfilePreview } from '../helper/helpers';


const UserCard = ({ post }) => {

    function handleContactButtonClick(email) {
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }

    const viewFile = async (e, file) => {
        e.preventDefault();
        await getfilePreview(file);
    }

    return (
        <>
            <div className='job-cards pt-5 px-6 flex flex-col gap-7  md:flex-row md:w-[100%] md:flex-wrap md:items-center md:justify-center'>
                {
                    post && post.map((item, index) => (
                        <div key={index} className='card bg-white rounded-lg md:w-[46%]'>
                            <div className='title border-b-2 p-4 '>
                                <h2 className='text-black font-semibold'>
                                    {item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1).toLowerCase()}{' '}
                                    {item.lastName.charAt(0).toUpperCase() + item.lastName.slice(1).toLowerCase()}
                                </h2>
                            </div>
                            <div className='p-4 flex flex-col gap-2'>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                    <p className='font-thin'>{item.skill && item.skill}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                    <p className='font-thin'>{item.country && item.country}</p>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                    <p className='font-thin'>{formatDate(item.createdAt)}</p>
                                </div>
                            </div>
                            <div className='flex justify-end p-4 gap-4 items-center'>
                                {
                                    item.file ? <button className='bg-blue-500 text-white px-3 py-2 rounded-lg text-sm'
                                        value={item.email}
                                        onClick={(e) => viewFile(e, item.file)}
                                    >View Cv / resume</button> : ''
                                }

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