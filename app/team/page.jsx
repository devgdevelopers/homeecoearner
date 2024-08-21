import React from 'react'
import Breadcrumb from '../component/BreadCrumb'

const page = () => {
  return (
    <>
    
    <div className="hidden product-page-bg min-h-[396px] lg:flex justify-center">
        <h1 className="font-bold text-[35px] md:text-[60px] text-center text-white my-auto">
         Our Team
        </h1>

      </div>


      {/* mob banner  */}
      <div className="lg:hidden product-page-bg-mob min-h-[310px] flex justify-center">
        <h1 className="font-bold text-[35px] md:text-[60px] text-center text-white my-auto">
        Our Team
        </h1>

      </div>


      <Breadcrumb />

      {/* ourteam */}
      <section className="w-full lg:py-20 flex flex-col gap-9">
        
        <div className="container mx-auto grid grid-flow-row lg:grid-flow-col  place-content-center gap-10">
          <div className="bg-white w-full lg:min-w-1/2  py-10 pb-20 rounded mx-auto team-bg-section">
            <img
              src="/assets/images/david.svg"
              className="w-[170px] rounded-full  mx-auto"
              alt=""
            />
            <h3 className="text-[25px] font-bold text-center my-5 text-[#fff]">
              David Sheldon
            </h3>
            <h4 className=" px-10 text-[#fff] text-[19px] text-justify ">
              Co-Founder / Business Development Director - Home EcoEarner Ltd.
              30 years’ experience establishing businesses and arranging asset
              finance in the transport and renewable energy sectors. Accounting,
              Tax, Corporate advisory, Investment Banking, Asset finance /
              Leasing, Renewable energy, Solar, Wind, Nuclear.
            </h4>
          </div>

          <div className="bg-white w-full lg:min-w-1/2 py-10 pb-20 rounded mx-auto team-bg-section">
            <img
              src="/assets/images/rory.svg"
              className="w-[170px] rounded-full  mx-auto"
              alt=""
            />
            <h3 className="text-[25px] font-bold text-center my-5 text-[#fff]">
              Rory Tait
            </h3>
            <h4 className=" px-10 text-[#fff] text-[19px] font-medium text-justify">
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