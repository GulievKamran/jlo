import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';


const Categories = ({activeCategory}) => {
    const [category,setCategory]=useState([]);
    const url =  import.meta.env.VITE_CATEGORY_URL

   useEffect(()=>{
   axios.get(url).then(({data})=>{
    setCategory(data);
    console.log(data);
    

    
   })
   },[])


  return (
<div className='mt-5'>
<div className={` text-white p-2 mb-2 cursor-pointer ${activeCategory === 0?"bg-slate-600" : "bg-slate-300"}`}>All</div>
    {
        category.map(({id,name})=>{
            return( 
            <div key={id}
            className='bg-red-700 p-2 mb-2 text-white cursor-pointer'>
                {name}
            </div>
            );
        })
    }
</div>
  )
}

export default Categories;