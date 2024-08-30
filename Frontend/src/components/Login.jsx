import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


function Login() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit =async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    
    await axios.post("http://localhost:4001/user/login", userInfo, {
      headers: { "Content-Type": "application/json" }, // Ensures the content type is set correctly
    })
    .then((res) => {
      console.log(res.data);
      if (res.data) {
        toast.success('Logged in Successfully');
        document.getElementById("my_modal_3").close();
        setTimeout(()=> {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },1000)
        
      }
      
    })
    .catch((err) => {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
        setTimeout(()=> {},2000)
      }
    });
  }

  return (
    <>
    <div>
    <dialog id="my_modal_3" className="modal">
    <div className= "modal-box dark:bg-slate-800 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}
      >✕</Link>{" "}
  
    <h3 className="font-bold text-lg">Login</h3>
    <div className='mt-4 space-y-2'>
        <span>
            Email
        </span>
        <br/>
        <input type="email" placeholder='Enter your email' className='w-80 px-3 py-1 border 
        rounded-md outline-none'  {...register("email", { required: true })} /><br/>
        {errors.email && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='mt-4 space-y-2'>
        <span>
            Password
        </span>
        <br/>
        <input type="text" placeholder='Enter your password' className='w-80 px-3 py-1 border 
        rounded-md outline-none'  {...register("password", { required: true })} /><br/>
        {errors.password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='flex justify-items-end space-x-48  mt-4 '>
        <button className='bg-red-500 text-white rounded-md p-3 py-1 md:px-3 md:py-1 hover:bg-red-600'>Login</button>
        <p className='mt-1'>Not registered? <Link to="/Signup" className='justify-end underline text-blue-500 cursor-pointer duration-300 '>Signup</Link>{" "}</p>
    </div>
    </form>
    </div>
    </dialog> 
    </div>
    </>
  )
}

export default Login
