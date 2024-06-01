"use client";
import React,{useState} from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Pagination } from "@nextui-org/react";
import SignupNewsletter from "../component/SignupNewsletter";

const products = [
  {
    src: "/assets/images/Product01.jpg",
    alt: "Battery Energy Storage System",
    title: "Battery Energy Storage System",
  },
  {
    src: "/assets/images/Product02.jpg",
    alt: "HF-H Series Inverter",
    title: "HF-H Series Inverter",
  },
  {
    src: "/assets/images/Product03.jpg",
    alt: "SR-182 Series Solar Panels",
    title: "SR-182 Series Solar Panels",
  },
  {
    src: "/assets/images/left.png",
    alt: "Product Image 1",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/middle.png",
    alt: "Product Image 2",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/right.png",
    alt: "Product Image 3",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/left.png",
    alt: "Product Image 4",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/middle.png",
    alt: "Product Image 5",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/right.png",
    alt: "Product Image 6",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/left.png",
    alt: "Product Image 6",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/middle.png",
    alt: "Product Image 6",
    title: "Lorem, ipsum dolor.",
  },
  {
    src: "/assets/images/right.png",
    alt: "Product Image 6",
    title: "Lorem, ipsum dolor.",
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
            <div
              key={index}
              className="bg-white grid justify-center p-5 rounded-3xl"
            >
              <Image
                src={product.src}
                width={300}
                height={100}
                alt={product.alt}
              />
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
      <SignupNewsletter />
  
    </>
  );
};

export default Page;
