import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router';

const Products = () => {
  const url="http://localhost:3000/products"
  const [products,setProducts]=useState([]);

  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setProducts(data); 
    });
  },[])
  return (
   <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5'>

   {products
   .slice  (0,25)
   .map(({id,title,images,price,category,description,slug})=>{
    return (
      <div key={id} className="border-1 border-amber-500 relative rounded-md">
        <img src={images[0]} alt={title} className={`object-cover w-full h-[250px] md:h-[150px] rounded-tl-md rounded-tr-md bg-[url(${images[0]})]`}
        />
        <div className='p-2 '>
        <h2 className='ml-9 truncate'> {title}</h2>
      
         <h2 className='absolute top-2 right-2 bg-red-200 px-2 py-0,5 text-sm rounded-md'>{category.name}</h2>
         <h2 className="my-4 mx-3 line-clamp-3">{description}</h2>
         <h2 className='mt-2 text-red-800 text-2xl font-bold'>{price} AZN</h2>
        </div>
        <Link to={"/products" + slug} className="absolute inset-0">hello</Link>
      </div>
    );
  })};
   </div>
  
  );
};

export default Products;