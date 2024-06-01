import React from "react";

const SignupNewsletter = () => {
  return (
    <>
      <section className="bg-[#00a241] py-20 signup-newsletter-bg shadow-inner">
        <div className="container mx-auto">
          <h2 className="text-center text-white  text-2xl lg:text-5xl font-semibold">
            Subscribe Newsletter{" "}
          </h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-[50px] md:w-[100px] h-[1px] bg-[#ffffff8a]"></div>
            <h2 className="text-xl md:text-2xl text-[#ffffff8a]">
              {" "}
              Get the latest news & offers{" "}
            </h2>
            <div className="w-[50px] md:w-[100px] h-[1px] bg-[#ffffff8a]"></div>
          </div>

          <div className="mx-auto py-10">
            <form
              action=""
              className="mx-auto flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0"
            >
              <input
                type="email"
                placeholder="Your Email Address "
                className="p-5 services-light-bg md:rounded-l-full text-black outline-none placeholder:text-black placeholder:font-semibold px-20 shadow-xl "
                required
              />
              <button
                type="submit"
                className="p-5 text-white  md:rounded-r-full  bg-dark shadow-xl"
              >
                Subscibe Now
              </button>
            </form>
          </div>

          <p className="text-center text-white">
            True environmental protection lies in loving the mountains, the
            oceans and in cherishing all creation.
          </p>
        </div>
      </section>
    </>
  );
};

export default SignupNewsletter;
