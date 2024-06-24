import React from "react";
import Image from "next/image";
import ContactForm from "../component/contactForm";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const page = () => {
  return (
    <>
      <section className="relative bg-green min-h-[396px] flex justify-center ">
        <div className=" container mx-auto flex flex-col justify-center items-center">
          <h1 className="text-[25px] md:text-[60px] text-center text-white font-bold block">
            Need to get in touch with us?
          </h1>
          <h2 className="w-[90%] md:w-1/2 text-base text-center font-semibold text-white mx-auto">
            We’d love to hear from you! Whether you have questions about our
            solar panels, need support with your existing system, or want to
            learn more about how solar energy can benefit your home, our team is
            here to help.
          </h2>
        </div>
      </section>

      <section className=" bg-[#F5F5F5] pt-10">
        <div className="container mx-auto flex flex-col md:flex-row bg-white p-10">
         
          <div className="w-[90%] mx-auto md:w-2/4 my-auto lg:px-10">
            <h1 className="text-[25px] py-4 text-green font-semibold"> Fill out the form with your details.</h1>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-3 w-[90%] mx-auto md:w-2/4 my-auto">
           <Image width={500} height={400} className="mx-auto" src="/assets/images/contact-img.svg"></Image>
          </div>
        </div>
      </section>

     
      <section className="w-full  bg-[#F5F5F5]  py-10">
        <div className="container mx-auto bg-white flex justify-center flex-col  items-center">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 my-10 gap-5 ">
            <div className="px-10 my-auto">
              <div className="my-auto bg-white p-5 sm:p-10 flex flex-col gap-4 mt-5 ">
                <h2 className="text-[25px] font-bold text-[#385723]">Info</h2>
                <h2 className="text-lg">
                  <span>
                    <MailOutlineIcon className="mr-2 text-green" />
                  </span>
                  info@homeecoearner.com
                </h2>
                <h2 className="text-lg">
                  <span>
                    <LocalPhoneOutlinedIcon className="mr-2 text-green" />
                  </span>
                  0203 286 5350
                </h2>
                <h2 className="text-lg">
                  <span>
                    <PlaceOutlinedIcon className="mr-2 text-green" />
                  </span>
                  2 Brunel Place, Slough, SL1 1FQ, UK
                </h2>
              </div>
            </div>
            <div className="px-10">
              <div
                className="mx-auto w-[90%] h-96 md:w-3/4"
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  color: "red",
                }}
              >
                <div
                  id="embed-map-canvas"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/search?q=2+Brunel+Place,+Slough,+SL1+1FQ,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="google-map-html"
                  rel="nofollow"
                  href="https://www.bootstrapskins.com/themes"
                  id="get-data-for-embed-map"
                >
                  premium bootstrap themes
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "#embed-map-canvas img{max-height:none;max-width:none!important;background:none!important;}",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
