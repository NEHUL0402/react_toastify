"use client"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const page = () => {
  const sendmessage = ()=>{
    toast('Message sent successfully')
  }
  return (<>
    <button onClick={sendmessage} className='rounded bg-green-500 border-none text-white px-9 py-5 font-bold text-2xl  '>LOGIN</button>
    <ToastContainer/>
    </>
  )
}

export default page