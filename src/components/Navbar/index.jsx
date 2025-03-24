import React from 'react'
import { Link } from 'react-router'
import { ImStatsBars2 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";
import { useState } from 'react';
import { SlBasket } from "react-icons/sl";

const Navbar = ({searchedText,setSearchedText}) => {
    const [showMobile,setShowMobile]= useState(false);

   const links=[
    { id:0, title:"Home", path:"/home"
    },
    {id:1, title:"About", path:"/about"},
    {id:2, title:"Services", path:"/services"},
    {id:3, title:"Contact", path:"/contact"}
];
  return (
    <div className='flex justify-between items-center bg-slate-800 text-white h-[70px] px-5'>
    <div>
      <Link to="/" className='text-2xl font-bold'>Kamran Brand</Link>
    </div>
      
      <div className=" hidden md:flex gap-15 items-center ">
         {links.map(({id,title,path})=>{
            return(
            <Link    key={id}    
              className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl          before:bg-white before:bottom-[-5px] before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"     
                to={path}
                >
                    {title}
                </Link>  );
         })}
       
      </div>

      <div className=' hidden md:flex gap-10 items-center'>
        <input type="text"
        placeholder='search' 
        value={searchedText}
        className='border outline-0 px-3 py-1 rounded-2xl
         placeholder:text-white placeholder:text-xl'
         onChange={(e)=>setSearchedText(e.target.value)}/>
        <Link to="/basket">
        <SlBasket />
        </Link>
      </div>

      <div className='block md:hidden cursor-pointer' onClick={()=>{
        setShowMobile(!showMobile)
      }}>

        {
          showMobile ? <FaTimes className='text-3xl text-white'/> : (<ImStatsBars2 className='text-white text-4xl' />)
        }
      
      </div>

     {showMobile && ( <div className='flex flex-col md:hidden absolute top-[70px] bg-amber-500 right-0 h-[calc(100vh-70px)] w-[300px] justify-center items-center  gap-4'>
        {links.map(({id,title,path})=>{
            return(
            <Link    key={id}     
             className="relative before:content-[''] before:block before:w-[0%] before:h-[3px] before:rounded-2xl          before:bg-white before:bottom-[-5px] before:absolute before:duration-500 hover:before:w-[100%] before:left-[50%] before:translate-x-[-50%]"     
                to={path}>
                    {title}
                </Link>  );

                
         })}

      </div>)}
</div>


  )
}

export default Navbar;