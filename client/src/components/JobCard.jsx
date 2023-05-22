import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToolbox, faLocationArrow, faCalendarDay, faBookmark } from '@fortawesome/free-solid-svg-icons'
import { getSavedPost, removeSavedPost, saveJobPost } from '../helper/helpers';
import { formatDate } from '../helper/convert';


const JobCard = ({ post }) => {

    const [bookmarkUpdate, setBookmarkUpdate] = useState()
    const [refresh, setrefresh] = useState(false)


    useEffect(() => {
        const fetchUpdatedPost = async () => {
            let savedPost = await getSavedPost();
            setBookmarkUpdate(savedPost.data.savedPosts)
        }

        fetchUpdatedPost();
    }, [refresh === true])

    const toggleBookmark = async (postId) => {

        if (bookmarkUpdate && bookmarkUpdate.some(post => post._id === postId)) {
            const { data, status } = await removeSavedPost(postId);
            if (status === 200) {
                setrefresh(true)
                setBookmarkUpdate(bookmarkUpdate.filter(post => post._id !== postId))
            }
        } else {
            const data = await saveJobPost(postId)
            if (bookmarkUpdate) {
                setBookmarkUpdate([...bookmarkUpdate, { _id: postId }])
            } else {
                setBookmarkUpdate([{ _id: postId }])
            }
            setrefresh(false)
        }
    };

    const placelogo = (id) => {
        if (bookmarkUpdate && bookmarkUpdate.some(post => post._id === id)) {
            return true
        }

        return false
    }


    return (
        <>
            <div className='job-cards pt-5 px-6 flex flex-col gap-7  md:flex-row md:w-[100%] md:flex-wrap md:items-center md:justify-center'>

                {
                    post && post.map((job) => {
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
                                        {/* <FontAwesomeIcon
                                            icon={faBookmark}
                                            color="#FFA500"
                                            size="lg"
                                            onClick={() => toggleBookmark(job._id)}
                                            className='hover:cursor-pointer'
                                        /> */}
                                        {
                                            bookmarkUpdate && placelogo(job._id) ? <FontAwesomeIcon
                                                icon={faBookmark}
                                                color="#FFA500"
                                                size="lg"
                                                onClick={() => toggleBookmark(job._id)}
                                                className='hover:cursor-pointer'
                                            /> : <FontAwesomeIcon
                                                icon={faBookmark}
                                                color="#cccccc"
                                                size="lg"
                                                onClick={() => toggleBookmark(job._id)}
                                                className='hover:cursor-pointer'
                                            />
                                        }

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
                                    <button className='bg-green-500 text-white px-3 py-1 rounded-sm text-lg'
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

export default JobCard