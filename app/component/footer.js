import React from "react";
import Image from "next/image";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const footer = () => {
  return (
    <section className="w-full flex flex-col footer-section ">
      <div className="container mx-auto grid grid-cols-2 grid-flow-row lg:grid-cols-5 p-5 gap-5 py-10">
        <div className="flex flex-col gap-3">
          <Image
            src="/assets/images/logo-final.svg"
            className="w-[250px] md:ms-0 mx-auto"
            width={100}
            height={100}
            alt="logo"
            unoptimized
          ></Image>
          <p className="mb-3 font-bold text-center md:text-start text-[#345828]">
            INSTALL AND SAVE
            <br />
            UPGRADE AND EARN
          </p>
        </div>
        <div className="w-auto flex flex-col justify-start lg:pl-10">
          <h5 className="mb-3 font-bold pl-3 text-center md:text-start text-green">
            About
          </h5>
          <ul className="flex flex-col gap-2 font-medium">
            <Link
              href="/about"
              className="footerLink text-center md:text-start"
            >
              History
            </Link>
            <Link
              href="/team"
              className="footerLink text-center md:text-start"
            >
              Our Team
            </Link>
            <Link
              href="/about"
              className="footerLink text-center md:text-start"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/about"
              className="footerLink text-center md:text-start"
            >
              Privacy Policy
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-start lg:pl-2">
          <h5 className="mb-3 font-bold pl-3 text-center md:text-start text-green">
            Services
          </h5>
          <ul className="flex flex-col gap-2">
            <Link
              href="/products"
              className="footerLink text-center md:text-start"
            >
              Our Products
            </Link>
            {/* <Link
            href="/packages"
            className="footerLink text-center md:text-start"
          >
            Order Status
          </Link> */}
            <Link
              href="/solar-maintenance"
              className="footerLink text-center md:text-start"
            >
              Solar Maintenance
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-start lg:pl-2">
          <h5 className="mb-3 font-bold pl-3 text-center md:text-start text-green">
            Other
          </h5>
          <ul className="flex flex-col gap-2">
            <Link
              href="/services"
              className="footerLink text-center md:text-start"
            >
              How To Order
            </Link>
            <Link
            
              href="/contact-us"
              className="footerLink text-center md:text-start"
            >
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="flex flex-col justify-start  lg:pl-2 ">
        <h5 className="mb-3 font-bold  text-center md:text-start text-green">
            Contact
          </h5>
          <Link
            
           href="mailto:info@homeecoearner.com"
            className=" text-center md:text-start"
          >
             <strong>E-mail:</strong>{" "}
             <span className="px-2">info@homeecoearner.com</span>
          </Link>
          <Link
            
            href="tel:0203 286 5350"
            className=" text-center md:text-start"
          >
             <strong>Mobile: </strong>
             <span className="px-2">0203 286 5350</span>
          </Link>
        
        </div>
      </div>

      <div className="container  bg-dark text-dark mx-auto flex gap-3 flex-col">
        <div className="flex gap-2 text-lg justify-center">
          <Link href="https://www.instagram.com/homeecoearner/" target="_blank">
            <InstagramIcon className="text-white text-4xl bg-green rounded-full p-2" />
          </Link>
          <Link href="https://www.facebook.com/homeecoearner/ " target="_blank">
            <FacebookIcon className="text-white text-4xl bg-green rounded-full p-2" />
          </Link>
          <Link href="https://x.com/Home_EcoE" target="_blank">
            <XIcon className="text-white text-4xl bg-green rounded-full p-2" />
          </Link>
          <Link
            href=" https://www.linkedin.com/company/home-ecoearner-limited/"
            target="_blank"
          >
            <LinkedInIcon className="text-white text-4xl bg-green rounded-full p-2" />
          </Link>
        </div>
        <hr className="h-[2px] text-black bg-black" />
        <h6 className="pb-3 text-center text-base font-bold my-auto">
          ©2024 Home EcoEarner Limited, All Rights Reserved
        </h6>
      </div>
    </section>
  );
};

export default footer;
