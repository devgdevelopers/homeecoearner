import React from "react";
import Image from "next/image";

import SignupNewsletter from '../component/TalkAdvisor'



const page = () => {
  return (
    <>
      <section className="md:mt-0 services-bg-images  min-h-[50vh]  my-auto">
        <div className="container mx-auto flex flex-col my-auto justify-center items-center ">
          <h2 className="text-[20px] md:text-5xl text-green font-bold">
            Services
          </h2>
          <p className=" mx-auto my-auto font-medium text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Exercitationem deleniti cumque
            harum reiciendis illo, fuga itaque, enim, rem perspiciatis aperiam
            sit voluptatum quis a magni.
          </p>
        </div>
      </section>
      <section className="bg-[#15a13538] py-20 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-5">
          <div data-aos="fade-in" className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/design.png"
              width={70}
              height={10}
              className="p-2 rounded-md"
            ></Image>
            <h1 className="text-3xl font-bold">Design</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/supply.png"
              width={70}
              height={100}
              className="bg-white p-1 rounded-md"
            ></Image>
            <h1 className="text-3xl font-bold text-white">Supply</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/installation.png"
              width={70}
              height={100}
              className="bg-white p-1 rounded-md"
            ></Image>
            <h1 className="text-3xl font-bold text-white">Install</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/monitor.png"
              width={70}
              height={100}
              className="bg-white p-1 rounded-md"
            ></Image>
            <h1 className="text-3xl font-bold text-white">Monitor</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/tools.png"
              className="bg-white p-1 rounded-md"
              width={70}
              height={100}
            ></Image>
            <h1 className="text-3xl font-bold text-white">Maintain</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
          <div className="flex flex-col  justify-center items-center gap-2 p-0 md:p-5 services-p-div">
            <Image
              src="/assets/images/team.png"
              className="bg-white p-1 rounded-md"
              width={70}
              height={100}
            ></Image>
            <h1 className="text-3xl font-bold text-white">Manage</h1>
            <p className="w-3/4 text-center text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusamus, nisi reprehenderit! Deserunt, ad. Illum labore earum
              quaerat rerum perferendis dolorem?
            </p>
          </div>
        </div>
      </section>

      <section className="contact-banner-section py-10">
        <ul className="container mx-auto flex flex-col gap-3 font-semibold  text-base md:text-xl px-5 text-justify text-white md:text-black">
          <li>
            • We work with experienced designers to design our Home EcoEarner
            Power System to suit your home’s characteristics.
          </li>
          <li>
            • We then supply our Home EcoEarner Power System at no upfront cost
            to you.
          </li>
          <li>
            • We then send our team of experienced installers to install our
            Home EcoEarner Power System in your home at no cost to you.
          </li>
          <li>
            • We manage the grid connection issues for you, so you don’t have to
            deal with that.
          </li>
          <li>
            • We then provide the monitoring system to manage and optimize the
            power from your Home EcoEarner Power System at no cost to you.
          </li>
          <li>
            • We send out our experienced maintenance teams each year to
            maintain your Home EcoEarner Power System at no cost to you.
          </li>
          <li>
            • We provide and manage the power generation and usage in your Home
            EcoEarner Power System at no cost to you.
          </li>
        </ul>
      </section>

     
      <SignupNewsletter />
    </>
  );
};

export default page;
