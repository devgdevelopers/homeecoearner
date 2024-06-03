import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const footer = () => {
return (
<section className='w-full flex flex-col footer-section '>
  <div className='container mx-auto grid grid-cols-1 grid-flow-row md:grid-cols-4 p-5 gap-5 py-10'>
    <div className='flex flex-col gap-3'>
      <Image src="/assets/images/logo.png" className='w-[250px]' width={100} height={100} alt='logo' unoptimized>
      </Image>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
      <div className='flex gap-2 text-lg justify-start md:justify-center w-[70%]'>
        <InstagramIcon />
        <FacebookIcon />
        <XIcon />
        <WhatsAppIcon />
      </div>
    </div>
    <div className='w-auto flex flex-col justify-start lg:pl-20'>
      <h3 className='mb-3 font-bold'>About</h3>
      <ul className='flex flex-col gap-2 font-medium'>
        <Link href="/about">About Us</Link>
        <Link href="/faqs">FAQs</Link>
        <Link href="/contact-us">Contact Us</Link>

      </ul>
    </div>
    <div className='flex flex-col justify-start lg:pl-20'>
      <h3 className='mb-3 font-bold'>Our Services</h3>
      <ul className='flex flex-col gap-2'>
        <Link href="/services">Services</Link>
        <Link href="/packages">Packages</Link>
      </ul>
    </div>
    <div className='flex flex-col justify-start lg:pl-20'>
      <h3 className='mb-3 font-bold'>Other</h3>
      <ul className='flex flex-col gap-2'>
        <Link href="/news">News</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </ul>
    </div>

  </div>
  <div className='w-full py-2 bg-dark text-white'>
 
    <h6 className=' text-center text-xs '>©2024 Home EcoEarner Limited, All Rights Reserved</h6>
  </div>
  
</section>
)
}

export default footer