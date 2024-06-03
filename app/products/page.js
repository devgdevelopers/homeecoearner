"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "@nextui-org/react";
import Link from 'next/link';




const products = [
  {
    src: "/assets/images/__img1.jpg",
    alt: "Battery Energy Storage System",
    title: "Battery Energy Storage System",
    customClass:"p-10 rounded-tr-[50%]   " ,
  },
  {
    src: "/assets/images/__img2.jpg",
    alt: "HF-H Series Inverter",
    title: "HF-H Series Inverter",
    customClass:"p-14 rounded-t-[50%] " ,
  },
  {
    src: "/assets/images/__img3.jpg",
    alt: "SR-182 Series Solar Panels",
    title: "SR-182 Series Solar Panels",
    customClass:"p-10 rounded-tl-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 1",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-tr-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 2",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-t-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 3",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-tl-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 4",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-tr-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 5",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-t-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 6",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-tl-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 7",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-tr-[50%] " ,
  },
  {
    src: "",
    alt: "Product Image 8",
    title: "Lorem, ipsum dolor.",
        customClass:"p-5 rounded-t-[50%] " ,
    

  },
  {
    src: "",
    alt: "Product Image 9",
    title: "Lorem, ipsum dolor.",
    customClass:"p-5 rounded-tl-[50%] " ,
  },
];

const PER_PAGE = 6;

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const offset = (currentPage - 1) * PER_PAGE;
  const currentProducts = products.slice(offset, offset + PER_PAGE);
  const totalPages = Math.ceil(products.length / PER_PAGE);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    arrows: true,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
      // Add more responsive settings as needed
    ],
  };

  return (
    <>
      <section className="md:mt-0 services-bg-images min-h-[50vh] bg-[#0a890d] my-auto text-white">
        <div className="container mx-auto flex flex-col justify-center items-center py-12">
          <h2 className="text-[20px] md:text-5xl font-bold mb-4 text-green">
            Products
          </h2>
          <p className=" mx-auto text-center text-lg text-dark font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Exercitationem deleniti cumque
            harum reiciendis illo, fuga itaque, enim, rem perspiciatis aperiam
            sit voluptatum quis a magni.
          </p>
        </div>
      </section>
      <section className="products-bg-section">
        <div className="container mx-auto py-20">
          <style>
            {`
              .slick-prev:before,
              .slick-next:before {
                color: white;
                font-size:25px;
              }
            `}
          </style>
          <Slider {...settings}>
            <div className="carousel-item mx-auto">
              <div className="text-center p-5 flex justify-center">
                <Image
                  width={500}
                  height={100}
                  src="/assets/images/ProductBattery.png"
                  alt="product image"
                ></Image>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center p-5 flex justify-center">
                <Image
                  width={500}
                  height={100}
                  src="/assets/images/ProductBattery.png"
                  alt="product image"
                ></Image>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center p-5 flex justify-center">
                <Image
                  width={500}
                  height={100}
                  src="/assets/images/ProductBattery.png"
                  alt="product image"
                ></Image>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center p-5 flex justify-center">
                <Image
                  width={500}
                  height={100}
                  src="/assets/images/ProductBattery.png"
                  alt="product image"
                ></Image>
              </div>
            </div>
            <div className="carousel-item">
              <div className="text-center p-5 flex justify-center">
                <Image
                  width={500}
                  height={100}
                  src="/assets/images/ProductBattery.png"
                  alt="product image"
                ></Image>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section className="w-full product-sec-bg flex flex-col justify-center">
        <h2 className="text-3xl text-center text-green font-semibold pt-10">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-1 w-[90%] xl:w-[70%] mx-auto gap-10 py-10">
        {currentProducts.map((product, index) => (
          <div key={index} className="bg-white grid justify-center p-5 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out ">

<Link href={`/products/${index}`}>
      <div
              className={`flex justify-center items-center rounded-xl h-60 sm:h-72 md:h-80 w-full  overflow-hidden bg-[#15a135] ${product.customClass}`}
            >           <Image
                src={product.src}
                width={300}
                height={200}
                objectFit="contain"
                alt={product.alt}  
                className=" transition-all duration-300 hover:scale-110 "

              />
            </div> 
    </Link>


            <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
              {product.title}
            </h3>
          </div>
        ))}
      </div>

        <Pagination
          className="mx-auto text-center py-10 custom-pagination"
          total={totalPages}
          initialPage={currentPage}
          onChange={handlePageChange}
        />
      </section>
      <section className="bg-[#00a241] py-20 signup-newsletter-bg shadow-inner">
        <div className="container mx-auto">
          <h2 className="text-center text-white  text-2xl lg:text-5xl font-semibold">
            Subscribe Newsletter
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[50px] md:w-[100px] h-[1px] bg-[#ffffff8a]"></div>
            <h2 className="text-xl md:text-2xl text-[#ffffff8a]">
              Get the latest news & offers
            </h2>
            <div className="w-[50px] md:w-[100px] h-[1px] bg-[#ffffff8a]"></div>
          </div>

          <div className="mx-auto py-10">
            <form action="" className="mx-auto flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0">
              <input type="email" placeholder="Your Email Address "
                className="p-5 services-light-bg md:rounded-l-full text-black outline-none placeholder:text-black placeholder:font-semibold px-20 shadow-xl "
                required />
              <button type="submit" className="p-5 text-white  md:rounded-r-full  bg-dark shadow-xl">
                Subscibe Now
              </button>
            </form>
          </div>

          <p className="text-center text-white">
            True environmental protection lies in loving the mountains, the
            oceans and in cherishing all creation.
          </p>

        </div>
      </section>
    </>
  );
};

export default Page;
