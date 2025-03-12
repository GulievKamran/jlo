import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'



const Products = () => {
  const url="https://api.escuelajs.co/api/v1/products"
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setProducts(data.products);
    });
  },[])
  return (
    <div className='container mx-auto border-y-indigo-600'>
   <div className='grid grid-cols-4 g-5 '>
   {products.map(({id,
        title,
        description,
      images,
      
      })=>{
    return (
      <div key={id} className='border-1 border-amber-500'>
        <img src={images[0]} alt={title} className='obj-cover'/>
         <h2> {title}</h2>
         <h2>{description}</h2>
      </div>
    )
  })
    }
   </div>
    </div>
  )
}

export default Products;