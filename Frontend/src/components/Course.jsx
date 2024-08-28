import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json'
import { Link } from 'react-router-dom'

function Course() {
  return (
    <>
    <div className='dark:bg-slate-900'>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900'>
        <div className='mt-16 py-10 items-center justify-center text-center dark:bg-slate-900'>
            <h1 className='text-2xl md:text-4xl  dark:bg-slate-900'>We're delighted to have you <span className='text-red-500'>here!</span></h1>
            <p className='mt-5'>Immerse yourself in a vast collection of captivating books, carefully curated to ignite your imagination and fuel your passions.<br/>
                From thrilling adventures to thought-provoking mysteries, our online bookstore offers a 
                diverse range of genres<br/> to suit every reader's taste.
                </p>
                <Link to="/">
                <button className='mt-5 bg-red-500 text-white px-5 py-2 rounded-md hover:bg-red-600 duration-300'>
                Back
                </button>
                </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4" >
            {
                list.map((item)=>(
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
        </div>
    </div>
    </>
  )
}

export default Course
