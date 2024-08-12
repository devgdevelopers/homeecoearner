import React from 'react'

const page = () => {
  return (
    <>
    
      {/* ourteam */}
      <section className="w-full team-bg-section py-20 flex flex-col gap-9">
        <div className="mb-[111px]">
          <h1 className="text-center text-[30px] md:text-[50px] font-extrabold text-white">
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
            <h4 className=" px-10 text-[#525C60] text-[19px] font-medium ">
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
    
    </>
  )
}

export default page