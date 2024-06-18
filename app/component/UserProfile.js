"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TalkAdvisor from "./TalkAdvisor";
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
          <div className="flex justify-center items-center w-[40%] ">
            <div className="product-img-bg w-[360px] h-[330px] p-10 my-auto">
            <Image
              src={product.cardImg}
              width={300}
              height={300}
              alt={product.cardHeading}
              className="mx-auto m-0 p-0 mb-0"
            />
            </div>
          
          </div>
          <div className="w-[60%] flex justify-center  flex-col">
            <h3 className="text-[60px] font-extrabold text-white" dangerouslySetInnerHTML={{ __html: product.cardHeading }} />
            <h3 className="text-[25px] font-extrabold text-white" dangerouslySetInnerHTML={{ __html: product.cardSubHeading }} />
            <h3 className="text-[20px] text-white" dangerouslySetInnerHTML={{ __html: product.shortDesc }} />
           

          
          </div>
          <div>

          </div>
        </div>
      </div>
    </section>

    <section className="container mx-auto py-20">
      <h1 className="text-[50px] text-green text-center font-bold pb-10">Key Features</h1>
     <div className="grid grid-cols-2">
      <div>
      <span className="text-[18px] text-black" dangerouslySetInnerHTML={{ __html: product.content }} />
      </div>
      <div>

      </div>
     </div>
    </section>

    <TalkAdvisor />
     
    </>
  );
};

export default UserProfile;
