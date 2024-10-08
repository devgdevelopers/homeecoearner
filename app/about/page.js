"use client";
import React from "react";
import Breadcrumb from "../component/BreadCrumb";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TeamData } from "/public/data";
import Counter from "../component/counter";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import TalkAdvisor from "../component/TalkAdvisor";




const page = () => {
  return (
    <>
      {/* banner */}
      <section className="relative product-page-bg bg-green min-h-[396px] flex justify-center ">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            About Us
          </h1>
          <h2 className="w-5/6 md:w-1/2 text-base text-center font-semibold text-white mx-auto">
            Learn more About Us, our mission, and our commitment to providing
            innovative renewable energy solutions that empower your home and
            contribute to a sustainable future.
          </h2>
        </div>
      </section>
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* ecologicalway */}
      <section className=" bg-[#f5f5f5] py-10 md:py-20">
        <div className="container mx-auto flex flex-col lg:flex-row gap-5 justify-center items-center">
          <div className="w-3/4 lg:w-1/2 ">
            <Image
              src="/assets/images/about-us.png"
              alt="img"
              width={100}
              height={100}
              className="w-3/4 mx-auto"
              unoptimized
            />
          </div>
          <div className="w-5/6 lg:w-[40%] flex flex-col  relative gap-3 mx-auto">
            <h3 className="text-[#385723] text-[22px] font-semibold">
              Ecological Way
            </h3>
            <h2 className="text-[#15A135] text-3xl md:text-[50px] font-extrabold leading-tight">
              Reshaping Energy for the Future
            </h2>
            <p className="text-[#525C60]  font-medium">
              Our Ecological Way is dedicated to reshaping energy for the future
              through sustainable practices and innovative technologies. Join us
              in creating a greener, more sustainable world.
            </p>
            <div className="flex justify-center  mx-auto gap-5 md:mt-10">
              <div className="w-1/2  flex flex-col">
                <Image
                  src="/assets/images/Group 795.svg"
                  alt="img"
                  width={1}
                  height={1}
                  className="w-[71.7px] h-[75.01px]"
                />
                <h3 className="text-[#385723] text-base md:text-[22px] font-bold">
                  Reduce Your Daily Energy Use
                </h3>
                <p className="text-[#525C60]  font-medium">
                  Cut down on your energy consumption with our advanced
                  solutions designed to optimise efficiency and reduce costs.
                </p>
              </div>
              <div className="w-1/2  flex flex-col">
                <Image
                  src="/assets/images/Group 793.svg"
                  alt="img"
                  width={1}
                  height={1}
                  className="w-[58px] h-[67px]"
                />
                <h3 className="text-[#385723] text-base md:text-[22px] font-bold">
                  The Most Used Energy Systems
                </h3>
                <p className="text-[#525C60]  font-medium">
                  Explore the top energy systems utilised worldwide, known for
                  their reliability, efficiency, and sustainable benefits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* whatdowedo */}
      <section className="min-h-[805px]  md:py-[82px] md:px-[120px] flex flex-col gap-[65px]">
        <div className="flex flex-col items-center justify-center text-center  w-full gap-4 pt-10">
          <h2 className="text-[#15A135] text-[30px] md:text-[50px] font-extrabold leading-tight">
            What Do We Do?
          </h2>
          <h3 className="text-[#385723] text-[25px] font-bold ">We serve to</h3>
          <div className="grid grid-flow-row md:grid-flow-col gap-2">
            <span className="text-white bg-[#15A135] py-2 rounded px-4">
              Homeowners
            </span>
            <span className="text-white bg-[#15A135] py-2 rounded px-4">
              Tenants
            </span>
            <span className="text-white bg-[#15A135] py-2 rounded px-4">
              Social housing associations
            </span>
            <span className="text-white bg-[#15A135] py-2 rounded px-4">
              Landlords
            </span>
            <span className="text-white bg-[#15A135] py-2 rounded px-4">
              Councils
            </span>
          </div>
        </div>

        <div className=" w-full flex flex-col lg:flex-row justify-center">
          <div className="w-5/6 lg:w-1/2 items-center justify-center flex mx-auto">
            <Image
              src="/assets/images/Group 952.svg"
              alt="img"
              width={1}
              height={1}
              className="w-5/6 mx-auto"
            />
          </div>
          <div className="w-full p-5 lg:w-1/2  flex flex-col gap-5">
            <h3 className="text-[#385723] text-[25px] font-bold ">
              So they can
            </h3>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Generate their own electricity.
            </p>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Free themselves from electricity bills.
            </p>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Free themselves from future electricity price increases.
            </p>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Potentially earn a meaningful income from their home electricity
              generation.
            </p>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              All with no up-front cost.
            </p>
            <p className="text-[#525C60]  font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              While doing their bit to help the planet get to Net Zero.
            </p>
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="min-h-[379px] my-auto flex justify-center bg-[#f5f5f5] px-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
          <div className=" my-auto  bg-white p-10 rounded-md mx-auto">
            <h2 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                550W
              </strong>{" "}
            </h2>
            <h2 className="text-[#385723] text-[20px] lg:text-[25px] text-center font-bold leading-7 my-5">
               Panels installed
            </h2>
            <p className="text-black text-center">
              Over 15+ panels installed to power your sustainable future
              efficiently.
            </p>
          </div>
          <div className=" my-auto bg-white  p-10 rounded-md mx-auto">
            <h2 className="text-center text-[#FFB800] text-5xl mb-2">
              <strong> 24*7 </strong>{" "}
            </h2>
            <h2 className="text-[#385723] text-[25px] text-center font-bold leading-7 my-5">
              Technical Support
            </h2>
            <p className="text-black text-center">
              Reliable assistance anytime, ensuring seamless operations and
              peace of mind.
            </p>
          </div>
          <div className=" my-auto  bg-white  p-10 rounded-md mx-auto">
            <h2 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                <Counter start={0} end={50} />{" "}
              </strong>{" "}
            </h2>
            <h2 className="text-[#385723] text-[25px] text-center font-bold leading-7 my-5">
             Years of team experience
            </h2>
            <p className="text-black text-center">
              Benefit from our extensive expertise in delivering reliable
              solutions.
            </p>
          </div>
          <div className=" my-auto bg-white p-10 rounded-md mx-auto">
            <h2 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                <Counter start={0} end={23} />{" "}
              </strong>{" "}
            </h2>
            <h2 className="text-[#385723] text-[25px] text-center font-bold leading-7 my-5">
              Five Star Reviews
            </h2>
            <p className="text-black text-center">
              Our customers rate us highly for exceptional service and quality,
              reflecting our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

    

    

      <TalkAdvisor />
    </>
  );
};

export default page;
