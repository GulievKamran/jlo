import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';
import DataNoFound from '../DataNoFound';
import Loader from '../Loader';


const Products = () => {
  const url=import.meta.env.VITE_BACKEND_URL;
  const [products,setProducts]=useState([]);
  const [isLoading,setIsLoading]= useState(true);

  // const [count,setCount]=useState(4);
  const count=3;
  const [pages,setPages] =useState(0);
  const [startIndex,setStarIndex]=useState(0);
  const [endIndex,setEndIndex]= useState(startIndex + count);
  const [activePage,setActivePage]=useState(1);
     
  useEffect(()=>{
    axios.get(url).then(({data})=>{
      setProducts(data);
      setPages(Math.ceil(data.length /count));
      setIsLoading(false);
      // console.log(data.length /count);
      
    })
        .catch((err)=> {
          setIsLoading(false);
          if(err.status===404){
            toast.error("theres prob with backend");
          }
          
          
        })
  },[]);

// useEffect(()=>{
//   setEndIndex(startIndex + count);
// }, [startIndex]);

useEffect(() => {
  setStarIndex((activePage - 1) * count);
  setEndIndex(activePage * count);
}, [activePage, count]);

  if(isLoading) {
    return <Loader />;}

    if (pages) {
      // console.log(new Array(pages).fill(""));

      
    }
    
  return (
   <>
   
  {products.length > 0 ? (
    <div className='grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5'>
 { products.slice(startIndex, endIndex).map(({ id, title, images, price, category, description, slug }) => {
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
          <h2 className="mt-2 text-red-800 text-2xl font-bold"> {price} Pound </h2>
        </div>
        <Link to={"/products/" + slug} className="absolute inset-0"></Link>
      </div>
    );
  })}
  </div>
) : (
  <DataNoFound />
  
)}
 
  <div className='flex justify-center mt-6 space-x-2'> 
  {new Array(pages).fill("").map((_, index) => {
       
        return (
          <div
            key={index}
            className={`w-8 h-8 flex  justify-center items-center px-4 py-2 border rounded-full text-white cursor-pointer hover:bg-blue-900 ${activePage === index+1 ? "bg-sky-800" : "bg-sky-400 "}`} 
            onClick={()=>{
              setActivePage(index+1);
            }}
            >
            {index + 1}
              </div>
        );
      })}
    </div>
   

   </>
  );
};

export default Products;