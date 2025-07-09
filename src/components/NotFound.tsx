import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <h1 className='text-9xl'>404</h1>
      <div className='flex flex-col text-center space-y-4 justify-center text-xl'>
        <h2>Oops! Page Not Found</h2>
        <p>That page does not exist or is unavailable</p>
      </div>
      <Link href={"/"}>
        <button className='bg-primary text-black p-4 font-bold text-xl mt-6 cursor-pointer'>
          Go Back Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
