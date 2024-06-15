import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const footer = () => {
return (
  <section className="w-full flex flex-col footer-section ">
    <div className="container mx-auto grid grid-cols-1 grid-flow-row md:grid-cols-4 p-5 gap-5 py-10">
      <div className="flex flex-col gap-3">
        <Image
          src="/assets/images/logo-final.svg"
          className="w-[250px] md:ms-0 mx-auto"
          width={100}
          height={100}
          alt="logo"
          unoptimized
        ></Image>
        <h2 className="text-lg text-dark font-semibold text-center md:text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, a?
        </h2>
      </div>
      <div className="w-auto flex flex-col justify-start lg:pl-20">
        <h3 className="mb-3 font-bold pl-3 text-center md:text-start">About</h3>
        <ul className="flex flex-col gap-2 font-medium">
          <Link
            href="/history"
            className="footerLink text-center md:text-start"
          >
            History
          </Link>
          <Link href="/team" className="footerLink text-center md:text-start">
            Our Team
          </Link>
          <Link
            href="/terms-and-cond"
            className="footerLink text-center md:text-start"
          >
            Terms & Conditions
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-start lg:pl-20">
        <h3 className="mb-3 font-bold pl-3 text-center md:text-start">
          Our Services
        </h3>
        <ul className="flex flex-col gap-2">
          <Link
            href="/services"
            className="footerLink text-center md:text-start"
          >
            Services
          </Link>
          <Link
            href="/packages"
            className="footerLink text-center md:text-start"
          >
            Packages
          </Link>
          <Link
            href="/solar-maintenance"
            className="footerLink text-center md:text-start"
          >
            Solar Maintenance
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-start lg:pl-20">
        <h3 className="mb-3 font-bold pl-3 text-center md:text-start">Other</h3>
        <ul className="flex flex-col gap-2">
          <Link
            href="/contact-us"
            className="footerLink text-center md:text-start"
          >
            Contact Us
          </Link>
          <Link href="/help" className="footerLink text-center md:text-start">
            Help
          </Link>
        </ul>
      </div>
    </div>
    <div className="container  bg-dark text-dark mx-auto flex gap-3 flex-col">
      <div className="flex gap-2 text-lg justify-center">
        <Link href="">
          <InstagramIcon className="text-white text-4xl bg-green rounded-full p-2" />
        </Link>
        <Link href="">
          <FacebookIcon className="text-white text-4xl bg-green rounded-full p-2" />
        </Link>
        <Link href="">
          <XIcon className="text-white text-4xl bg-green rounded-full p-2" />
        </Link>
        <Link href="">
          <WhatsAppIcon className="text-white text-4xl bg-green rounded-full p-2" />
        </Link>
      </div>
      <hr className="h-[2px] text-black bg-black" />
      <h6 className="pb-3 text-center text-base font-bold my-auto">
        ©2024 Home EcoEarner Limited, All Rights Reserved
      </h6>
    </div>
  </section>
);
}

export default footer