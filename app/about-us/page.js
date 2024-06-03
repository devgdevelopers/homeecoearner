"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
            About Us
          </h2>
          <p className=" mx-auto text-center text-lg text-dark font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </p>
        </div>
      </section>

      <section className="py-10 bg-[#e8ffed]">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex justify-start flex-col items-start gap-2">
            <h2 className="text-xl bg-green text-white inline p-2 font-semibold">
              About Company{" "}
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur rerum eveniet autem, repellendus neque similique est,
              ullam a magni vel molestias officia repellat voluptatem suscipit
              harum. Deleniti ipsa sapiente ut architecto sequi reprehenderit,
              cum, explicabo, dolorum libero excepturi voluptatibus aliquam
              recusandae quas adipisci doloremque suscipit laudantium rem
              inventore blanditiis maxime tempore veniam cumque. Natus dicta
              deleniti, ex repellat illo, tempora reiciendis quis incidunt quae
              enim animi. Debitis obcaecati tempora unde? Neque amet saepe,
              nulla quos fuga at id! A nemo fugit in, labore optio deleniti
              magni sint necessitatibus quisquam repellendus ipsum eaque, omnis
              minima reprehenderit unde nam! Quae, accusantium? Voluptatem ullam
              est tempora laudantium vero iusto natus perspiciatis voluptate
              officia eaque possimus aperiam, delectus expedita recusandae
              blanditiis, provident consectetur nesciunt. Cum, itaque nihil!
            </p>
          </div>
          <div>
            <div className="w-[400px] h-96 bg-green rounded-t-full mx-auto"></div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-[#e8ffed]">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex justify-start flex-col items-start gap-2">
            <h2 className="text-xl bg-green text-white inline p-2 font-semibold">
              Our Mission{" "}
            </h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur rerum eveniet autem, repellendus neque similique est,
              ullam a magni vel molestias officia repellat voluptatem suscipit
              harum. Deleniti ipsa sapiente ut architecto sequi reprehenderit,
              cum, explicabo, dolorum libero excepturi voluptatibus aliquam
              recusandae quas adipisci doloremque suscipit laudantium rem
              inventore blanditiis maxime tempore veniam cumque. Natus dicta
              deleniti, ex repellat illo, tempora reiciendis quis incidunt quae
              enim animi. Debitis obcaecati tempora unde? Neque amet saepe,
              nulla quos fuga at id! A nemo fugit in, labore optio deleniti
              magni sint necessitatibus quisquam repellendus ipsum eaque, omnis
              minima reprehenderit unde nam! Quae, accusantium? Voluptatem ullam
              est tempora laudantium vero iusto natus perspiciatis voluptate
              officia eaque possimus aperiam, delectus expedita recusandae
              blanditiis, provident consectetur nesciunt. Cum, itaque nihil!
            </p>
          </div>
          <div>
            <div className="w-[400px] h-96 bg-green rounded-b-full mx-auto"></div>
          </div>
        </div>
      </section>

      <section className="md:h-[50vh] bg-green my-auto flex justify-center">
        <div className="container mx-auto grid grid-cols-4 justify-center my-auto items-center">

          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>20+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">
              Years of experience
            </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>35+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">Award Win </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>1750+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center block">
              Happy Customers
            </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>120+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">Our Expert Staffs</p>
          </div>

        </div>
      </section>


      {/* meet our leaders */}

      <section className="py-10">
        <div className="container mx-auto">
          <h1 className="md:text-3xl font-semibold text-center">Meet Our leaders</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio reiciendis, ipsum quaerat doloribus minima laudantium molestias, accusamus corporis dolores aspernatur. Natus itaque ut labore!</p>
          <div className="container mx-auto py-20">
          <style>
            {`
              .slick-prev:before,
              .slick-next:before {
                color: black !important;
                font-size:25px;
              }
            `}
          </style>
          <Slider {...settings}>
            <div className="carousel-item mx-auto">
              <div className="text-center p-5 flex flex-col justify-center">
               <Image src="/assets/images/rory.png" width={200} height={200}></Image> 
               <h1>Rory Tait</h1>
               <p>Co-Founder / Director</p>
              </div>
            </div>
            <div className="carousel-item">
            <div className="text-center p-5 flex justify-center">
               <Image src="/assets/images/rory.png" width={200} height={200}></Image> 
               <h1>Rory Tait</h1>
               <p>Co-Founder / Director</p>
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

        </div>
      </section>
     
    </>
  );
};

export default page;
