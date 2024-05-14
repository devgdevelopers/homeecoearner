import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <section className="relative mt-[6rem] container mx-auto flex">
        <div>
          <h2>FAQs</h2>
          <p>
            Have questions ? We Have answers ! Here are some common responses
            that may be helpful.
          </p>
        </div>
        <div>
          <Image
            src="/assets/images/faq-img.png"
            width={100}
            height={100}
            alt="faq iamge"
            unoptimized
          ></Image>
        </div>
      </section>
    </>
  );
};

export default page;
