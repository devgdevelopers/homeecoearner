import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";

const page = () => {
  return (
    <>
      <main className="relative mt-[6rem]">
        <section className="container mx-auto my-20">
          <h2 className="text-[20px] md:text-[30px] text-green font-semibold text-center mb-5 w-[100%] md:-[50%]">
            Our Team
          </h2>
          <div className="flex flex-col md:flex-row gap-10 w-[100%] md:w-[70%] mx-auto">
            <div className="w-[90%] md:w-[50%] flex flex-col justify-center mx-auto">
              <Image
                src="/assets/images/rory.png"
                width={100}
                height={100}
                alt="team-member"
                className="w-[200px] h-[200px]  mx-auto rounded-[50%] -mb-20 z-10 team-member-img"
                unoptimized
              ></Image>
              <div className="bg-green-light py-20 px-4 rounded-3xl flex flex-col justify-end gap-2">
                <h2 className="text-2xl text-green font-semibold text-center">
                  Rory Tait
                </h2>
                <p className="text-base text-dark font-bold text-center">
                  Co-Founder / Director
                </p>
                <p className="text-sm text-dark text-justify">
                  Home EcoEarner Ltd, Secretary Association for Renewable Energy
                  and Clean Technology (REA), Head of Renewables, Prospect Law.
                  Former solicitor, 30 years’ experience advising companies
                  active in the energy sector, from developers of projects
                  through to network operators on a wide range of clean energy
                  technologies.
                </p>
                <div className="flex justify-center gap-10 text-base mt-3">
                  <Link href="">
                    <InstagramIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    <LinkedInIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    <XIcon className="text-3xl font-bold" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[90%] md:w-[50%] flex flex-col justify-center mx-auto">
              <Image
                src="/assets/images/David-team2.jpg"
                width={100}
                height={100}
                alt="team-member"
                className="w-[200px] h-[200px]  mx-auto rounded-[50%] -mb-20 z-10 team-member-img"
              ></Image>
              <div className="bg-green-light py-20 px-4 rounded-3xl flex gap-2 flex-col justify-end">
                <h2 className="text-2xl text-green font-semibold text-center">
                  David Sheldon
                </h2>
                <p className="text-base text-dark text-center font-bold">
                  Co-Founder / Business Development Director
                </p>
                <p className="text-sm text-dark text-justify">
                  Home EcoEarner Ltd. 30 years’ experience establishing
                  businesses and arranging asset finance in the transport and
                  renewable energy sectors. Accounting, Tax, Corporate advisory,
                  Investment Banking, Asset finance / Leasing, Renewable energy,
                  Solar, Wind, Nuclear.
                </p>
                <div className="flex justify-center gap-10 text-base mt-3">
                  <Link href="">
                    <InstagramIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    <LinkedInIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    <XIcon className="text-3xl font-bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" mx-auto py-5 md:20 bg-green-light">
          <div className="mx-auto container">
            <h2 className="text-[20px] md:text-[30px] text-green font-semibold text-center mb-5 w-[100%] md:-[50%]">
              What Do We Do?
            </h2>

            <div className="flex md:flex-row flex-col justify-center gap-10 my-10">
              <div className=" w-[100%] md:w-[50%] mx-auto">
                <Image
                  className="w-[100%] md:w-[50%] team-member-img  mx-auto"
                  src="/assets/images/about-serve-img.jpg"
                  width={100}
                  height={100}
                  unoptimized
                ></Image>
              </div>
              <div className="w-[90%] md:w-[50%] flex flex-col  mx-auto my-auto">
                <h2 className="text-2xl text-dark font-semibold ">We serve:</h2>
                <ul className="py-4 ">
                  <li>
                    <RadioButtonCheckedIcon className="text-sm text-green" />
                    Homeowners
                  </li>
                  <li>
                    <RadioButtonCheckedIcon className="text-sm text-green" />
                    Tenants
                  </li>
                  <li>
                    <RadioButtonCheckedIcon className="text-sm text-green" />
                    Councils
                  </li>
                  <li>
                    <RadioButtonCheckedIcon className="text-sm text-green" />
                    Landlords
                  </li>
                  <li>
                    <RadioButtonCheckedIcon className="text-sm text-green" />
                    Social housing associations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto flex md:flex-row flex-col p-3 gap-3">
          <div className=" mx-auto my-auto pb-5">
            <h2 className="text-[25px] font-semibold text-green">
              So they can:
            </h2>
            <p>While doing their bit to help the planet get to Net Zero.</p>
            <p>Free themselves from electricity bills.</p>
            <p>Generate their own electricity.</p>
            <p>Free themselves from future electricity price increases.</p>
            <p>
              Potentially earn a meaningful income from their home electricity
              generation.
            </p>
            <p>All with no up-front cost.</p>
          </div>
          <div className="md:mx-auto">
            <Image
              src="/assets/images/about-theycan-image.jpg"
              width={100}
              height={100}
              alt="content image"
              className="w-full  md:w-[300px] overflow-x-hidden mx-auto"
              unoptimized
            ></Image>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
