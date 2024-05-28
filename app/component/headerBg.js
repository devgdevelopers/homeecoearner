import React, { useEffect, useState } from "react";
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
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const HeaderBg = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    {
      page: "Home",
      link: "/",
    },
    {
      page: "About",
      link: "/about",
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
        {/* Desktop Navbar */}
        <Navbar
          isBordered
          className="hidden w-full mx-auto md:flex py-3 bg-transparent main-nav"
        >
          <NavbarContent className="text-white flex justify-start">
            <NavbarBrand className="flex justify-start">
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
          </NavbarContent>

          <NavbarContent className="flex font-semibold gap-5 justify-center link-div-head-bg">
            <NavbarItem>
              <Link href="/" className="font-bold text-dark">
                Home
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about" className="font-bold text-dark">
                About
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/products">Products</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/packages">Packages</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services">Services</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/news">News</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/faqs">FAQs</Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact-us">Contact Us</Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="hidden xl:flex gap-2 justify-end">
            <Link
              href="mailto:info@homeecoearner.com"
              className=" text-sm bg-[#022201]  font-bold rounded-3xl text-[#022201]"
            >
              <EmailIcon className="text-white bg-[#022201] rounded-3xl text-3xl w-auto  p-[3px] m-[2px]" />
            </Link>
            <Link
              href="tel:+44 (0)20 8133 3129"
              className="text-sm bg-[#022201]  p-[3px] font-bold rounded-3xl  text-white pr-4 "
            >
              <PhoneIcon className="text-white bg-[#022201] rounded-3xl text-3xl w-auto mx-1 p-[3px]" />{" "}
              +44 (0)20 3286 5350
            </Link>
          </NavbarContent>
        </Navbar>

        {/* Mobile Navbar */}
        <Navbar className="sticky md:hidden py-2 flex bg-white justify-between items-center z-[1000]">
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
              className="flex justify-end me-0"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <MenuIcon />
            </NavbarMenuToggle>
          </NavbarContent>

          {menuOpen && (
            <NavbarMenu className="pt-8 h-screen bg-white">
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index} link-div-head-bg`}>
                  <Link
                    className="w-full text-dark font-semibold"
                    href={item.link}
                    size="lg"
                  >
                    {item.page}
                  </Link>
                </NavbarMenuItem>
              ))}
              <NavbarContent className="flex flex-col gap-5 ">
                <Link
                  href="mailto:info@homeecoearner.com"
                  className="bg-dark text-white  text-sm p-2 rounded-lg"
                >
                  <EmailIcon className="text-sm" /> info@homeecoearner.com
                </Link>
                <Link
                  href="tel:+44 020 3286 5350"
                  className="bg-dark text-white  text-sm p-2 rounded-lg"
                >
                  <PhoneIcon className="text-sm" /> +44 020 3286 5350
                </Link>
              </NavbarContent>
            </NavbarMenu>
          )}
        </Navbar>
      </header>
    </div>
  );
};

export default HeaderBg;
