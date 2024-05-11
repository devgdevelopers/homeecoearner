import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  link,
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Image from "next/image";

const HeaderBg = () => {
  useEffect(() => {
    console.log("HeaderBg component is rendered");
  }, []); // Empty dependency array means this effect runs only once after the component mounts
  const menuItems = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "Products",
      link: "/products",
    },
    {
      page: "Services",
      link: "/services",
    },
    {
      page: "News",
      link: "/news",
    },
    
    {
      page: "FAQs",
      link: "/faqs",
    },

    {
      page: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <div>
       <header className="fixed top-0 left-0 z-50 w-full bg-white">
        <Navbar isBordered className="hidden container mx-auto md:flex flex-col-3 justify-center  py-5  main-nav"  >
        <NavbarContent className="text-white flex justify-start">
          <NavbarBrand className="flex justify-start">
            <Link href="/">
              <Image
             className=" w-[200px] h-[auto]"
                src="/assets/images/logo.png"
                width={100}
                height={100}
                alt="logo"
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex font-semibold gap-5 justify-center link-div-head-bg">
         
          <NavbarItem>
            <Link href="/products" >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/packages">
              Packages
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/news">
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/faqs">
              FAQs
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link  href="/contact-us">
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex gap-5 justify-end">
            <Link
              href="mailto:info@homeecoearner.com"
              className=" bg-[#022201] text-white p-1 rounded-3xl"
            >
              <EmailIcon className="" />
            </Link>
            <Link
              href="tel:+44 020 3286 5350"
              className="text-sm bg-white p-1 font-bold rounded-3xl text-[#022201]"
            >
              <PhoneIcon className="text-white bg-[#022201] rounded-3xl p-1 text-xl" />{" "}
              +44 020 3286 5350
            </Link>
          </NavbarContent>
      </Navbar>
      <Navbar className="sticky md:hidden py-4 flex bg-white justify-end z-[1000] ">
        <NavbarContent className=" ">
          <NavbarBrand>
            <Image
              className=" w-[200px] h-[auto]"
              src="/assets/images/logo.png"
              width={100}
              height={100}
              alt="logo"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarMenu className="pt-36 h-screen bg-white">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.link} size="lg">
                {item.page}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarContent className="flex gap-5 justify-end">
          <Link
            href="mailto:enquiry@organicco.uk"
            className="text-green text-sm"
          >
            <EmailIcon className="text-sm" /> enquiry@organicco.uk
          </Link>
          <Link href="tel:+44 (0)20 8133 3129" className="text-green text-sm">
            <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
          </Link>
        </NavbarContent>
        </NavbarMenu>

        <NavbarContent className="md:hidden flex justify-end align-bottom ">
          <NavbarMenuToggle className="flex justify-end me-0" />
        </NavbarContent>
        
      </Navbar>
      </header>
    </div>
  )
}

export default HeaderBg;
