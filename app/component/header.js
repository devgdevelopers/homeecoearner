import React, { useState } from "react";
import { usePathname } from "next/navigation";
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
} from "@nextui-org/react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";


export default function Page() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

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
      page: "Packages",
      link: "/packages",
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
      page: "About Us",
      link: "/about",
    },
    {
      page: "FAQs",
      link: "/faqs",
    },
  ];

  return (
    <>
      <Navbar className="sticky top-0 hidden w-full mx-auto md:flex py-3 bg-white main-nav px-0 shadow-xl">
        <NavbarContent className="text-white flex justify-start">
          <NavbarBrand className="flex justify-start">
            <Link href="/">
              <Image
                className=" min-w-[237px] h-[auto] "
                src="/assets/images/logo-final.svg"
                width={237}
                height={100}
                alt="logo"
                unoptimized
              />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="flex gap-5 justify-center link-div-head">
          <NavbarItem>
            <Link
              href="/"
              className={`navLink ${pathname === "/" ? "active " : ""}`}
              passhref='true'
            >
              Home
            </Link>
          </NavbarItem>
         
          <NavbarItem>
            <Link
              href="/products"
              className={`navLink ${pathname === "/products" ? "active" : ""}`}
              passhref='true'
            >
              Products
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/packages"
              className={`navLink ${pathname === "/packages" ? "active" : ""}`}
            >
              Packages
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/services"
              className={`navLink ${pathname === "/services" ? "active" : ""}`}
            >
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/news"
              className={`navLink ${pathname === "/news" ? "active " : ""}`}
            >
              News
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/about"
              className={`navLink ${pathname === "/about" ? "active " : ""}`}
            >
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/faqs"
              className={`navLink ${pathname === "/faqs" ? "active " : ""}`}
            >
              FAQs
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent className="hidden xl:flex gap-2 justify-end">
          <Link
            href="tel:+44 (0)20 8133 3129"
            className="call-btn-head rounded-3xl "
          >
            <LocalPhoneOutlinedIcon />
            0203 286 5350
          </Link>

          <Link
            href="tel:+(0)20 8133 3129"
            className="text-sm bg-[#005C15] p-[3px] font-bold rounded-3xl text-[#022201] pr-4 contact-btn-head "
          >
            Contact Us
          </Link>
        </NavbarContent>
      </Navbar>

      <Navbar className="sticky top-0 md:hidden py-2 flex bg-white z-[1000] shadow-xl">
        {/* Mobile Navbar */}
        <NavbarBrand>
          <Link href="/">
            <Image
              className=" w-[200px] h-[auto]"
              src="/assets/images/logo-final.svg"
              width={100}
              height={100}
              alt="logo"
              unoptimized
            />
          </Link>
        </NavbarBrand>

        <NavbarContent>
          <NavbarMenuToggle
            className="flex "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <MenuIcon />
          </NavbarMenuToggle>
        </NavbarContent>

        {menuOpen && (
          <NavbarMenu className="pt-8 h-screen bg-white">
            {menuItems.map((item, index) => (
              <NavbarMenuItem
                key={`${item}-${index}`}
                className="link-div-head"
              >
               
                <Link
                // {`navLink ${pathname === "/" ? "active " : ""}`}
                  className= { ` text-dark font-semibold navLink  ${pathname === `${item.link}` ? "active" : ""}`}
                  href={item.link}
                  size="lg"
               passhref='true'
                >
                  {item.page}
                </Link>
              </NavbarMenuItem>
            ))}
          
            <NavbarMenuItem className="flex flex-col justify-between">
            <Link
            href="tel:+44 (0)20 8133 3129"
            className="call-btn-head rounded-3xl my-2"
          >
            <LocalPhoneOutlinedIcon />
            0203 286 5350
          </Link>

          <Link
            href="tel:+(0)20 8133 3129"
            className="text-sm bg-[#005C15] p-[3px] font-bold rounded-3xl text-[#022201] pr-4 contact-btn-head "
          >
            Contact Us
          </Link>
            </NavbarMenuItem>
          </NavbarMenu>
        )}
        
      </Navbar>
  
    </>
  );
}
