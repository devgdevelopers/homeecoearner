'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import SignupNewsletter from "../component/TalkAdvisor";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Page = () => {
  const [services, setServices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch('/api/services');
        const data = await res.json();
        setServices(data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
      <section className="relative w-full services-bg-images bg-green min-h-[396px] flex justify-center">
        <div className="container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            Services
          </h1>
          <h2 className="w-3/4 md:w-1/2 text-base text-center font-semibold text-white mx-auto">
          Explore our comprehensive Services, including installation, maintenance, and support, ensuring a seamless transition to renewable energy for your home.
          </h2>
        </div>
      </section>

      <div>
        {loading ? (
          <>
            <section className="pb-10">
              <div className="container mx-auto">
                <div className="w-full flex justify-center">
                <Skeleton width={200} height={50} className="my-2 md:my-8 mx-auto" />

                </div>
                <div className="grid gap-2 justify-center grid-flow-col">
                  <Skeleton width={400} height={100} />
                  <Skeleton width={400} height={100} />
                  <Skeleton width={400} height={100} />
                </div>
                <div className="mx-auto w-5/6 flex justify-center flex-col gap-3 md:px-10 py-6">
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="100%" height={20} />
                </div>
              </div>
            </section>
          </>
        ) : (
          services.map((service, index) => (
            <section className="pb-10" key={index}>
              <div className="container mx-auto">
                <h1
                  className="text-[25px] md:text-[50px] text-green font-extrabold text-center my-2 md:my-8"
                  dangerouslySetInnerHTML={{ __html: service.cardHeading }}
                />
                <div className="grid gap-0 justify-center grid-flow-row lg:grid-flow-col overflow-hidden image">
                  {service?.images.map((img, id) => (
                   <div className="services-imgwrapper">
                     <Image
                      src={img}
                      width={200}
                      height={100}
                      alt={`services-grid-${id}`}
                      className="w-[400px] services-imgs"
                      key={id}
                      unoptimized
                    />
                   </div>
                  ))}
                </div>
                <div className="mx-auto w-5/6 flex justify-center flex-col gap-3 md:px-10 py-6">
                  {service?.features.map((feature, id) => (
                    <p className="" key={id}>
                      <CheckCircleOutlineIcon className="text-[#028921] mr-2" />
                      {feature}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          ))
        )}
      </div>

      <SignupNewsletter />
    </>
  );
};

export default Page;
