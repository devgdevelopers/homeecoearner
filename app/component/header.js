import React from "react";
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

export default function page() {
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
        <Navbar className="hidden container mx-auto md:flex flex-col-3 justify-center  py-5 bg-transparent main-nav">
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

          <NavbarContent className="flex gap-5 justify-center link-div-head">
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
          <NavbarContent className="">
            <NavbarBrand>
              <Image
                className=" w-[150px] h-[auto]"
                src="/assets/images/logo.png"
                width={100}
                height={100}
                alt="logo"
                unoptimized
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
                className="text-black text-sm"
              >
                <EmailIcon className="text-sm" /> enquiry@organicco.uk
              </Link>
              <Link
                href="tel:+44 (0)20 8133 3129"
                className="text-black text-sm"
              >
                <PhoneIcon className="text-sm" /> +44 (0)20 8133 3129
              </Link>
            </NavbarContent>
          </NavbarMenu>

          <NavbarContent className="md:hidden flex justify-end align-bottom ">
            <NavbarMenuToggle className="flex justify-end me-0" />
          </NavbarContent>
        </Navbar>
      </header>
    </>
  );
}
