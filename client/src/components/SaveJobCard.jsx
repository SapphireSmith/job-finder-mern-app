import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faLocationArrow, faCalendarDay, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { getSavedPost, removeSavedPost, saveJobPost } from '../helper/helpers';
import { formatDate } from '../helper/convert';


const SaveJobCard = () => {


    const [bookmarkUpdate, setBookmarkUpdate] = useState()
    const [postCount, setPostCount] = useState();
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        const fetchUpdatedPost = async () => {
            let savedPost = await getSavedPost();
            setPostCount(savedPost.data.savedPosts.length)
            setBookmarkUpdate(savedPost.data.savedPosts)
        }

        fetchUpdatedPost();
    }, [refresh === true])

    const toggleBookmark = async (postId) => {

        if (bookmarkUpdate.some(post => post._id === postId)) {
            const { data, status } = await removeSavedPost(postId);
            console.log(data);
            if (status === 200) {
                setrefresh(true)
                setBookmarkUpdate(bookmarkUpdate.filter(post => post._id !== postId))
            }
        } else {
            const data = await saveJobPost(postId)
            console.log(data);
            setBookmarkUpdate([...bookmarkUpdate, { _id: postId }]);
            setrefresh(false)
        }
    };

    function handleContactButtonClick(email) {
        console.log(email);
        const mailtoLink = `mailto:${email}`;
        window.location.href = mailtoLink;
    }

    return (
        <>
            <div className='pt-3 px-6'>
                <p className='text-white font-medium'>
                    <span className='italic font-medium'>{postCount || 0}</span> Saved Jobs.
                </p>
            </div>

            <div className='job-cards pt-5 px-6 flex flex-col gap-7  md:flex-row md:w-[100%] md:flex-wrap md:items-center md:justify-center'>

                {
                    bookmarkUpdate && bookmarkUpdate.map((job) => {
                        return (

                            <div key={job._id} className='card bg-white rounded-lg md:w-[46%]'>
                                <div className='title border-b-2 p-4 '>
                                    <h2 className='text-black font-semibold'>{job.position}</h2>
                                    <p className='text-[#3d3c3c] text-sm font-thin'>{job.jobLocation}</p>
                                </div>
                                <div className='p-4 flex flex-col gap-2'>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faToolbox} color='#3d3c3c' />
                                        <p className='font-thin'>{job.jobType}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faLocationArrow} color='#3d3c3c' />
                                        <p className='font-thin'>{job.jobLocation}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FontAwesomeIcon icon={faCalendarDay} color='#3d3c3c' />
                                        <p className='font-thin'>{formatDate(job.createdAt)}</p>
                                    </div>
                                </div>
                                <div className='flex justify-between p-4 gap-4 items-center'>
                                    <div className='bookmark flex flex-col font-light '>
                                        <FontAwesomeIcon
                                            icon={faBookmark}
                                            color="#FFA500"
                                            size="lg"
                                            onClick={() => toggleBookmark(job._id)}
                                            className='hover:cursor-pointer'
                                        />

                                        {/* how to rerender the p tag only */}
                                        <p className='text-center text-[13px] text-[#3d3c3c] font-medium mt-1'>
                                            {
                                                bookmarkUpdate && refresh ? bookmarkUpdate.map((post) => {
                                                    return (
                                                        post._id === job._id ? "Saved" : ""
                                                    )
                                                }) : bookmarkUpdate && bookmarkUpdate.map((post) => {
                                                    return (
                                                        post._id === job._id ? "Saved" : ""
                                                    )
                                                })

                                            }

                                        </p>
                                    </div>
                                    <button className='bg-green-500 text-white px-3 py-1 rounded-lg text-lg'
                                        value={job.email}
                                        onClick={() => handleContactButtonClick(job.email)}
                                    >Apply</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}

export default SaveJobCard