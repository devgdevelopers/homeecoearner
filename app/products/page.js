"use client";
import React, { useState, useEffect } from "react";
import Breadcrumb from "../component/BreadCrumb";

import Image from "next/image";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TalkAdvisor from "../component/TalkAdvisor";

const page = () => {
  const [products, setProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products", {
          cache:'force-cache'
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log("Fetched products:", data);
        setProducts(data.data); // Assuming your API returns { data: productsArray }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setProductsLoading(false); // Ensure loading is set to false even if there is an error
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="hidden product-page-bg min-h-[396px] lg:flex justify-center">
        <h1 className="font-bold text-[35px] md:text-[60px] text-center text-white my-auto">
          All Products
        </h1>

      </div>


      {/* mob banner  */}
      <div className="lg:hidden product-page-bg-mob min-h-[310px] flex justify-center">
        <h1 className="font-bold text-[35px] md:text-[60px] text-center text-white my-auto">
          All Products
        </h1>

      </div>


     {/* Breadcrumb */}
     <Breadcrumb />


      <section className="container mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 px-10 md:p-10">
          {productsLoading
            ? [1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="p-5 w-full py-10 flex justify-center items-center flex-col "
                >
                  <Skeleton width={255} height={250} />
                  <h2 className="text-[15px] md:text-[22px] text-[#385723] font-semibold text-center mt-2 md:mt-10">
                    <Skeleton width={150} />
                  </h2>
                  <Skeleton width={100} height={30} />
                </div>
              ))
            : products.map((product) => (
           
             
              <div
                  key={product._id}
                  className="w-full flex flex-col "
                >
                   <a href={`/products/${product._id}`}>
                  <div className="product-div p-10 w-full min-w-[250px] lg:min-w-[380px] h-[380px] flex justify-center items-center">
               
                 <Image
                    src={product.cardImg}
                    width={280}
                    height={280}
                    alt="productimg"
                    className=" mx-auto my-auto max-w-[280px]"
                  />
               
                 
                  </div>
                  </a>
                 <span
                 className="font-bold text-[24px]  text-[#385723]  mt-2"
                 dangerouslySetInnerHTML={{ __html: product.cardHeading }}
               />
               {/* <p>
                {product.cardHeading}
               </p> */}
                
                  <h2
                 className="text-[18px]  text-black mt-2"
                 dangerouslySetInnerHTML={{ __html: product.cardSubHeading }}
               />
               <Link
                 href={`/products/${product._id}`}
                 className="text-lg text-[#028921]"
               >
                 <button className="relative overflow-hidden py-1  group rounded-[50px]  priority-btn">
                   <span className="text relative z-10 text-[20px] my-auto">
                     View More
                   </span>
                   <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                     <ArrowForwardOutlinedIcon className="ml-2" />
                   </span>
                 </button>
               </Link>
              
                </div>
               
    
               
                
              ))}
        </div>
      </section>
   

      <TalkAdvisor />
    </>
  );
};

export default page;
