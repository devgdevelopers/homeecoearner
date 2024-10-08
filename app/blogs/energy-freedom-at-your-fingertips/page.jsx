import Image from "next/image";
import React from "react";
import BreadCrumb from "../../component/BreadCrumb";

const page = () => {
  return (
     
    <>
     {/* Breadcrumb */}
     <BreadCrumb />

      <section className=" w-full  flex ">
        <div className="container mx-auto flex flex-col lg:flex-row px-10 lg:px-10 py-10">
          <div className="w-full lg:w-1/2 gap-7 flex flex-col  justify-center p-3">
            <h1 className="text-xl md:text-[42px] font-extrabold text-[#15A135] leading-tight ">
              Energy Freedom at Your Fingertips!
            </h1>
            <p className="text-[18px] font-medium text-[#525C60]">
              Are you tired of high energy bills?
              <br />
              Looking for a solution that benefits both your wallet and the
              environment?
              <br />
              Why not convert your electricity from a cost into an income?
              <br />
              Look no further!
            </p>
          </div>
          <div className="w-full lg:w-1/2 ">
            <Image
              width={1}
              height={1}
              src="/assets/images/blog2-img.svg"
              alt="product image"
              className="w-full h-full bg-no-repeat bg-center bg-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-3  mb-5">
          <h2 className="text-[20px] md:text-[25px] font-semibold md:font-bold text-[#15A135] ">
            Imagine having a Home EcoEarner Power System installed in your home.
            With no upfront or net cost to you, this revolutionary system offers
            a host of benefits you won’t want to miss.
          </h2>
        </div>

        <div className="flex flex-col gap-3  ">
          <h2 className="text-xl font-bold text-[#15A135] ">
            Cost-Free Electricity
          </h2>
          <p className=" font-medium text-[#525C60] mb-7">
            Say goodbye to soaring energy bills! Home EcoEarner allows you to
            generate cost-free electricity, up to the average annual UK
            household usage. Your home will be powered by clean, renewable
            energy saving you money while reducing your carbon footprint.
          </p>
        </div>
        <div className="flex flex-col gap-3 ">
          <h2 className="text-xl  font-bold text-[#15A135] ">
            Extra Income
          </h2>
          <p className=" font-medium text-[#525C60] mb-7">
            But that’s not all With Home EcoEarner, you can also earn an extra
            income. By harnessing the power of renewable energy, you can
            generate surplus electricity that can be sold back to the grid.
            Watch your savings grow while you contribute to a sustainable
            future.
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
