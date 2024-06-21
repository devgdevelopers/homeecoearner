"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TalkAdvisor from "./TalkAdvisor";

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [product, setProduct] = useState([]);
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
        setError(error);
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const renderCustomizedContent = (content) => {
    // Custom styles for h1 and h2 tags
    content = content.replace(/<h1([^>]*)>/g, '<h1$1 style="font-size: 25px; font-weight: bold;">');
    content = content.replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 20px; font-weight: 600;">');
    content = content.replace(/<p([^>]*)>/g, '<h2$1 style="font-size: 18px; ">');
    return { __html: content };
};

  return (
    <>
      <section className="bg-green">
        <div className="container mx-auto" key={product._id}>
          <div className="flex flex-col md:flex-row py-10 ">
            <div className="flex justify-center items-center w-full md:w-[40%] ">
              <div className="product-img-bg w-[360px] h-[330px] p-10 my-auto flex">
                <Image
                  src={product.cardImg}
                  width={300}
                  height={300}
                  alt={product.cardHeading}
                  className="mx-auto m-0 p-0  my-auto"
                />
              </div>
            </div>
            <div className="w-[90%] md:w-[60%] flex justify-center gap-5 flex-col mx-auto text-center md:text-left">
              <h3
                className="text-4xl md:text-[60px] font-extrabold text-white"
                dangerouslySetInnerHTML={{ __html: product.cardHeading }}
              />
              <h3
                className="text-xl md:text-[25px] font-extrabold text-white"
                dangerouslySetInnerHTML={{ __html: product.cardSubHeading }}
              />
              <h3
                className="text-[20px] text-white"
                dangerouslySetInnerHTML={{ __html: product.shortDesc }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-20">
        <h1 className="text-[30px] md:text-[50px] text-green text-center font-bold pb-10">
          Key Features
        </h1>
        <div className="flex flex-col md:flex-row  ">
        <div className="w-full md:w-[60%]">
  <span
    className="text-[18px] text-black"
    dangerouslySetInnerHTML={renderCustomizedContent(product.content)}
  />
</div>

          <div className="flex flex-col justify-between items-center p-10 w-[40%]">
  {product.images && product.images.length > 0 ? (
    product.images.map((image, index) => (
      image ? ( // Check if image is truthy (not null or undefined)
        <img
          key={`${product._id}-${index}`} // Ensure each key is unique
          width="450px"
          src={image}
          alt={`Image ${index + 1}`}
          className="mx-auto"
        />
      ) : null // If image is null or undefined, do not render
    ))
  ) : (
    <p>No images available</p>
  )}
</div>

        </div>
      </section>

      <TalkAdvisor />
    </>
  );
};

export default UserProfile;
