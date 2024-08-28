import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

function Signup() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data);

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div id="" className="w-[550px]">
    <div className= " modal-box border-none shadow-md outline-none p-7 rounded-2xl dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 duration-300">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-4 space-y-2'>
        <span>
            Name
        </span>
        <br/>
        <input type="text" placeholder='Enter your name' className='w-80 px-3 py-1 border 
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
            Password
        </span>
        <br/>
        <input type="text" placeholder='Enter your password' className=' w-80 px-3 py-1 border 
        rounded-md outline-none' {...register("password", { required: true })} /><br/>
        {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='flex justify-items-end space-x-40  mt-4 '>
        <button className='bg-red-500 text-white rounded-md md:px-3 md:py-1 hover:bg-red-600'>Signup</button>
        <p className='mt-1'>Have account? <button className='justify-around  md:justify-end underline text-blue-500 cursor-pointer ' 
        onClick={()=> document.getElementById("my_modal_3").showModal()} >Login</button>{" "}<Login/></p>
    </div>
    </form>
    </div>
    </div> 
    </div>
    </>
  )
}

export default Signup
