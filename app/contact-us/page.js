import React from "react";
import Image from "next/image";
import ContactForm from "../component/contactForm";

const page = () => {
  return (
    <>
      <section className=" pt-14 py-10 bg-[#b5eec2] mt-14 md:mt-0">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="md:w-[50%] w-[90%] mx-auto  my-auto">
            <h2 className="text-[20px] md:text-[40px] text-green mx-auto text-center text-white md:text-left my-auto font-bold block">
              Contact Information
            </h2>
            <p className=" text-justify mx-auto my-auto font-medium">
              If you have any questions, need assistance, or want to learn more
              about how Home EcoEarner can transform your energy costs into
              income, please don't hesitate to contact us. Our team is ready to
              provide you with the information and support you need.
            </p>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <Image
              src="/assets/images/eco-contact.png"
              width={100}
              height={100}
              className="w-[70%] md:w-[60%] mx-auto"
              unoptimized
            ></Image>
          </div>
        </div>
      </section>

      <section className="my-20">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="flex flex-col gap-3 w-[90%] mx-auto md:w-2/4 my-auto">
            <h1 className="text-2xl font-semibold text-green text-center md:text-left">
              Get In Touch With Us
            </h1>
            <div>
              <p className="text-green font-semibold">Phone:</p>
              <p className="text-dark font-medium">+44 (0)20 3286 5350</p>
            </div>
            <div>
              <p className="text-green font-semibold">Email:</p>
              <p className="ttext-dark font-medium">info@homeecoearner.com</p>
            </div>
            <div>
              <p className="text-green font-semibold">Location:</p>
              <p className="text-dark font-medium">
                2 Brunel Place, Slough, SL1 1FQ, UK
              </p>
            </div>
          </div>
          <div className="w-[90%] mx-auto md:w-2/4">
            <p className="py-4 text-green font-semibold">Send A Message</p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-green-light signup-step-section py-10 ">
        <div className="container mx-auto flex flex-col md:flex-row">
          <div className="my-auto">
            <h2 className="text-2xl font-semibold text-green">
              Find Us On Google Map
            </h2>
            <p className=" mx-auto my-auto mb-5 font-medium ">
              Locate our office easily using Google Maps. Simply click the link
              or view the map below to get directions and see our exact
              location.
            </p>
          </div>
          <div
            className="mx-auto w-[90%] h-96 md:w-2/5"
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
      </section>
    </>
  );
};

export default page;
