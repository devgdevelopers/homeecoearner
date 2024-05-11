import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between absolute top-0 left-0 w-full">
      {/* banner section  */}
      <section className="main-banner w-full h-[50vh] lg:h-screen  flex flex-col justify-end">
        <div className="mx-auto pb-20 ">
          <p className="text-white text-2xl font-semibold">
            Ready to get your electricity costs under control and give your self
            the chance to transform your costs into income?
          </p>
          <p className="text-white text-center text-xl font-semibold">
            Join us today!
          </p>
        </div>
      </section>

      {/* Products Section  */}
      <section className="w-full product-sec-bg">
        <div className="grid md:grid-cols-3 grid-cols-1 w-[90%] xl:w-[70%] mx-auto gap-10 py-10">
          <div className="bg-white grid justify-center  p-5 rounded-3xl">
            <Image
              src="/assets/images/Product01.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
              Battery Energy Storage System
            </h3>
          </div>
          <div className="bg-white grid justify-center  p-5 rounded-3xl">
            <Image
              src="/assets/images/Product02.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
              HF-H Series Inverter
            </h3>
          </div>
          <div className="bg-white grid justify-center  p-5 rounded-3xl">
            <Image
              src="/assets/images/Product03.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3 className="text-[18px] text-center text-green-600 font-semibold my-2">
              SR-182 Series Solar Panels
            </h3>
          </div>
        </div>
      </section>

      {/* join the queue section  */}
      <section className="joinform-section w-full p-5 ">
        <div className=" w-full h-screen p-0 container mx-auto">
          <h2 className="text-3xl text-green text-center font-bold mb-5">
            Join The Queue Today{" "}
          </h2>
          <div className="  flex flex-col w-[90%] md:w-[60%] xl:w-[50%] mx-auto join-form-innerdiv rounded-2xl">
            <form action="" className="flex flex-col gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="border-green p-3 rounded-xl"
              />
              <input
                type="text"
                placeholder="Email"
                className="border-green p-3 rounded-xl"
              />
              <button className="bg-green text-white p-3 rounded-3xl font-semibold">
                Join Waiting List
              </button>
              <span className="text-green text-center text-sm">
                Privacy Policy : We promise to keep your data safe.
              </span>
            </form>
          </div>
        </div>
      </section>

      {/* sign up step section  */}
      <section className="signup-step-section">
        <div className="container mx-auto my-5">
          <h1 className="text-[30px] text-green font-semibold text-center mb-5 w-[50%]">
            Sign up for our Home EcoEarner Power System today and experience the
            future of renewable energy
          </h1>
          <div className="flex flex-col md:flex-row justify-center">
            <div className="w-[100%] md:w-[60%] flex justify-center ">
              <div className="flex flex-col gap-5 justify-center">
                <div className="flex gap-5 ">
                  <Image
                    src="/assets/images/step1.jpg"
                    width={100}
                    height={100}
                    alt="step1"
                    className="w-[70px] h-[70px]"
                  ></Image>
                  <ul className="text-xl text-dark font-medium flex  flex-col gap-2">
                    <li>• Get Your electricity costs under control</li>
                    <li>• No up-front cost </li>
                    <li>• No electricity bills </li>
                    <li>• No more electricity price hikes </li>
                  </ul>
                </div>
                <div className="flex gap-5">
                  <Image
                    src="/assets/images/step2.jpg"
                    width={100}
                    height={100}
                    alt="step2"
                    className="w-[70px] h-[70px] bg-inherit"
                  ></Image>
                  <ul className="text-xl text-dark font-medium w-[80%] flex  flex-col gap-2">
                    <li>
                      • Line yourself up for cost-free access to our new
                      technologies as they come to market
                    </li>
                    <li>
                      • We promise to install our Home EcoEarner Power Booster
                      upon release.
                    </li>
                    <li>• You pay nothing upfront. </li>
                    <li>
                      • We buy excess electricity from you, putting money back
                      into your pocket.
                    </li>
                    <li>• Say goodbye to out-of-pocket expenses.</li>
                    <li>
                      • And when possible, we pay you instead of the other way
                      around.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[100%] md:w-[40%] flex justify-center md:justify-start my-6">
              <div className="solar-house-div w-[50%]">
                <Image
                  src="/assets/images/solarhouse.jpg"
                  width={100}
                  height={100}
                  alt="solar house"
                  className="w-[100%] solar-house-img rounded-2xl "
                  unoptimized
                ></Image>
              </div>
            </div>
          </div>
          <div className="md:m-3">
            <p className="text-[20px] text-green font-semibold text-start ">
              Join our priority list today!
            </p>
            <p className="text-[20px] text-green font-semibold text-start mb-5">
              Join us in this exciting journey towards sustainable and
              income-generating energy solutions.
            </p>
          </div>
        </div>
      </section>

      {/* customer packages  */}
      <section className="customer-pack-section py-10">
        <h1 className="text-[40px] text-dark font-semibold text-center my-3">
          Customer Packages
        </h1>
        <div className=" mx-auto flex flex-row gap-10 w-[60%] my-5">
          <div className="bg-dark w-[70%] rounded-xl mx-auto">
            <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-xl">
              <strong>Basic Package</strong> - Solar
            </h1>
            <div className="text-white p-5">
              <p> • 2.7kW PV solar panels + inverter + controller</p>
              <p>• No upfront cost</p>
              <p>• Own your own power system</p>
              <p>• No more electricity bills</p>
            </div>
          </div>
          <div className="bg-dark w-[70%] rounded-xl mx-auto">
            <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-xl">
              <strong>Premium Package</strong> - Power System - Solar + Battery
            </h1>
            <div className="text-white p-5">
              <p> • 2.7kW PV solar panels + inverter + controller</p>
              <p>• No upfront cost</p>
              <p>• Own your own power system</p>
              <p>• No more electricity bills</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex flex-row gap-10 w-[60%] my-5">
          <div className="bg-dark w-[70%] rounded-xl mx-auto">
            <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-xl">
              <strong>Hybrid Package </strong> - Solar + Battery + Wind
            </h1>
            <div className="text-white p-5">
              <p>• Everything in Premium plus </p>
              <p>• 2x Mini wind turbines</p>
              <p>• Submission for any Planning </p>
              <p>• No upfront cost </p>
            </div>
          </div>
          <div className="bg-dark w-[70%] rounded-xl mx-auto">
            <h1 className="text-[#ffb800] bg-[#004202] my-3 py-4 px-3 text-xl">
              <strong>Ultimate Package</strong> - Solar + Battery + Wind + Power
              Booster
            </h1>
            <div className="text-white  p-5">
              <p>• Everything in Hybrid plus </p>
              <p>
                • Power Booster - enables you to generate excess electricity *
              </p>
              <p>• Gives you priority access to our new technology </p>
              <p>• No up front cost </p>
              <p>
                • Cost-free upgrade for Basic , Premium and Hybrid Packages
              </p>
              <p>• Convert a cost cost into an income </p>
              <p>• Potential to earn a meaningful regular income </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
