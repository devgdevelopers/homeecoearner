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
import PhoneIcon from "@mui/icons-material/Phone";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
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
    {
      page: "Contact Us",
      link: "/contact-us",
    },
  ];



  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <Navbar className="hidden w-full mx-auto md:flex py-3 bg-transparent main-nav">
          <NavbarContent className="text-white  flex justify-start">
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

          <NavbarContent className="flex gap-5 justify-center  link-div-head">
            <NavbarItem>
              <Link href="/products" className="font-bold">
                Products
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/products" className="font-bold">
                Packages
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/services" className="font-bold">
                Services
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/about" className="font-bold">
                News
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/news" className="font-bold">
                FAQs
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link href="/contact-us" className="font-bold">
                Contact Us
              </Link>
            </NavbarItem>
          </NavbarContent>

          <NavbarContent className="hidden xl:flex gap-5 justify-end">
            <Link
              href="mailto:enquiry@organicco.uk"
              className=" bg-[#022201] text-white p-1 rounded-3xl"
            >
              <EmailIcon className="" />
            </Link>
            <Link
              href="tel:+44 (0)20 8133 3129"
              className="text-sm bg-white p-1 font-bold rounded-3xl text-[#022201]"
            >
              <PhoneIcon className="text-white bg-[#022201] rounded-3xl p-1 text-xl" />{" "}
              +44 (0)20 8133 3129
            </Link>
          </NavbarContent>
        </Navbar>

        <Navbar className="sticky md:hidden py-4 flex bg-white justify-end z-[1000] ">
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
            <NavbarMenu className="pt-2 h-screen bg-white">
              {menuItems.map((item, index) => (
                <NavbarMenuItem
                  key={`${item}-${index}`}
                  className="link-div-head"
                >
                  <Link className="w-full text-dark font-semibold" href={item.link} size="lg">
                    {item.page}
                  </Link>
                </NavbarMenuItem>
              ))}

              <NavbarContent className="flex gap-5 justify-end">
                <Link
                  href="mailto:enquiry@organicco.uk"
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
    </>
  );
}
