"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const UserProfile = ({ id }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [product, setProduct] = useState([]);
  console.log(product);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const id = window.location.pathname.split("/").pop();
        if (id) {
          const response = await fetch(`/api/products?id=${id}`);
          const data = await response.json();
          setProduct(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchProduct();
  }, []);
  console.log(product);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  // <h3>{product.cardHeading}</h3>
  //                 <img src={product.cardImg} alt={product.cardHeading} />

  return (
    <>
    <section className="bg-green">
    <div className="container mx-auto" key={product._id}>
        <div className="flex  py-10 ">
          <div className="flex justify-center w-[40%] ">
            <div className="product-img-bg w-full p-10">
            <Image
              src={product.cardImg}
              width={300}
              height={300}
              alt={product.cardHeading}
              className=""
            />
            </div>
          
          </div>
          <div className="w-[60%] flex justify-center  flex-col">
            <h3 className="text-[60px] font-extrabold text-white" dangerouslySetInnerHTML={{ __html: product.cardHeading }} />

            <h4 className="text-[25px] font-extrabold text-white">A Comprehensive Solar Energy Solution</h4>
            <p className="text-[20px] text-white mb-10">
              Our HF-H series represents a new era in solar energy management,
              combining the functionalities of solar energy storage, municipal
              power charge storage, and AC sine wave output into one
              sophisticated all-in-one machine.
            </p>
            <p className="text-[20px] text-white">
              Designed with versatility in mind, it's the perfect fit for a
              range of applications, from residential to industrial.
            </p>
          </div>
        </div>
      </div>
    </section>
     
    </>
  );
};

export default UserProfile;
