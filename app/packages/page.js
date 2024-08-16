"use client";
import VerifiedIcon from '@mui/icons-material/Verified';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from "react";
import Link from 'next/link';
import SignupNewsletter from '../component/TalkAdvisor';

const page = () => {
  const [packages, setPackages] = useState([]);
  const [packagesLoading, setPackagesLoading] = useState(true);
  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('/api/packages');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPackages(data.data); 
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setPackagesLoading(false); 
      }
    };

    fetchPackages();
  }, []);



  return (
    <>


      <section className="relative bg-green min-h-[396px] flex justify-center">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
          Customer Packages 
          </h1>
          <h2 className="w-[90%] md:w-1/2 text-base text-center font-semibold text-white mx-auto">
          Discover our tailored Customer Packages, designed to meet your unique energy needs and help you maximise the benefits of renewable power in your home.
          </h2>
        </div>
      </section>

      <section className="w-full py-10 ">
      
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 container mx-auto packages-div justify-center gap-5 lg:gap-20">
          {packagesLoading
            ? [1, 2, 3].map((_, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-10 w-full"
                >
                  <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
                    <Skeleton width={150} />
                  </h1>
                  {[...Array(7)].map((_, i) => (
                    <p key={i}>
                      <Skeleton width={200} />
                    </p>
                  ))}
                </div>
              ))
            : packages.map((pkg) => (
              <a href="/contact-us" className="flex">
              <div key={pkg._id}
        className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-5 lg:px-10 w-full pb-20 relative cursor-pointer">
     
     <h1 className="text-[22px] lg:text-[30px] font-bold text-center my-3 text-green-dark">
       {pkg.title}
       <span className="text-[22px]">{pkg.shortDesc}</span>
     </h1>
 
     {pkg.features.map((feature, index) => (
       <p key={index}>
         <VerifiedIcon className="mr-2 verified-icon " />
         {feature}
       </p>
     ))}
 
     <h3  className="absolute bg-green bottom-5 text-white px-4 py-2 rounded-full">
       Get A Quote
     </h3>
   </div>
           </a>
              ))}
        </div>
      </section>
      <section className="w-full steps-inner-div p-10">
        <div className="bg-white flex flex-col gap-5 container mx-auto p-5 md:p-10">
          <h3 className="font-bold text-green text-xl">Note :</h3>
          <span className="flex gap-2 justify-start items-start md:items-center text-justify">
            <img src="/assets/images/3-list.svg" alt="" />
            <p className='my-auto'>
            Power Booster currently in product development, you will be put on a
            priority list for installation and we will keep you updated.
            </p>
          </span>
          <span className="flex gap-2 justify-start items-start text-justify">
            <img src="/assets/images/2-list.svg" alt="" />
            <p className='my-auto'> Savings is based on
            £58.80/month, an average UK household electricity cost of
            £0.228/kWh, assuming the assets are paid over an 20-year payment
            term.</p>
          </span>
          <span className="flex gap-2 justify-start items-start text-justify">
            <img src="/assets/images/1-list.svg" alt="" />
           <p>
           Projected lifetime savings are calculated on a fixed system price,
            taking into account the Office for National Statistics' annual 7.3%
            electricity bill increases over 20 years, alongside a 2% export
            guarantee tariff rise with inflation. Actual savings may vary
            depending on property features and market conditions.
           </p>
          </span>
        </div>
      </section>
      <SignupNewsletter />
    </>
  );
}

export default page