"use client";
import React from "react";
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
      <section className="relative bg-green min-h-[396px] flex justify-center ">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            About Us
          </h1>
          <h2 className="w-5/6 md:w-1/2 text-base text-center font-semibold text-white mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </h2>
        </div>
      </section>

      {/* ecologicalway */}
      <section className=" bg-[#f5f5f5] py-10 md:py-20">
        <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-center items-center">
        <div className="w-3/4 md:w-1/2 ">
          <Image
            src="/assets/images/Group 951.svg"
            alt="img"
            width={1}
            height={1}
            className="w-3/4 mx-auto"
          />
        </div>
        <div className="w-5/6 md:w-[40%] flex flex-col  relative gap-3 mx-auto">
          <h3 className="text-[#385723] text-[22px] font-semibold">
            Ecological Way
          </h3>
          <h1 className="text-[#15A135] text-3xl md:text-[50px] font-extrabold leading-tight">
            Reshaping Energy for the Future
          </h1>
          <p className="text-[#525C60] text-[19px] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
              <p className="text-[#525C60] text-[19px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
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
              <p className="text-[#525C60] text-[19px] font-medium">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
        </div>
      
      </section>

      {/* whatdowedo */}
      <section className="min-h-[805px]  md:py-[82px] md:px-[120px] flex flex-col gap-[65px]">
        <div className="flex flex-col items-center justify-center text-center  w-full gap-4 pt-10">
          <h1 className="text-[#15A135] text-[50px] font-extrabold leading-tight">
            What Do We Do?
          </h1>
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

        <div className=" w-full flex flex-col md:flex-row justify-center">
          <div className="w-5/6 md:w-1/2 items-center justify-center flex mx-auto">
            <Image
              src="/assets/images/Group 952.svg"
              alt="img"
              width={1}
              height={1}
              className="w-5/6 mx-auto"
            />
          </div>
          <div className="w-full p-5 md:w-1/2  flex flex-col gap-5">
            <h3 className="text-[#385723] text-[25px] font-bold ">
              So they can
            </h3>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Generate their own electricity.
            </h4>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Free themselves from electricity bills.
            </h4>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Free themselves from future electricity price increases.
            </h4>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              Potentially earn a meaningful income from their home electricity
              generation.
            </h4>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              All with no up-front cost.
            </h4>
            <h4 className="text-[#525C60] text-[20px] font-medium">
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              While doing their bit to help the planet get to Net Zero.
            </h4>
          </div>
        </div>
      </section>

      {/* numbers */}
      <section className="min-h-[379px] my-auto flex justify-center bg-[#f5f5f5]">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-auto items-center gap-10 py-10">
          <div className=" my-auto  bg-white p-10 rounded-md mx-auto">
            <h1 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                <Counter start={0} end={68} />{" "}
              </strong>{" "}
            </h1>
            <h2 className="text-[#385723] text-[25px] text-center font-bold">
              Panels installed
            </h2>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" my-auto bg-white  p-10 rounded-md mx-auto">
            <h1 className="text-center text-[#FFB800] text-5xl mb-2">
              <strong> 24*7 </strong>{" "}
            </h1>
            <h2 className="text-[#385723] text-[25px] text-center font-bold">
              Technical Support
            </h2>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" my-auto  bg-white  p-10 rounded-md mx-auto">
            <h1 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                <Counter start={0} end={10} />{" "}
              </strong>{" "}
            </h1>
            <h2 className="text-[#385723] text-[25px] text-center font-bold">
              Years of Experience
            </h2>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className=" my-auto bg-white p-10 rounded-md mx-auto">
            <h1 className="text-center text-[#FFB800] text-5xl mb-2">
              {" "}
              <strong>
                <Counter start={0} end={74} />{" "}
              </strong>{" "}
            </h1>
            <h2 className="text-[#385723] text-[25px] text-center font-bold">
              Five Star Reviews
            </h2>
            <p className="text-black text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </section>

      {/* ourteam */}
      <section className="w-full team-bg-section py-20 flex flex-col gap-9">
        <div className="mb-[111px]">
          <h1 className="text-center text-[50px] font-extrabold text-white">
            Our Team
          </h1>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-32 md:gap-20 ">
          <div className="bg-white w-[90%] md:w-1/2 xl:w-1/3 py-10 pb-20 rounded mx-auto">
            <img
              src="/assets/images/david.svg"
              className="w-[170px] rounded-full -mt-[150px] mx-auto"
              alt=""
            />
            <h3 className="text-[25px] font-bold text-center my-5 text-[#385723]">
              David Sheldon
            </h3>
            <h4 className=" px-10 text-[#525C60] text-[19px] font-medium">
              Co-Founder / Business Development Director - Home EcoEarner Ltd.
              30 years’ experience establishing businesses and arranging asset
              finance in the transport and renewable energy sectors. Accounting,
              Tax, Corporate advisory, Investment Banking, Asset finance /
              Leasing, Renewable energy, Solar, Wind, Nuclear.
            </h4>
          </div>

          <div className="bg-white w-[90%] md:w-1/2 xl:w-1/3 py-10 pb-20 rounded mx-auto">
            <img
              src="/assets/images/rory.svg"
              className="w-[170px] rounded-full -mt-[150px] mx-auto"
              alt=""
            />
            <h3 className="text-[25px] font-bold text-center my-5 text-[#385723]">
              Rory Tait
            </h3>
            <h4 className=" px-10 text-[#525C60] text-[19px] font-medium">
              Co-Founder / Director - Home EcoEarner Ltd, Secretary Association
              for Renewable Energy and Clean Technology (REA), Head of
              Renewables, Prospect Law. Former solicitor, 30 years’ experience
              advising companies active in the energy sector, from developers of
              projects through to network operators on a wide range of clean
              energy technologies.
            </h4>
          </div>
        </div>
      </section>

      
      {/* testimonial */}
      <section className="py-20">
      <div className="container mx-auto py-10">
      <div className="">
          <h3 className="text-[#385723] text-[25px] font-bold text-center">
            Our Testimonials
          </h3>
          <h1 className="text-[#15A135] text-[50px] font-extrabold text-center ">
            Customer Feedback
          </h1>
        </div>
        <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg_test  flex flex-col justify-center gap-4 items-start pt-16 px-10 py-auto">
              <h3 className="text-[#525C60] text-[19px] font-medium">
                I was very impresed by the new company service lorem ipsum is
                simply free text used by copytyping refreshing. Neque porro est
                qui dolor ipsum quia.
              </h3>
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/Ellipse 32.svg"
                  alt="img"
                  width={1}
                  height={1}
                  className="w-[49px] h-[49px]"
                />
                <div className="flex flex-col justify-start ">
                  <h3 className="text-[#525C60] text-[22px] font-bold">
                    Sarah Albert
                  </h3>
                  <p className="text-[#525C60] text-[14px] font-medium">
                    Customer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg_test flex flex-col justify-center gap-4 items-start pt-16 px-10 py-auto">
              <h3 className="text-[#525C60] text-[19px] font-medium">
                I was very impresed by the new company service lorem ipsum is
                simply free text used by copytyping refreshing. Neque porro est
                qui dolor ipsum quia.
              </h3>
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/Ellipse 32.svg"
                  alt="img"
                  width={1}
                  height={1}
                  className="w-[49px] h-[49px]"
                />
                <div className="flex flex-col justify-start ">
                  <h3 className="text-[#525C60] text-[22px] font-bold">
                    Sarah Albert
                  </h3>
                  <p className="text-[#525C60] text-[14px] font-medium">
                    Customer
                  </p>
                </div>
              </div>
            </div>
            <div className="bg_test flex flex-col justify-center gap-4 items-start pt-16 px-10 py-auto">
              <h3 className="text-[#525C60] text-[19px] font-medium">
                I was very impresed by the new company service lorem ipsum is
                simply free text used by copytyping refreshing. Neque porro est
                qui dolor ipsum quia.
              </h3>
              <div className="flex gap-3 items-center">
                <Image
                  src="/assets/images/Ellipse 32.svg"
                  alt="img"
                  width={1}
                  height={1}
                  className="w-[49px] h-[49px]"
                />
                <div className="flex flex-col justify-start ">
                  <h3 className="text-[#525C60] text-[22px] font-bold">
                    Sarah Albert
                  </h3>
                  <p className="text-[#525C60] text-[14px] font-medium">
                    Customer
                  </p>
                </div>
              </div>
            </div>




          </div>
      </div>
        
      </section>

      <TalkAdvisor />
    </>
  );
};

export default page;
