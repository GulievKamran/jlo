import React from "react";


const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
      <h1 className="text-7xl font-extrabold text-red-600">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">\
        The page you are looking for doesn't exist or has been moved.</p>
      
    </div>
  );
};

export default NotFound;