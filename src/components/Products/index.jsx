import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import toast from 'react-hot-toast';
import DataNoFound from '../DataNoFound';
import Loader from '../Loader';

const Products = ({ searchedText }) => {
  const url = import.meta.env.VITE_BACKEND_URL;
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const count = 3;
  const [pages, setPages] = useState(0);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(startIndex + count);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios.get(url)
      .then(({ data }) => {
        setProducts(data);
        setFilteredProducts(data);
        setPages(Math.ceil(data.length / count));
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err.response && err.response.status === 404) {
          toast.error("There's a problem with the backend");
        }
      });
  }, []);

  useEffect(() => {
    setStartIndex((activePage - 1) * count);
    setEndIndex(activePage * count);
  }, [activePage, count]);

  useEffect(() => {
    const filteredData = products.filter(({ title }) => {
      return title.toLowerCase().includes(searchedText.toLowerCase());
    });
    setPages(Math.ceil(filteredData.length / count));
    setFilteredProducts(filteredData);
    setActivePage(1);
  }, [searchedText, products]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className='flex'>
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6 px-5'>
          {filteredProducts.slice(startIndex, endIndex).map(({ id, title, images, price, category, description, slug }) => (
            <div key={id} className="border-1 border-amber-500 relative rounded-md">
              <div
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
              <Link to={`/products/${slug}`} className="absolute inset-0"></Link>
            </div>
          ))}
        </div>
      ) : (
        <DataNoFound />
      )}

      <div className='flex justify-center space-x-2 w-full mx-auto bg-green-500'>
        {new Array(pages).fill(" ").map((_, index) => (
          <div
            key={index}
            className={`w-8 h-8 flex justify-center items-center border rounded-full text-white cursor-pointer hover:bg-blue-900 transition-all duration-200 ${
              activePage === index + 1 ? "bg-sky-800" : "bg-sky-400"
            }`}
            onClick={() => setActivePage(index + 1)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;