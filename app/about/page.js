import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';

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
                src="/assets/images/rory-team1.png"
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
                <p className="text-sm text-dark font-semibold text-justify">
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
                    {" "}
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
                <p className="text-sm text-dark font-semibold text-justify">
                  Home EcoEarner Ltd. 30 years’ experience establishing
                  businesses and arranging asset finance in the transport and
                  renewable energy sectors. Accounting, Tax, Corporate advisory,
                  Investment Banking, Asset finance / Leasing, Renewable energy,
                  Solar, Wind, Nuclear.
                </p>
                <div className="flex justify-center gap-10 text-base mt-3">
                  <Link href="">
                    {" "}
                    <InstagramIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    {" "}
                    <LinkedInIcon className="text-3xl font-bold" />
                  </Link>
                  <Link href="">
                    {" "}
                    <XIcon className="text-3xl font-bold" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto my-20">
          <div className="mx-auto">
            <h2 className="text-[20px] md:text-[30px] text-green font-semibold text-center mb-5 w-[100%] md:-[50%]">
              What Do We Do?
            </h2>
            <div className="flex md:flex-row flex-col justify-center gap-10 my-10">
              <div className="w-[90%] md:w-[50%] flex flex-row justify-end mx-auto" >
                <Image
                className="w-[100%] md:w-[50%] team-member-img"
                  src="/assets/images/about-serve-img.jpg"
                  width={100}
                  height={100}
                  unoptimized
                ></Image>
              </div>
              <div className="w-[50%] p-5 flex flex-col justify-center ">
                <h2 className="text-2xl text-dark font-semibold ">We serve:</h2>
                <ul className="py-4">
                  <li> <RadioButtonCheckedIcon className="text-sm text-green" /> Homeowners</li>
                  <li> <RadioButtonCheckedIcon className="text-sm text-green" /> Tenants</li>
                  <li><RadioButtonCheckedIcon className="text-sm text-green" /> Councils</li>
                  <li><RadioButtonCheckedIcon className="text-sm text-green" /> Landlords</li>
                  <li><RadioButtonCheckedIcon className="text-sm text-green" /> Social housing associations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
