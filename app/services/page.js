import React from "react";
import Image from "next/image";

import SignupNewsletter from "../component/TalkAdvisor";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const page = () => {
  return (
    <>
      <section className="relative w-full services-bg-images bg-green min-h-[396px] flex justify-center ">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            Services
          </h1>
          <h2 className="w-3/4 md:w-1/2 text-base text-center font-semibold text-white mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </h2>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto">
          <h1 className="text-[25px] md:text-[50px] text-green font-extrabold text-center my-2 md:my-8">
            Design, Supply and Install
          </h1>
          <div className="grid gap-0 justify-center grid-flow-col">
            <Image
              src="/assets/images/g-1.svg"
              width={200}
              height={100}
              alt="services-grid-1"
              className="w-[400px]"
            ></Image>
            <Image
              src="/assets/images/g-2.svg"
              width={200}
              height={100}
              alt="services-grid-2"
              className="w-[400px]"
            ></Image>
            <Image
              src="/assets/images/g-3.svg"
              width={200}
              height={100}
              alt="services-grid-3"
              className="w-[400px]"
            ></Image>
          </div>
          <div className="mx-auto w-5/6 flex justify-center flex-col gap-3 md:px-10 pt-6">
            <p className="">
             
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We work with experienced designers to design our Home EcoEarner
              Power System to suit your home’s characteristics.
            </p>
            <p>
      
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We then supply our Home EcoEarner Power System at no upfront cost
              to you.
            </p>
            <p>
             
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We then send our team of experienced installers to install our
              Home EcoEarner Power System in your home at no cost to you.
            </p>
            <p>
              
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We manage the grid connection issues for you, so you don’t have to
              deal with that.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto">
          <h1 className="text-[25px] md:text-[50px] text-green font-extrabold text-center my-2 md:my-8">
            Monitor, Maintain and Manage
          </h1>
          <div className="grid gap-0 justify-center grid-flow-col">
            <Image
              src="/assets/images/grid-4.svg"
              width={200}
              height={100}
              alt="services-grid-1"
              className="w-[400px]"
            ></Image>
            <Image
              src="/assets/images/grid-5.svg"
              width={200}
              height={100}
              alt="services-grid-2"
              className="w-[400px]"
            ></Image>
            <Image
              src="/assets/images/grid-6.svg"
              width={200}
              height={100}
              alt="services-grid-3"
              className="w-[400px]"
            ></Image>
          </div>
          <div className="mx-auto w-5/6 flex justify-center flex-col gap-3 md:px-10 py-6">
            <p className="">
              {" "}
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We then provide the monitoring system to manage and optimize the
              power from your Home EcoEarner Power System at no cost to you.
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We send out our experienced maintenance teams each year to
              maintain your Home EcoEarner Power System at no cost to you.{" "}
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We then send our team of experienced installers to install our
              Home EcoEarner Power System in your home at no cost to you.{" "}
            </p>
            <p>
              {" "}
              <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
              We provide and manage the power generation and usage in your Home
              EcoEarner Power System at no cost to you.{" "}
            </p>
          </div>
        </div>
      </section>
      <SignupNewsletter />
    </>
  );
};

export default page;
