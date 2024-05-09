import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between absolute top-0 left-0 w-full">
      {/* banner section  */}
      <section className="main-banner w-full h-[50vh] lg:h-screen  flex flex-col justify-end ">
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
      <section className="w-full product-sec-bg ">
        <div className="grid grid-cols-3 container mx-auto gap-10 py-10">
          <div className="bg-white flex flex-col justify-center align-center p-2" >
            <Image
              src="/assets/images/Product01.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3>Battery Energy Storage System</h3>
          </div>
          <div className="bg-white  flex flex-col justify-center align-center p-2">
            <Image
              src="/assets/images/Product02.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3>HF-H Series Inverter</h3>
          </div>
          <div className="bg-white  flex flex-col justify-center align-center p-2">
            <Image
              src="/assets/images/Product03.jpg"
              width={300}
              height={100}
              alt="product1"
            ></Image>
            <h3>SR-182 Series Solar Panels</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
