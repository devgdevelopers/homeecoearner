// components/Skeleton.js
import React from 'react';

const Skeleton = () => {
  return (
    <div className="flex flex-col lg:flex-row px-5 py-10 gap-10 animate-pulse">
      <div className="flex justify-center items-center w-full lg:w-[40%]">
        <div className="product-img-bg w-[360px] h-[330px] p-10 my-auto flex bg-gray-200"></div>
      </div>
      <div className="w-[90%] lg:w-[60%] flex justify-center gap-2 flex-col mx-auto text-center md:text-left">
        <div className="h-10 bg-gray-200 mb-2"></div>
        <div className="h-6 bg-gray-200 mb-4"></div>
        <div className="h-4 bg-gray-200"></div>
      </div>
    </div>
  );
};

export default Skeleton;
