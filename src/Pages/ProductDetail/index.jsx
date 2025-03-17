import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { useParams } from 'react-router';
import axios from 'axios';
import Rating from '../../components/Rating';
import toast, { Toaster } from 'react-hot-toast';
import DataNoFound from '../../components/DataNoFound';
import NotFound from '../NotFound';

const ProductDetail = () => {
  const {slug} = useParams();
  const [product, setProduct] = useState({});
  const url = import.meta.env.VITE_BACKEND_URL;
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        const currentElement = data.find((e) => e.slug === slug);
        setProduct(currentElement);
        setCurrentImage(currentElement.images[0]);
      })
      .catch((err) => {
        if (err.status === 404) {
          toast.error("theres prob with backend");
        }
      });
  }, []);

  if(!setProduct.slug) {
    return <NotFound />;
  }

  return ( 
    <>
      <Navbar/> 
     {
      product.slug ?  <div className="grid grid-cols-2 px-5 gap-25 mt-4">
      <div className='border-2 border-amber-500 p-8 grid grid-cols-[1fr_100px] gap-5'>
        <img src={currentImage}/> 
        <div className="grid grid-cols-[100px] grid-rows-[100px_100px_100px] object-cover gap-3">
          {product.images?.map
          ((image,index) => {
            return <img key={index}
            src={image} className='w-full h-full'/>;
          })}
        </div>
      </div>
      <div>
        <h2 className='text-3xl font-extrabold text-sky-600'>{product.title}</h2>
        <h2 className='my-3 text-2xl'>{product.description}</h2>
        <h2 className='text-4xl text-red-700 font-bold'>{product.price} Pound</h2>
        <Rating rating={product.rating} />
      </div>
    </div> : (
<DataNoFound />
    )
     }
    </>
  );
}

export default ProductDetail;
