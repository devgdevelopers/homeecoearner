"use client";
import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiLogoFacebook } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const PER_PAGE = 6;


const Page = () => {
  const images = [
    "/assets/images/__img1.jpg",
    "/assets/images/__img2.jpg",
    "/assets/images/__img3.jpg",
    "/assets/images/__img1.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setCurrentImage(image);
  };

  
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const offset = (currentPage - 1) * PER_PAGE;
//   const currentProducts = products.slice(offset, offset + PER_PAGE);
//   const totalPages = Math.ceil(products.length / PER_PAGE);
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
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          centerPadding: "10px",
        },
      },
      // Add more responsive settings as needed
    ],
  };


  return (
    <>
      <section className="md:mt-0 services-images min-h-[40vh] bg-[#0a890d] my-auto text-white">
        <div className="container mx-auto flex flex-col justify-center items-center py-12">
          <h2 className="text-[20px] md:text-5xl font-bold mb-4 text-green">
          Battery Energy Storage System
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



    <section className="flex flex-col md:flex-row w-full xl:px-[300px] px-4 py-[50px] gap-4 bg-[#e8ffed]">
  <div className="flex w-full md:w-auto h-auto md:h-[55vh] gap-4 md:gap-2 md:flex-col left_section ">
    {images.map((image, index) => (
      <div key={index} className="smalll cursor-pointer p-1 flex justify-center items-center" onClick={() => handleImageClick(image)}>
        <Image src={image} alt={`Sample ${index + 1}`} width={90} height={90} className="rounded-lg" />
      </div>
    ))}
  </div>
  <div className="relative w-full md:w-[27rem] h-[27rem] mid_section">
    <Image src={currentImage} alt="Current" layout="fill" objectFit="contain" className="rounded-lg" />
  </div>
  <div className="w-full md:w-auto md:flex-1 md:ml-5 right_section md:text-[20px] text-[10px]">
    <h1 className="text-[#002202] text-2xl font-bold">Battery Energy Storage System</h1>
    <p>Our Lithium Battery Energy Storage System (BESS) is a comprehensive solution tailored for various energy storage needs.</p>
    <p>This system is versatile, suitable for large-scale energy storage, distribution network storage, microgrid storage, as well as industrial, commercial, and household applications.</p>
    <p>It also extends to specialized scenarios like data center power storage and emergency backup, providing customers with targeted, all-encompassing system solutions.</p>
    <hr/>
    <span className="text-sm social-icons mt-6">
      Share <BiLogoFacebook /><FaXTwitter /><FaPinterestP /><BsInstagram  /><FiMail  />
    </span>
  </div>
</section>


<section className="flex flex-col w-full xl:px-[300px] px-4 py-[50px]  __section2 bg-[#e8ffed]">
  <div className="w-[350px] h-[65px] bg-[#d1fcda] flex justify-center items-center">
    <span className="text-[#002202] text-xl font-medium">Key Features of Our BESS</span>
  </div>


  <h1 className="text-[#002202] text-xl font-bold">
  • Advanced Battery Management Technology
  </h1>
  <p><span className="text-[#002202] text-l font-semibold">Highly Integrated Chips & Unique Algorithm:</span> We employ advanced chips coupled with a unique battery equalization algorithm.This combination allows for bidirectional, large-current equalization,reaching currents up to 3A. </p>
  <p><span className="text-[#002202] text-l font-semibold">Efficient & Reliable:</span> Our system boasts an impressive energy efficiency of up
to 94%, ensuring high equalizing efficiency and reliability. </p>
  <p><span className="text-[#002202] text-l font-semibold">Low Power Consumption & Scalability:</span> With ultra-low static power
consumption, the system is designed for easy expansion and can be
cascaded to suit larger requirements.</p>
  <p><span className="text-[#002202] text-l font-semibold">Battery Protection:</span>  Our technology accurately estimates the internal state of
the battery, safeguarding both its safety and prolonging its lifespan. </p>



  <h1 className="text-[#002202] text-l font-bold">
  • Active Safety Technology
  </h1>
  <p><span className="text-[#002202] text-l font-semibold">Intelligent Fire Protection:</span>At the pack level, our BESS features an intelligent
fire protection system. </p>
  <p><span className="text-[#002202] text-l font-semibold">Safety Isolation:</span> We incorporate battery-integrated system partition safety
isolation, ensuring robust protection.</p>
  <p><span className="text-[#002202] text-l font-semibold">Active Fire Protection:</span>The system is equipped with full-time immersion
capabilities for active fire prevention.</p>


  <h1 className="text-[#002202] text-l font-bold">
  • Energy Management & Coordinated Control Technology
  </h1>
  <p><span className="text-[#002202] text-l font-semibold">Comprehensive Data Handling:</span>Our system is adept at data acquisition,
computation, event management, and processing. </p>
  <p><span className="text-[#002202] text-l font-semibold">Effective System Control:</span> We ensure efficient control of the entire system,
coupled with real-time monitoring for seamless energy management.</p>
</section>


      <section className="products-bg">
        <div className="container mx-auto py-20" >
        <h2 className="text-[20px] md:text-[30px] text-center font-medium  mb-4 text-green">
          Related Products
          </h2>
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

