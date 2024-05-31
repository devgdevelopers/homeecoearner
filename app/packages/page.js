import React from 'react'

const page = () => {
return (
<>

  <section className="md:mt-0 services-bg-images min-h-[50vh] bg-[#0a890d] my-auto text-white">
    <div className="container mx-auto flex flex-col justify-center items-center py-12">
      <h2 className="text-[20px] md:text-5xl font-bold mb-4 text-green">
        Our Packages
      </h2>
      <p className=" mx-auto text-center text-lg text-dark font-semibold">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia est
        magni, unde ipsam illo corrupti, minus eveniet dolorum obcaecati,
        tempora hic! Laborum eveniet voluptas labore. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Exercitationem deleniti cumque
        harum reiciendis illo, fuga itaque, enim, rem perspiciatis aperiam
        sit voluptatum quis a magni.
      </p>
    </div>
  </section>

  <section className="customer-pack-section py-0 md:py-10">
    <h1 className="text-[30px] md:text-[40px] text-dark font-bold text-center mb-5 w-[100%] md:-[50%]">
      Customer Packages
    </h1>
    <div className=" mx-auto flex flex-col sm:flex-row gap-5 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] pb-5">
      <div className="bg-dark w-[90%] md:w-[80%] rounded-xl mx-auto">
        <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-lg">
          <strong>Basic Package</strong>
          <span className="text-base">- Solar</span>
        </h1>
        <div className="text-white p-5">
          <p> • 2.7kW PV solar panels + inverter + controller</p>
          <p>• No upfront cost</p>
          <p>• Own your own power system</p>
          <p>• No more electricity bills</p>
        </div>
      </div>
      <div className="bg-dark w-[90%] md:w-[80%] rounded-xl mx-auto">
        <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-lg">
          <strong>Premium Package</strong>
          <span className="text-base">
            - Power System - Solar + Battery
          </span>
        </h1>
        <div className="text-white p-5">
          <p> • 2.7kW PV solar panels + inverter + controller</p>
          <p>• No upfront cost</p>
          <p>• Own your own power system</p>
          <p>• No more electricity bills</p>
        </div>
      </div>
    </div>
    <div className="mx-auto flex flex-col sm:flex-row gap-5 w-[95%] md:w-[90%] lg:w-[70%] xl:w-[60%] mb-5">
      <div className="bg-dark w-[90%] md:w-[70%] rounded-xl mx-auto">
        <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-lg">
          <strong>Hybrid Package </strong>
          <span className="text-base">- Solar + Battery + Wind</span>
        </h1>
        <div className="text-white p-5">
          <p>• Everything in Premium plus </p>
          <p>• 2x Mini wind turbines</p>
          <p>• Submission for any Planning </p>
          <p>• No upfront cost </p>
        </div>
      </div>
      <div className="bg-dark w-[90%] md:w-[70%] rounded-xl mx-auto">
        <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-lg">
          <strong>Ultimate Package</strong>
          <span className="text-base">
            - Solar + Battery + Wind + Power Booster
          </span>
        </h1>
        <div className="text-white p-5">
          <p>• Everything in Hybrid plus </p>
          <p>
            • Power Booster - enables you to generate excess electricity *
          </p>
          <p>• Gives you priority access to our new technology </p>
          <p>• No up front cost </p>
          <p>• Cost-free upgrade for Basic , Premium and Hybrid Packages</p>
          <p>• Convert a cost cost into an income </p>
          <p>• Potential to earn a meaningful regular income </p>
        </div>
      </div>
    </div>
  </section>
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
        <form action="" className="mx-auto flex flex-col md:flex-row justify-center items-center gap-3 md:gap-0">
          <input type="email" placeholder="Your Email Address "
            className="p-5 services-light-bg md:rounded-l-full text-black outline-none placeholder:text-black placeholder:font-semibold px-20 shadow-xl "
            required />
          <button type="submit" className="p-5 text-white  md:rounded-r-full  bg-dark shadow-xl">
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
)
}

export default page