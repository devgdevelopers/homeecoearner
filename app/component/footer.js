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
    <div className='container mx-auto grid grid-cols-4 p-5'>
    <div className='flex flex-col gap-5'>
      <Image src="/assets/images/logo.png" className='w-[250px]' width={100} height={100} alt='logo' unoptimized></Image>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, asperiores?</p>
      <div className='flex gap-2 text-lg'>
      <InstagramIcon />
      <FacebookIcon />
      <XIcon />
      <WhatsAppIcon />
      </div>
     </div>
     <div className= 'w-auto flex flex-col justify-center lg:pl-20'>
      <h3 className='mb-3'><strong>About</strong></h3>
      <ul className='flex flex-col gap-2'>  
        <Link href="/">Products</Link>   
        <Link href="/">Our Services</Link>   
        <Link href="/">Packages</Link>   
       </ul>
     </div>
     <div className='flex flex-col justify-center lg:pl-20'>
      <h3 className='mb-3'><strong>Services</strong></h3>
      <ul className='flex flex-col gap-2'>  
        <Link href="/">Products</Link>   
        <Link href="/">Our Services</Link>   
        <Link href="/">Products</Link>   
       </ul>
     </div>
     <div className='flex flex-col justify-center lg:pl-20'>
      <h3 className='mb-3'><strong>Other</strong></h3>
      <ul className='flex flex-col gap-2'>  
        <Link href="/">Contact Us</Link>   
        <Link href="/">News</Link>   
        <Link href="/">Privacy Policy</Link>   
       </ul>
     </div>
     
    </div>
    <div className='w-full py-2 bg-dark text-white'>
      <p className=' text-center text-sm '>©2024 Home EcoEarner Limited, All Rights Reserved</p>
    </div>
    </section>
  )
}

export default footer
