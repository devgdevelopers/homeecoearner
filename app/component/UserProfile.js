// "use client";
// import { useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import TalkAdvisor from "./TalkAdvisor";
// import Breadcrumb from '../component/BreadCrumb'

// const UserProfile = () => {
//   const searchParams = useSearchParams();
//   const userName = searchParams.get("name");

//   const [product, setProduct] = useState([]);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const id = window.location.pathname.split("/").pop();
//         if (id) {
//           const response = await fetch(`/api/products?id=${id}`);
//           const data = await response.json();
//           setProduct(data);
//         }
//       } catch (error) {
//         setError(error);
//         console.error("Fetch error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, []);

//   if (isLoading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error.message}</p>;
//   }

//   const renderCustomizedContent = (content) => {
//     // Custom styles for h1 and h2 tags
//     content = content.replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 25px; margin-bottom:10px; font-weight: 500;">');
//     content = content.replace(/<h3([^>]*)>/g, '<h3$1 style="font-size: 20px; font-weight: bold;">');
//     content = content.replace(/<p([^>]*)>/g, '<p$1 style="font-size: 18px; ">');
//     return { __html: content };
// };

//   return (
//     <>

//       <section className="bg-green">
//         <div className="container mx-auto" key={product._id}>
//           <div className="flex flex-col lg:flex-row px-5 py-10 gap-10">
//             <div className="flex justify-center items-center w-full lg:w-[40%] ">
//               <div className="product-img-bg w-[360px] h-[330px] p-10 my-auto flex">
//                 <Image
//                   src={product.cardImg}
//                   width={300}
//                   height={300}
//                   alt={product.cardHeading}
//                   className="mx-auto m-0 p-0  my-auto"
//                 />
//               </div>
//             </div>
//             <div className="w-[90%] lg:w-[60%] flex justify-center gap-2 flex-col mx-auto text-center md:text-left ">
//               <span
//                 className="text-[36px] lg:text-[48px] font-extrabold text-white"
//                 dangerouslySetInnerHTML={{ __html: product.cardHeading }}
//               />
//               <span
//                 className="text-[20px] md:text-[24px] font-semibold text-white"
//                 dangerouslySetInnerHTML={{ __html: product.cardSubHeading }}
//               />
//               <span
//                 className="text-[18px] text-white"
//                 dangerouslySetInnerHTML={{ __html: product.shortDesc }}
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Breadcrumb />

//       <section className="container mx-auto px-10 pb-10">
//         <h1 className="text-[30px] md:text-[42px] text-green text-center font-bold pb-10">
//           Key Features
//         </h1>
//         <div className="flex flex-col lg:flex-row  ">
//         <div className="w-[90%] lg:w-[60%] mx-auto">
//   <span
//     className=" text-black "
//     dangerouslySetInnerHTML={renderCustomizedContent(product.content)}
//   />
// </div>

//           <div className="flex flex-col justify-between items-center p-10 w-full lg:w-[40%]">
//   {product.images && product.images.length > 0 ? (
//     product.images.map((image, index) => (
//       image ? ( // Check if image is truthy (not null or undefined)
//         <Image
//           key={`${product._id}-${index}`} // Ensure each key is unique
//           width={100}
//           height={100}
//           src={image}
//           alt={`Image ${index + 1}`}
//           className="mx-auto  min-w-full md:min-w-fulll"
//         />
//       ) : null // If image is null or undefined, do not render
//     ))
//   ) : (
//     <p>No images available</p>
//   )}
// </div>

//         </div>
//       </section>

//       <TalkAdvisor />
//     </>
//   );
// };

// export default UserProfile;


"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import TalkAdvisor from "./TalkAdvisor";
import Breadcrumb from '../component/BreadCrumb'

const UserProfile = () => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");

  const [product, setProduct] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // flag to track component mount status

    const fetchProduct = async () => {
      try {
        const id = window.location.pathname.split("/").pop();
        if (id) {
          const response = await fetch(`/api/products?id=${id}`);
          if (!response.ok) throw new Error('Network response was not ok');
          const data = await response.json();
          if (isMounted) setProduct(data);
        }
      } catch (error) {
        if (isMounted) setError(error);
        console.error("Fetch error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchProduct();

    return () => {
      isMounted = false; // cleanup function
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const renderCustomizedContent = (content) => {
    if (!content) return { __html: "" };
    const styledContent = content
      .replace(/<h2([^>]*)>/g, '<h2$1 style="font-size: 25px; margin-bottom:10px; font-weight: 500;">')
      .replace(/<h3([^>]*)>/g, '<h3$1 style="font-size: 20px; font-weight: bold;">')
      .replace(/<p([^>]*)>/g, '<p$1 style="font-size: 18px;">');
    return { __html: styledContent };
  };

  return (
    <>
      <section className="bg-green">
        <div className="container mx-auto px-5 py-10">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="flex justify-center items-center w-full lg:w-1/2">
              <div className="product-img-bg w-[360px] h-[330px] p-10">
                <Image
                  src={product.cardImg}
                  width={300}
                  height={300}
                  alt={product.cardHeading}
                  className="mx-auto m-0 p-0  my-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-2 text-center lg:text-left">
              <h1 className="text-[36px] lg:text-[48px] font-extrabold text-white" dangerouslySetInnerHTML={{ __html: product.cardHeading }} />
              <h2 className="text-[20px] md:text-[24px] font-semibold text-white" dangerouslySetInnerHTML={{ __html: product.cardSubHeading }} />
              <p className="text-[18px] text-white" dangerouslySetInnerHTML={{ __html: product.shortDesc }} />
            </div>
          </div>
        </div>
      </section>
      <Breadcrumb />
      <section className="container mx-auto px-10 pb-10">
        <h1 className="text-[30px] md:text-[42px] text-green text-center font-bold pb-10">
          Key Features
        </h1>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-full lg:w-3/5">
            <div className="text-black" dangerouslySetInnerHTML={renderCustomizedContent(product.content)} />
          </div>
          <div className="w-full lg:w-2/5 flex flex-col justify-between items-center p-10">
            {product.images && product.images.length > 0 ? (
              product.images.map((image, index) => (
                image ? (
                  <Image
                    key={`${product._id}-${index}`}
                    width={100}
                    height={100}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="mx-auto  min-w-full md:min-w-fulll"
                  />
                ) : null
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>
      </section>
      <TalkAdvisor />
    </>
  );
};

export default UserProfile;
