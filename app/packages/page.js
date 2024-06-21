"use client";
import VerifiedIcon from '@mui/icons-material/Verified';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from "react";
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
        // console.log('Fetched packages:', data);
        setPackages(data.data); //  API returns { data: packagesArray }
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setPackagesLoading(false); // Ensure loading is set to false even if there is an error
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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
            magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
            tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit
          </h2>
        </div>
      </section>

      <section className="w-full py-10 ">
        <div className="container mx-auto">
          <h1 className="font-bold text-[35px] md:text-[50px] text-center text-green my-5 mb-10">
            Customer Packages
          </h1>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 container mx-auto packages-div justify-center gap-5 lg:gap-20">
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
                <div
                  key={pkg._id}
                  className="flex flex-col gap-5 p-5 packages-inner-div py-10 px-10 w-full"
                >
                  <h1 className="text-[30px] font-bold text-center my-3 text-green-dark">
                    {pkg.title} -{" "}
                    <span className="text-[22px]">{pkg.shortDesc}</span>
                  </h1>
                  {pkg.features.map((feature, index) => (
                    <p key={index}>
                      <VerifiedIcon className="mr-2 verified-icon" />
                      {feature}
                    </p>
                  ))}
                </div>
              ))}
        </div>
      </section>
      <SignupNewsletter />
    </>
  );
}

export default page