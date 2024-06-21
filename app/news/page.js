import React from "react";
import TalkAdvisor from "../component/TalkAdvisor";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
    {/* banner  */}
    <section className="relative bg-green min-h-[396px] flex justify-center ">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            News
          </h1>
          <h2 className="w-5/6 md:w-1/2 text-base  text-center font-semibold text-white mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </h2>
        </div>
      </section>


      {/* news-card  section  */}
      <section className="min-h-[721px] w-full bg-[#F5F5F5] flex flex-col  justify-center py-10">
        <div className="container mx-auto grid grid-flow-row md:grid-flow-col justify-center md:justify-start gap-7">
          <div className="h-[438px]  bg-white flex flex-col group rounded hover:shadow-2xl transition-all ease-in-out duration-300 md:ms-0 mx-auto">
            <div className="h-1/2 overflow-hidden transition-all ease-in-out duration-300">
              <Image
                width={1}
                height={1}
                src="assets/images/Group 887.svg"
                alt="product image"
                className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-110 transition-all ease-in-out duration-300"
                
              />
            </div>
            <div className="h-1/2 w-[400px] relative p-4 ">
              <p className="text-[#525C60] text-[15px] ">Dec 30, 2023</p>
              <article className="text-[#385723] text-[23px] font-bold leading-tight">
                Unleash the Power of Your Home: Turn Sunshine into Cash with
                Solar and Battery Systems!
              </article>
              <div className="w-full h-auto absolute bottom-3">
                <Link href={`/news/1`} className="text-lg text-[#028921]">
                  <button className="overflow-hidden py-1 w-fit rounded-[50px] gr_oup priority-btn">
                    <span className="text-[#15A135]   z-10 text-[20px] my-auto">
                      View More
                    </span>
                    <span className="text-[#15A135]  icon  top-1/2 transform -translate-y-1/2 left-full opacity-0 gr_oup-hover:opacity-100 transition-all duration-300 ">
                      <ArrowForwardOutlinedIcon className="ml-2 text-[15A135] " />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="h-[438px]  bg-white flex flex-col group rounded hover:shadow-2xl transition-all ease-in-out duration-300 md:ms-0 mx-auto">
            <div className="h-1/2 overflow-hidden transition-all ease-in-out duration-300">
              <Image
                width={1}
                height={1}
                src="assets/images/Group 887 (1).svg"
                alt="product image"
                className="w-full h-full bg-no-repeat bg-center bg-cover group-hover:scale-110 transition-all ease-in-out duration-300"
                
              />
            </div>
            <div className="h-1/2 w-[400px] relative p-4 ">
              <p className="text-[#525C60] text-[15px] ">Jan 13, 2024</p>
              <article className="text-[#385723] text-[23px] font-bold leading-tight">
                Energy Freedom At Your Fingertips!
              </article>
              <div className="w-full h-auto absolute bottom-3">
                <Link href={`/news/2`} className="text-lg text-[#028921]">
                  <button className="overflow-hidden py-1 w-fit rounded-[50px] gr_oup priority-btn">
                    <span className="text-[#15A135]   z-10 text-[20px] my-auto">
                      View More
                    </span>
                    <span className="text-[#15A135]  icon  top-1/2 transform -translate-y-1/2 left-full opacity-0 gr_oup-hover:opacity-100 transition-all duration-300 ">
                      <ArrowForwardOutlinedIcon className="ml-2 text-[15A135] " />
                    </span>
                  </button>
                </Link>
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
