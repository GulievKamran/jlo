import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import DataNoFound from '../DataNoFound';

const Products = () => {
  const url=import.meta.env.VITE_BACKEND_URL;
  const [products,setProducts]=useState([]);
     
  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setProducts(data); 
    })
        .catch((err)=> {
          if(err.status===404){
            toast.error("theres prob with backend");
          }
          
          
        })
  },[])
  return (
   <>
   
  {products.length > 0 ? (
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5'>
 { products.map(({ id, title, images, price, category, description, slug }) => {
    return (
      <div key={id} className="border-1 border-amber-500 relative rounded-md">
        <div
          alt={title}
          className="object-con w-full h-[250px] md:h-[150px] rounded-tl-md rounded-tr-md bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${images[0]})` }}
        />
        <div className="p-2">
          <h2 className="ml-9 truncate"> {title} </h2>
          <h2 className="absolute top-2 right-2 bg-red-200 px-2 py-0.5 text-sm rounded-md">
            {category.name}
          </h2>
          <h2 className="my-4 mx-3 line-clamp-3"> {description} </h2>
          <h2 className="mt-2 text-red-800 text-2xl font-bold"> {price} AZN </h2>
        </div>
        <Link to={"/products/" + slug} className="absolute inset-0"></Link>
      </div>
    );
  })}
  </div>
) : (
  <DataNoFound />
)}
 
   
   </>
  );
};

export default Products;