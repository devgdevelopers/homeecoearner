"use client";
import { useState } from "react";
import QuillEditor from "./QuillEditor";

function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}

export default function AddProduct() {
    const [cardHeading, setCardHeading] = useState("");
    const [cardSubHeading, setCardSubHeading] = useState("");
    const [cardFeatures, setCardFeatures] = useState(["", ""]);
    const [shortDesc, setShortDesc] = useState("");
    const [cardImg, setCardImg] = useState("");
    const [images, setImages] = useState(["", ""]);
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cardHeading,
                cardSubHeading,
                cardFeatures,
                shortDesc,
                content,
                cardImg,
                images,
            }),
        });

        if (res.ok) {
            alert("Product added successfully!");
            setCardHeading("");
            setCardSubHeading("");
            setCardFeatures(["", ""]);
            setContent("");
            setShortDesc("");
            setCardImg("");
            setImages(["", ""]);
        } else {
            alert("Failed to add Product.");
        }
    };

    const handleFileUpload = async (e, setImageState) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setImageState(base64);
    };

    return (
        <div className="bg-white p-8 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div>
                        <label htmlFor="cardHeading" className="block text-sm font-medium text-gray-700">
                            Card Heading:
                        </label>

                                                <QuillEditor value={cardHeading} onChange={setCardHeading}  />
                    </div>


                    <div>
                        <label htmlFor="cardSubHeading" className="block text-sm font-medium text-gray-700">
                            Card Sub Heading:
                        </label>
                        <input
                            id="cardSubHeading"
                            type="text"
                            value={cardSubHeading}
                            onChange={(e) => setCardSubHeading(e.target.value)}
                            
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="cardFeatures" className="block text-sm font-medium text-gray-700">
                            Card Features:
                        </label>
                        {cardFeatures.map((feature, index) => (
                            <input
                                key={index}
                                id={`cardFeature${index}`}
                                type="text"
                                value={feature}
                                onChange={(e) => {
                                    const newFeatures = [...cardFeatures];
                                    newFeatures[index] = e.target.value;
                                    setCardFeatures(newFeatures);
                                }}
                                
                                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        ))}
                    </div>

                    <div>
                        <label htmlFor="shortDesc" className="block text-sm font-medium text-gray-700">
                            Short Description:
                        </label>
                        <textarea
                            id="shortDesc"
                            type="text"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content:
                        </label>
                        <QuillEditor value={content} onChange={setContent} />
                    </div> 

<div>
                        <label htmlFor="shortDesc" className="block text-sm font-medium text-gray-700">
                            Short Description:
                        </label>
                        <textarea
                            id="shortDesc"
                            type="text"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                            Content:
                        </label>
                        <QuillEditor value={content} onChange={setContent} />
                    </div>


                    <div>
                        <label htmlFor="cardImg" className="block text-sm font-medium text-gray-700">
                            Card Image:
                        </label>
                        <input
                            id="cardImg"
                            type="file"
                            accept=".jpeg, .png, .jpg"
                            onChange={(e) => handleFileUpload(e, setCardImg)}
                            
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                     <div>
                        <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                            Additional Images:
                        </label>
                        {images.map((image, index) => (
                            <input
                                key={index}
                                id={`image${index}`}
                                type="file"
                                accept=".jpeg, .png, .jpg, .svg"
                                onChange={(e) => handleFileUpload(e, (base64) => {
                                    const newImages = [...images];
                                    newImages[index] = base64;
                                    setImages(newImages);
                                })}
                                
                                className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                        ))}
                    </div> 

                    <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    );
}