import React, { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "About",
      link: "/about-us",
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
      page: "FAQs",
      link: "/faqs",
    },
  ];

  return (
    <>
     
        <Navbar className="sticky top-0 hidden w-full mx-auto md:flex py-3 bg-white main-nav px-0">
          <NavbarContent className="text-white flex justify-start">
            <NavbarBrand className="flex justify-start">
              <Link href="/">
                <Image
                  className=" min-w-[237px] h-[auto]"
                  src="/assets/images/logo.png"
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
                className="  text-[#15A135] home-link active:text-[#15A135] hover:text-[#15A135]"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about-us" className=" text-dark">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/products" className="text-dark">
                Products
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/packages" className=" text-dark">
                Packages
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services" className="text-dark">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/news" className=" text-dark">
                News
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/faqs" className=" text-dark">
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

          {/* <NavbarContent className="flex font-semibold gap-5 justify-center link-div-head-bg">
            <NavbarItem>
              <Link href="/login" className="font-bold text-dark">
                Login
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/signup" className="font-bold text-dark">
                Signup
              </Link>
            </NavbarItem>
          </NavbarContent> */}
        </Navbar>

        <Navbar className="sticky md:hidden py-2 flex bg-white justify-end z-[1000] ">
          {/* Mobile Navbar */}
          <NavbarBrand>
            <Link href="/">
              <Image
                className=" w-[200px] h-[auto]"
                src="/assets/images/logo.png"
                width={100}
                height={100}
                alt="logo"
                unoptimized
              />
            </Link>
          </NavbarBrand>

          <NavbarContent>
            <NavbarMenuToggle
              className="flex justify-end me-0 "
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
                    className="w-full text-dark font-semibold"
                    href={item.link}
                    size="lg"
                  >
                    {item.page}
                  </Link>
                </NavbarMenuItem>
              ))}
              {/* <NavbarMenuItem className="link-div-head">
                <Link href="/login" className="font-bold text-dark">Login</Link>
              </NavbarMenuItem>
              <NavbarMenuItem className="link-div-head">
                <Link href="/signup" className="font-bold text-dark">Signup</Link>
              </NavbarMenuItem> */}

              <NavbarContent className="flex gap-5 justify-end">
                <Link
                  href="mailto:info@homeecoearner.com"
                  className="bg-dark text-white text-sm p-2 rounded-lg"
                >
                  <EmailIcon className="text-sm" />
                  info@homeecoearner.com
                </Link>
                <Link
                  href="tel:+44 020 3286 5350"
                  className="bg-dark text-white  text-sm p-2 rounded-lg px-2"
                >
                  <LocalPhoneOutlinedIcon className="text-sm" />
                  +44 020 3286 5350
                </Link>
              </NavbarContent>
            </NavbarMenu>
          )}
        </Navbar>
     
    </>
  );
}
