import Link from "next/link";
import React from "react";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
const TalkAdvisor = () => {
  return (
    <>
      <section className="bg-[#00a241] py-20 talk-advisor-bg shadow-inner min-h-[310px]">
        <div className="container mx-auto flex justify-center items-center flex-col gap-5 ">
          <h2 className=" text-white  text-2xl lg:text-5xl font-bold">
            Talk with an advisor
          </h2>
          <h2 className="text-[18px] text-white ">
            Feel free to contact us any time We will get back to you as soon as
            we can!
          </h2>
          <Link
            href="/contact-us"
            className="relative overflow-hidden py-2 px-6 bg-white  text-green group min-w-[155px]  rounded-[50px]  text-center font-bold priority-btn"
          >
             <span className="text relative z-10 text-[20px] my-auto">
                Contact Us
              </span>
              <span className="icon absolute top-1/2 transform -translate-y-1/2 left-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                <ArrowForwardOutlinedIcon className="ml-2" />
              </span>
          </Link>
        
        </div>
      </section>
    </>
  );
};

export default TalkAdvisor;
