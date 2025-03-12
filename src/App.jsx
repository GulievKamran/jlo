import React, { useState } from 'react'
import { Link } from 'react-router'
import { ImStatsBars2 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

const App = () => {
  const [showMobile,setShowMobile]= useState(false);
  return ( <div className='flex justify-between items-center bg-slate-800 text-white h-[70px] px-5'>
        <div>
          <Link to="/" className='text-2xl font-bold'>Logo</Link>
        </div>
          
          <div className=" hidden md:flex gap-15 ">
            <Link 
            className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl 
            before:bg-white before:bottom-[-5px] before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"
            to="/">Home</Link>
            <Link 
            className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl  before:bottom-[-5px]
             before:bg-white before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"
            to="/about">About</Link>
            <Link 
            className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:bottom-[-5px]
             before:rounded-2xl before:bg-white before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]" 
            to="/contact">Contact</Link>
            <Link 
            className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:bottom-[-5px]
             before:rounded-2xl before:bg-white before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]" 
            to="/services">Services</Link>
          </div>

          <div className=' hidden md:flex gap-10 items-center'>
            <input type="text" placeholder='search' className='border'/>
            <button className='bg-amber-600 px-3 py-3 rounded-2xl cursor-pointer duration-300 border 
            hover:bg-transparent hover:text-white'>Log in</button>
          </div>

          <div className='block md:hidden cursor-pointer' onClick={()=>{
            setShowMobile(!showMobile)
          }}>

            {
              showMobile ? <FaTimes className='text-3xl text-white'/> : (<ImStatsBars2 className='text-white text-4xl' />)
            }
          
          </div>

         {showMobile && ( <div className='flex flex-col md:hidden absolute top-[70px] bg-amber-500 right-0 h-[calc(100vh-70px)] w-[300px] justify-center items-center  gap-4'>
            <Link to="/">Home</Link>
            <Link to="/about">about</Link>
            <Link to="/ser">ser</Link>
            <Link to="/hoe">Hoe</Link>
          </div>)}
  </div>
  
  )
}

export default App
