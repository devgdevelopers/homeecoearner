import React from "react";

const page = () => {
return (
<>
  <section className="mt-[5.5rem]  py-20 bg-green-light  contact-banner-section  ">
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-semibold text-green mb-3">
        Contact Information
      </h2>
      <p className="w-[70%] text-center mx-auto my-auto">
        If you have any questions, need assistance, or want to learn more
        about how HomeEcoEarner can transform your energy costs into income,
        please don't hesitate to contact us. Our team is ready to provide
        you with the information and support you need.
      </p>
    </div>

  </section>
  <section className="my-20">
    <div className="container mx-auto flex flex-col md:flex-row">
      <div className="flex flex-col gap-3 w-[90%] mx-auto md:w-2/4 my-auto">
        <h1 className="text-2xl font-semibold text-green text-center md:text-left">Get In Touch With Us</h1>
        <div>
          <p className="text-green font-semibold">Phone:</p>
          <p className="text-dark">+44 (0)20 3286 5350</p>
        </div>
        <div>
          <p className="text-green font-semibold">Email:</p>
          <p className="ttext-dark">info@homeecoearner.com</p>
        </div>
        <div>
          <p className="text-green font-semibold">Location:</p>
          <p className="text-dark">2 Brunel Place, Slough, SL1 1FQ, UK</p>
        </div>
      </div>
      <div className="w-[90%] mx-auto md:w-2/4">
        <p className="py-4 text-green font-semibold">Send A Message</p>
        <form action="" className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name"
            className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input" />
          <input type="email" placeholder="Your Email"
            className="bg-inherit placeholder:text-dark outline-none border-gray-500 p-3 contact-page-input" />
          <input type="text" placeholder="How Can We help You ?"
            className="bg-inherit placeholder:text-dark  outline-none border-gray-500 p-3 contact-page-input" />
          <button type="submit" className="bg-green text-white w-[200px] p-3">Send Now</button>
        </form>
      </div>
    </div>
  </section>

  <section className="bg-green-light signup-step-section py-10 ">

    <div className="container mx-auto flex flex-col md:flex-row">
     <div className="w-[90%] mx-auto md:w-2/5 my-auto">
     <h2 className="text-2xl font-semibold text-green">Find Us On Google Map</h2>
      <p className=" mx-auto my-auto mb-5 ">Locate our office easily using Google Maps. Simply click the link or
        view the map below to get directions and see our exact location.</p>
     </div>
      <div className="mx-auto w-[90%] h-96 md:w-2/5" style={{
    maxWidth: "100%",
    overflow: "hidden",
    color: "red",
  }}>
        <div id="embed-map-canvas" style={{ height: "100%", width: "100%", maxWidth: "100%" }}>
          <iframe style={{ height: "100%", width: "100%", border: 0 }} frameBorder={0}
            src="https://www.google.com/maps/embed/v1/search?q=2+Brunel+Place,+Slough,+SL1+1FQ,+UK&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" />
        </div>
        <a className="google-map-html" rel="nofollow" href="https://www.bootstrapskins.com/themes"
          id="get-data-for-embed-map">
          premium bootstrap themes
        </a>
        <style dangerouslySetInnerHTML={{
      __html:
        "#embed-map-canvas img{max-height:none;max-width:none!important;background:none!important;}"
    }} />
        </div>
    </div>

  </section>
</>
);
};

export default page;