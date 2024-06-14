"use client";
import Image from "next/image";
import Link from "next/link";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import VerifiedIcon from '@mui/icons-material/Verified';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import Slider from "react-slick";
import {Input} from "@nextui-org/input";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

export default function Home() {

  
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    arrows: false,
    dots: true,

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
  const verticalSlider = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "30px",
    vertical: true,
    arrows: false,
    dots: false,
  };
   const placements = [
    "outside",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden relative top-0 left-0 w-full">
      {/* banner section */}
      <section className="main-banner w-full h-[690px] overflow-hidden  flex flex-col justify-end  ">
        <div className=" container mx-auto my-auto z-10 flex">
          <div className="flex gap-10 flex-col w-1/2 justify-center">
            <h1 className="text-7xl text-white font-bold">
              Home EcoEarner <br /> Power System
            </h1>
            <span className="text-[23px] text-white ">
              Ready to get your electricity costs under control <br /> and give
              your self the chance to transform your <br /> costs into income?
            </span>
            <Slider {...verticalSlider}>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  Energy Storage System
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  HF-H Series Inverter
                </h3>
              </div>
              <div className="carousel-item">
                <h3 className="text-3xl font-bold text-white">
                  SR-182 Series Solar Panels
                </h3>
              </div>
            </Slider>

            <button className="bg-[#FFB800] w-[145px] h-[44px] p-2 rounded-[50px]  buy-now-btn text-center font-bold">
              Sign Up
            </button>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="w-3/4  flex justify-end">
              <Slider {...settings} className="w-3/4  image-slider">
                <div className="carousel-item mx-auto overflow-hidden">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery1.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item flex justify-end items-center">
                  <div className="text-center flex justify-center items-center my-auto">
                    <Image
                      width={384}
                      height={100}
                      src="assets/images/battery2.svg"
                      alt="product image"
                      className="my-auto flex justify-center items-center"
                      unoptimized
                    ></Image>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="text-center flex justify-end items-center">
                    <Image
                      width={384}
                      height={100}
                      src="/assets/images/solar-panel.svg"
                      alt="product image"
                      unoptimized
                    ></Image>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}

      <section className="w-full py-10">
        <div className="container mx-auto">
          <h1 className="font-bold text-[50px] text-center text-green mt-5 mb-10">
            Our Products
          </h1>
        </div>
        <div className="grid container mx-auto grid-cols-3 gap-10 p-10 ">
          <div className=" p-5 w-[440px] py-10 flex justify-center items-center flex-col  product-div ">
            <Image
              // src={`${product.}`}
              src="/assets/images/battery1-ws.svg"
              width={100}
              height={100}
              alt="productimg"
              className="w-[255px] h-[250px] mx-auto "
            ></Image>
            <h2 className="text-[22px] text-[#385723] font-semibold text-center mt-10">
              Battery Energy Storage System{" "}
            </h2>
            <Link
              href="/products"
              className="text-base text-center mx-auto text-[#028921]"
            >
              View More
            </Link>
          </div>

          <div className="p-5 w-[440px] py-10 flex justify-center items-center flex-col product-div">
            <Image
              src="/assets/images/battery2-ws.svg"
              width={100}
              height={100}
              alt="productimg"
              className="w-[255px] h-[250px] mx-auto"
            ></Image>
            <h2 className="text-[22px] text-[#385723] font-semibold text-center mt-10">
              HF-H Series Inverter{" "}
            </h2>
            <Link href="/products" className="text-lg text-[#028921]">
              View More{" "}
            </Link>
          </div>
          <div className=" p-5 w-[440px] py-10 flex justify-center items-center flex-col product-div ">
            <Image
              src="/assets/images/battery3-ws.svg"
              width={100}
              height={100}
              alt="productimg"
              className="w-[255px] h-[250px] mx-auto"
            ></Image>
            <h2 className="text-[22px] text-[#385723] font-semibold text-center mt-10">
              SR-182 Series Solar Panels{" "}
            </h2>
            <Link
              href="/products"
              className="text-lg text-center text-[#028921]"
            >
              View More{" "}
            </Link>
          </div>
        </div>
      </section>

      {/* Sign up Form  */}
      <section className="w-full py-10 join-signup-form">
        <div className="container mx-auto">
          <h1 className="font-bold text-[50px] text-center text-[#fff] mt-5 mb-10">
            Sign Up Today
          </h1>
        </div>
        <div className="mx-auto container">
          <form action="" className="flex flex-col w-1/2 mx-auto">
            <div className="flex flex-col">
              <label htmlFor="Name" className="text-lg text-white my-2">
                Full Name
              </label>
              <input
                type="text"
                name=""
                id="Name"
                placeholder="Enter your Full Name"
                className="text-green placeholder:text-white bg-transparent signup-form-input"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg text-white my-2">
                Email Address
              </label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="Enter your Email Address"
                className="text-green placeholder:text-white bg-transparent signup-form-input"
              />
            </div>
            <button
              type="submit"
              className="sign-up-btn my-5 text-xl text-white hover:font-semibold"
            >
              Join Now
            </button>
            <h6 className="text-sm text-center text-white">
              Privacy Policy: We promise to keep your email address safe
            </h6>
          </form>
        </div>
      </section>

      {/* Steps Section  */}
      <section className="w-full steps-section relative ">
        <div className="container mx-auto ">
          <div className="steps-inner-div absolute top-4 p-10 py-20 flex justify-center flex-col">
            <h1 className="text-5xl text-green font-semibold text-center my-1">
              For our Home EcoEarner Power System today <br /> and experience
              the future of renewable energy.{" "}
            </h1>
            <p className="text-center text-[18px] font-medium py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              <br />
              industry. Lorem Ipsum has been the industry's standard
            </p>
            <div className="w-full grid grid-cols-2 p-10 gap-10">
              <div className="flex flex-col gap-3 bg-white p-5">
                <h1 className="text-lg font-bold">Step-1</h1>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  Get your electricity costs under control
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  No up-front cost
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  No more electricity bills
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  No more electricity price hikes
                </span>
              </div>
              <div className="flex flex-col gap-3 bg-white p-5">
                <h1 className="text-lg font-bold">Step-2</h1>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  Line yourself up for cost-free access to our new technologies
                  as they come to market
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  We promise to install our Home EcoEarner Power Booster upon
                  release.
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  You pay nothing upfront.
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  We buy excess electricity from you, putting money back into
                  your pocket.
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  Say goodbye to out-of-pocket expenses.
                </span>
                <span>
                  <CheckCircleOutlineIcon className="mr-2 text-[#385723]" />
                  And when possible, we pay you instead of the other way around.
                </span>
              </div>
            </div>
            <button className="p-3 px-6 bg-[#028921] rounded-3xl mx-auto text-white">
              Join Our Priority List Today
            </button>
          </div>
        </div>
      </section>

      {/* packges  */}
      <section className="w-full py-10 mt-[400px] mb-10">
        <div className="container mx-auto">
          <h1 className="font-bold text-[50px] text-center text-green mt-5 mb-10">
            Customer Packages
          </h1>
        </div>
        <div className="w-full grid grid-cols-3 px-20 container mx-auto packages-div justify-center">
          <div className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-4 w-[85%]">
            <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
              BRONZE - <span className="text-[22px]">Power</span>
            </h1>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              2.7kW PV solar panels + inverter + controller
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              10.5kW battery
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              No upfront cost
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Free installation
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              System pays for itself
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Net cash benefit of £59/year
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Lifetime net cash benefit £47,944
            </p>
          </div>
          <div className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-4 w-[85%]">
            <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
              SILVER - <span className="text-[22px]">Plus Wind</span>
            </h1>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Everything in Bronze plus
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />1 x Mini wind
              turbines
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Submission for any planning
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Free installation
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              System pays for itself
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Net cash benefit of £1,468/year
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Lifetime net cash benefit £102,662
            </p>
          </div>
          <div className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-4 w-[85%]">
            <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
              GOLD - <span className="text-[22px]">Power Booster</span>
            </h1>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Power Booster - enables you to generate excess electricity
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Free installation
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Our customers get priority and a net cost-free upgrade when it is
              released
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Micro generator system
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Potential to earn a serious regular income
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              System pays for itself
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Net cash benefit £4,869/year
            </p>
            <p>
              <VerifiedIcon className="mr-2 verified-icon" />
              Lifetime net cash benefit £286,425
            </p>
          </div>
        </div>
      </section>

      {/* contact us form  */}
      <section className="w-full py-10 bg-green">
        <div className="container mx-auto">
          <h1 className="font-bold text-[50px] text-center text-white ">
            Contact Us
          </h1>
          <p className="text-white text-center">
            Feel free to contact us any time We will get back to you as soon as
            we can!{" "}
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-2 my-10">
          <div className="px-10">
            <form action="">
              <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="name" className="text-white ">
                  Full Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your full name"
                  className="bg-white p-2  outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="name" className="text-white ">
                  Email Address
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your email address"
                  className="bg-white p-2  outline-none"
                />
              </div>
              <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="name" className="text-white ">
                  Mobile Number
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your mobile no."
                  className="bg-white p-2  outline-none"
                />
              </div>

              <div className="flex flex-col gap-1 mb-3">
                <label htmlFor="name" className="text-white ">
                  Message
                </label>
                <textarea
                  type="text"
                  rows={4}
                  name=""
                  id=""
                  placeholder="Enter Your Message"
                  className="bg-white p-2 outline-none"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-xl font-bold p-2 px-9 rounded-3xl bg-[#FFB800]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="px-10 cotact-div-left-border  ">
            <div className="my-auto bg-white p-10 flex flex-col gap-3 mt-5 rounded-md shadow-xl">
              <h2 className="text-xl font-bold">Info</h2>
              <h2>
                <span>
                  <MailOutlineIcon className="mr-2 text-green" />
                </span>
                info@homeecoearner.com
              </h2>
              <h2>
                <span>
                  <LocalPhoneOutlinedIcon className="mr-2 text-green" />
                </span>
                020 3286 5350
              </h2>
              <h2 className="">
                <span>
                  <PlaceOutlinedIcon className="mr-2 text-green"/>
                </span>
                2 Brunel Place, Slough, SL1 1FQ, UK
              </h2>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}

{
  /* <section className="w-full product-sec-bg">
    <div className="grid md:grid-cols-3 grid-cols-1 w-[90%] xl:w-[70%] mx-auto gap-10 py-10">
      <div className="bg-white grid justify-center  p-5 rounded-3xl">
        <Image src="/assets/images/Product01.jpg" width={300} height={100} alt="product1"></Image>
        <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
          Battery Energy Storage System
        </h3>
      </div>
      <div className="bg-white grid justify-center  p-5 rounded-3xl">
        <Image src="/assets/images/Product02.jpg" width={300} height={100} alt="product1"></Image>
        <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
          HF-H Series Inverter
        </h3>
      </div>
      <div className="bg-white grid justify-center  p-5 rounded-3xl">
        <Image src="/assets/images/Product03.jpg" width={300} height={100} alt="product1"></Image>
        <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
          SR-182 Series Solar Panels
        </h3>
      </div>
    </div>
  </section> */
}

{
  /* join the queue section */
}
{
  /* <section className="joinform-section w-full p-5 ">
    <div className=" w-full h-screen p-0 container mx-auto">
      <h2 className="text-[20px] md:text-[40px] text-green font-semibold text-center mb-5 w-[100%] md:-[50%]">
        Join The Queue Today{" "}
      </h2>
      <div className="  flex flex-col w-[90%] md:w-[60%] xl:w-[50%] mx-auto join-form-innerdiv rounded-2xl">
        <form action="" className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border-green p-3 rounded-xl" />
          <input type="text" placeholder="Email" className="border-green p-3 rounded-xl" />
          <div className="w-full">
            <button className="bg-green w-full text-white p-3 rounded-3xl font-semibold">
              Join Waiting List
            </button>
            <span className="text-dark   text-center text-sm block mt-3
                ">
              Privacy Policy : We promise to keep your data safe.
            </span>
          </div>
        </form>
      </div>
    </div>
  </section> */
}

{
  /* sign up step section */
}
{
  /* <section className="signup-step-section">
    <div className="container mx-auto my-5">
      <h1 className="text-[20px] md:text-[30px] text-green font-semibold text-center mb-5 w-[100%] md:-[50%]">
        Sign up for our Home EcoEarner Power System today and experience the
        future of renewable energy
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="w-[100%] md:w-[60%] flex justify-center ">
          <div className="flex flex-col gap-5 justify-center">
            <div className="flex">
              <Image src="/assets/images/step1.png" width={100} height={100} alt="step1"
                className="w-[70px] h-[70px]"></Image>
              <ul className="text-sm md:text-xl text-dark font-medium flex  flex-col gap-1">
                <li>• Get Your electricity costs under control</li>
                <li>• No up-front cost </li>
                <li>• No electricity bills </li>
                <li>• No more electricity price hikes </li>
              </ul>
            </div>
            <div className="flex">
              <Image src="/assets/images/step2.png" width={100} height={100} alt="step2"
                className="w-[70px] h-[70px]"></Image>
              <ul className="text-sm md:text-xl text-dark font-medium flex  flex-col gap-1">
                <li>
                  • Line yourself up for cost-free access to our new
                  technologies as they come to market
                </li>
                <li>
                  • We promise to install our Home EcoEarner Power Booster
                  upon release.
                </li>
                <li>• You pay nothing upfront. </li>
                <li>
                  • We buy excess electricity from you, putting money back
                  into your pocket.
                </li>
                <li>• Say goodbye to out-of-pocket expenses.</li>
                <li>
                  • And when possible, we pay you instead of the other way
                  around.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[100%] md:w-[40%] flex justify-center my-6">
          <div className="solar-house-div w-[60%] lg:w-[50%]">
            <Image src="/assets/images/solarhouse.jpg" width={100} height={100} alt="solar house"
              className="w-[100%] solar-house-img rounded-2xl h-full " unoptimized></Image>
          </div>
        </div>
      </div>
      <div className="md:m-3 flex flex-col justify-center">
        <h3 className="text-[20px] lg:text-[30px] text-center  text-green font-semibold ">
          Join our priority list today!
        </h3>
        <h3 className="text-[20px] lg:text-[30px] text-center text-green font-semibold mb-5">
          Join us in this exciting journey towards sustainable and
          income-generating energy solutions.
        </h3>
      </div>
    </div>
  </section> */
}

{
  /* customer packages */
}

{
  /* <section className="customer-pack-section py-0 md:py-10">
        <h1 className="text-[30px] md:text-[40px] text-dark font-bold text-center mb-5 w-[100%] md:-[50%]">
          Customer Packages
        </h1>
        <div className=" mx-auto flex flex-col sm:flex-row gap-5 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] pb-5">
          <div className="bg-dark w-[90%] md:w-[80%] rounded-xl mx-auto">
            <h1 className="text-white bg-green my-3 py-4 px-3 text-lg">
              <strong>Basic Package</strong>
              <span className="text-base">- Solar</span>
            </h1>
            <div className="text-white p-5">
              <p> • 2.7kW PV solar panels + inverter + controller</p>
              <p>• No upfront cost</p>
              <p>• Own your own power system</p>
              <p>• No more electricity bills</p>
            </div>
          </div>
          <div className="bg-dark w-[90%] md:w-[80%] rounded-xl mx-auto">
            <h1 className="text-white bg-green my-3 py-4 px-3 text-lg">
              <strong>Premium Package</strong>
              <span className="text-base">
                - Power System - Solar + Battery
              </span>
            </h1>
            <div className="text-white p-5">
              <p> • 2.7kW PV solar panels + inverter + controller</p>
              <p>• No upfront cost</p>
              <p>• Own your own power system</p>
              <p>• No more electricity bills</p>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col sm:flex-row gap-5 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mb-5">
          <div className="bg-dark w-[90%] md:w-[70%] rounded-xl mx-auto">
            <h1 className="text-white bg-green my-3 py-4 px-3 text-lg">
              <strong>Hybrid Package </strong>
              <span className="text-base">- Solar + Battery + Wind</span>
            </h1>
            <div className="text-white p-5">
              <p>• Everything in Premium plus </p>
              <p>• 2x Mini wind turbines</p>
              <p>• Submission for any Planning </p>
              <p>• No upfront cost </p>
            </div>
          </div>
          <div className="bg-dark w-[90%] md:w-[70%] rounded-xl mx-auto">
            <h1 className="text-white bg-green my-3 py-4 px-3 text-lg">
              <strong>Ultimate Package</strong>
              <span className="text-base">
                - Solar + Battery + Wind + Power Booster
              </span>
            </h1>
            <div className="text-white p-5">
              <p>• Everything in Hybrid plus </p>
              <p>
                • Power Booster - enables you to generate excess electricity *
              </p>
              <p>• Gives you priority access to our new technology </p>
              <p>• No up front cost </p>
              <p>• Cost-free upgrade for Basic , Premium and Hybrid Packages</p>
              <p>• Convert a cost cost into an income </p>
              <p>• Potential to earn a meaningful regular income </p>
            </div>
          </div>
        </div>
      </section> */
}

{
  /* contact form section */
}
{
  /* <section className="contact-form-section py-10 md:p-10 mx-auto">
    <div className="container mx-auto flex md:flex-row flex-col md:justify-start justify-center gap-5">
      <div className="w-[90%] md:w-[50%] mx-auto flex flex-col gap-5 justify-center m-auto">
        <h1 className="text-5xl text-green font-semibold">Contact Us</h1>
        <p className="text-dark font-medium">
          Feel free to contact us anytime, we will get back to you as soon
          as we can !
        </p>
        <form action="" className="form-div-contact flex flex-col gap-5 bg-inherit ">
          <div className="flex flex-col">
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" className="my-1" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input type="email" id="Email" className="my-1" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Message">Message</label>
            <input type="text" id="Message" className="my-1" required />
          </div>
          <div>
            <button className="bg-green text-white p-3" type="submit">
              Send a Message
            </button>
          </div>
        </form>
      </div>
      <div className=" w-[100%] md:w-[40%] flex md:justify-start items-center justify-center mt-5 md:mt-0 mx-auto">
        <div className=" bg-dark text-[#b3ebc7] flex flex-col ml-0 gap-5 py-10 px-5  rounded-3xl ml">
          <h1 className="text-3xl text-white font-semibold mb-3">Info</h1>
          <div className="flex flex-col gap-5 justify-center ">
            <span className="text-xl text-white">
              <EmailOutlinedIcon className="text-2xl mr-2 text-[#b3ebc7] font-light" /> info@homecoearner.com
            </span>
            <span className="text-xl text-white">
              < PhoneInTalkOutlinedIcon className="text-2xl mr-2  text-[#b3ebc7]" />
              +020 3286 5350
            </span>

            <span className="text-xl text-white">
              <LocationOnOutlinedIcon className="text-2xl mr-2  text-[#b3ebc7] bg-none" /> 2 Brunel Place,
              Slough, SL1 1FQ, UK
            </span>
          </div>
        </div>
      </div>
    </div>
  </section> */
}
