"use client"
import { useState } from 'react';
import QuillEditor from './QuillEditor';

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

export default function AddPackage() {
    const [title, setTitle] = useState('');
    const [shortDesc, setShortDesc] = useState('');
    const [img, setImg] = useState('');
    const [content, setContent] = useState('');
    const [features, setFeatures] = useState([{ id: 1, text: '' }]);
    const [postImage, setPostImage] = useState({ myFile: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/packages", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                title, 
                content, 
                shortDesc, 
                features: features.map(f => f.text), 
                img: postImage.myFile 
            }),
        });

        if (res.ok) {
            alert('Package added successfully!');
            setTitle('');
            setContent('');
            setShortDesc('');
            setImg('');
            setFeatures([{ id: 1, text: '' }]);
            setPostImage({ myFile: "" });
        } else {
            alert('Failed to add Package.');
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setPostImage({ myFile: base64 });
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = features.map((feature, i) => (
            i === index ? { ...feature, text: value } : feature
        ));
        setFeatures(newFeatures);
    };

    const addFeature = () => {
        setFeatures([...features, { id: features.length + 1, text: '' }]);
    };

    const removeFeature = (index) => {
        setFeatures(features.filter((_, i) => i !== index));
    };

    return (
        <div className="bg-white md:p-8 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title:</label>
                        <QuillEditor value={title} onChange={setTitle} />
                    </div>

                    {/* <div>
                        <label htmlFor="shortDesc" className="block text-sm font-medium text-gray-700">Short Description:</label>
                        <textarea
                            id="shortDesc"
                            value={shortDesc}
                            onChange={(e) => setShortDesc(e.target.value)}
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <div>
                        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content:</label>
                        <QuillEditor value={content} onChange={setContent} />
                    </div>

                    <div>
                        <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image:</label>
                        <input
                            name="myFile"
                            id="file-upload"
                            type="file"
                            accept='.jpeg, .png, .jpg'
                            onChange={handleFileUpload}
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div> */}

                    <div>
                        <label htmlFor="features" className="block text-sm font-medium text-gray-700">Features:</label>
                        {features.map((feature, index) => (
                            <div key={feature.id} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    value={feature.text}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                                />
                                <button type="button" onClick={addFeature} className="ml-2 p-1 text-4xl  text-green-500">+</button>
                                {features.length > 1 && (
                                    <button type="button" onClick={() => removeFeature(index)} className="ml-2 p-1 text-4xl text-red-500">-</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Add Package
                    </button>
                </form>
            </div>
        </div>
    );
}
