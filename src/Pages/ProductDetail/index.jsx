import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router';
import axios from 'axios';

const ProductDetail = () => {
  const {slug} = useParams();
  const [product,setProduct]=useState({})
  const url="http://localhost:3000/products";

  useEffect(()=>{
    axios.get(url).then(({data})=>{
      const currentElement= data.find((e)=> e.slug ===slug);
    console.log(currentElement);
         setProduct(currentElement);
      
    });
  },[]);
  
console.log(product);
  return( 
  <>
    <Navbar/> 
  
  <div className="grid grid-cols-2 px-5 gap-25">
    <div>
 <img src={product.category?.image} className='h-[300px]'/>
    <div className="grid grid-cols-[100px_100px_100px] gap-0">
    {product.images?.map(({image})=>{
     return <img src={image} className='w-[100px]'/>;
    })}
    </div>
    </div>
    <div>
<h2>{product.title}</h2>
<h2>{product.description}</h2>
<h2>{product.price}</h2>
<h2>{product?.category?.name}</h2>
    </div>
  </div>

</>
  );
};

export default ProductDetail;