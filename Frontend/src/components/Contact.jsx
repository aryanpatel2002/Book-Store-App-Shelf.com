import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Contact() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);

  return (
    <>
    <div>
    <Navbar/>
    <div className='min-h-screen '>
    <div className='flex h-screen items-center justify-center'>
    <div id="" className="w-[550px]">
    <div className= " modal-box border-none shadow-md outline-none p-7 rounded-2xl dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 duration-300">✕</Link>
    
    <h3 className="font-bold text-4xl">Contact Us</h3>
    <div className='mt-4 space-y-2'>
        <span>
            Name
        </span>
        <br/>
        <input type="text" placeholder='Enter your name' className=' w-80 px-3 py-1 border 
        rounded-md outline-none' {...register("name", { required: true })} /><br/>
        {errors.name && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>
            Email
        </span>
        <br/>
        <input type="email" placeholder='Enter your email' className=' w-80 px-3 py-1 border 
        rounded-md outline-none' {...register("email", { required: true })} /><br/>
        {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>
            Message
        </span>
        <br/>
        <textarea placeholder="Type your message" className=' textarea textarea-bordered w-80 px-3 py-1 border 
        rounded-md outline-none' {...register("message", { required: true })} ></textarea>
        <br/>
        {errors.password && <span className='text-sm text-red-400'>This field is required</span>}

        <div className='flex justify-items-end space-x-40  mt-4 '>
        <button className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-600'>Submit</button>
    </div>
    </div>
    </form>
    </div>
    </div> 
    </div>
    </div>
    <Footer/>
    </div>
    </>
  )
}

export default Contact
