"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamData } from "/public/data";

const page = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "",

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
        
    arrows: false,
      },
    ],
  };
  return (
    <>
      <section className="mt-7 md:mt-0 services-bg-images min-h-[50vh] bg-[#0a890d] my-auto text-white">
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

      <section className="py-10 bg-[#e8ffed] p-5">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
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
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2">
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
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center my-auto items-center gap-3">
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md mx-auto">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>20+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">
              Years of experience
            </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md mx-auto">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>35+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">Award Win </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md mx-auto">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>1750+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center block">
              Happy Customers
            </p>
          </div>
          <div className="w-[250px] my-auto border-white border-2 border-solid p-10 rounded-md mx-auto">
            <h1 className="text-center text-white text-5xl mb-2">
              {" "}
              <strong>120+ </strong>{" "}
            </h1>
            <p className="text-white text-5xl text-center">Our Expert Staffs</p>
          </div>
        </div>
      </section>

      {/* meet our leaders */}

      <section className="py-10 services-light-bg">
        <div className="container mx-auto">
          <div
            className="bg-white mx-auto flex justify-center align-middle items-center w-96
        mb-3"
          >
            <h1 className="md:text-4xl font-semibold  text-green p-2">
              Meet Our leaders
            </h1>
          </div>
          <p className="w-3/4 text-center mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
            reiciendis, ipsum quaerat doloribus minima laudantium molestias,
            accusamus corporis dolores aspernatur. Natus itaque ut labore!
          </p>
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
            <Slider {...settings} className="mx-auto">
              {TeamData.map((item, id) => {
                return (
                  <div className="carousel-item mx-auto rounded-2xl p-5" key={id}>
                    <div className="flip-card rounded-2xl mx-auto">
                      <div className="flip-card-inner rounded-2xl bg-white">
                        <div className={`flip-card-front rounded-2xl bg-white w-[80%]`}>
                          <Image
                            src={item.TeamPhotoSrc}
                            className="mx-auto w-[300px] h-[200px] rounded-t-2xl"
                            width={100}
                            height={200}
                            unoptimized
                          ></Image>
                        <div className="px-3 flex flex-col mx-auto my-auto">
                        <h1 className="text-3xl text-green font-bold">
                            {item.TeamName}
                          </h1>
                          <h2 className="text-sm text-black text-wrap teamdesignation">  
                            {item.TeamDesignation}
                          </h2>
                        </div>
                        </div>
                        <div className="flip-card-back rounded-xl p-5 bg-white">
                          <p className=" mb-5 text-justify text-black z-10 team-desc">
                            {item.TeamDesc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>

<section className="what-we-do">
<div className="mx-auto container">
 <div className="do-inner flex flex-col md:flex-row">
<div className="do-left w-full lg:w-1/2">
<h2>What Do We Do?</h2>
<h4>We Serve:</h4>
<ul>
  <li>• Homeowners</li>
  <li>• Tenants</li>
  <li>• Social housing associations</li>
  <li>• Landlords</li>
  <li>• Councils</li>
</ul>
</div>
<div className="do-right w-full lg:w-1/2">
  <div className="do-green mx-auto">

  </div>
</div>
 </div>
</div>
</section>


{/* so they can start */}

<section className="what-we-do so-they-can p-5">
<div className="mx-auto container ">
 <div className="do-inner flex flex-col md:flex-row">
<div className="do-left w-full lg:w-1/2 p-5">
<h4>So they can:</h4>
<ol>
  <li>1.Generate their own electricity.</li>
  <li>2. Free themselves from electricity bills.</li>
  <li>3. Free themselves from future electricity
price increases.</li>
  <li>4. Potentially earn a meaningful income
from their home electricity generation.</li>
  <li>5. All with no up-front cost.</li>
  <li>6. While doing their bit to help the planet
get to Net Zero.</li>
</ol>
</div>
<div className="do-right mx-auto w-full lg:w-1/2 p-5 ">
  <div className="do-green mx-auto ">

  </div>
</div>
 </div>
</div>
</section>

    </>
  );
};

export default page;
