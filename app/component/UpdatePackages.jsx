"use client"

import React, { useEffect, useState } from "react";
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

export default function UpdatePackages() {
    const [packages, setPackages] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentPack, setCurrentPack] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedShortDesc, setUpdatedShortDesc] = useState('');
    const [updatedContent, setUpdatedContent] = useState('');
    const [updatedImage, setUpdatedImage] = useState('');
    const [updatedFeatures, setUpdatedFeatures] = useState([{ id: 1, text: '' }]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPackages();
    }, []);

    const fetchPackages = () => {
        fetch('/api/packages')
            .then(response => response.json())
            .then(data => {
                setPackages(data.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Fetch error:', error);
                setLoading(false);
            });
    };

    const updatePack = (id) => {
        fetch(`/api/packages?id=${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: updatedTitle, 
                content: updatedContent, 
                shortDesc: updatedShortDesc, 
                features: updatedFeatures.map(f => f.text),
                img: updatedImage 
            })
        })
            .then(response => response.json())
            .then(() => {
                fetchPackages();
                setIsEditing(false);
                setCurrentPack(null);
            })
            .catch(error => console.error('Update error:', error));
    };

    const deletePack = (id) => {
        fetch(`/api/packages?id=${id}`, { method: 'DELETE' })
            .then(response => response.json())
            .then(() => fetchPackages())
            .catch(error => console.error('Delete error:', error));
    };

    const startEditing = (pack) => {
        setIsEditing(true);
        setCurrentPack(pack);
        setUpdatedTitle(pack.title);
        setUpdatedShortDesc(pack.shortDesc);
        setUpdatedContent(pack.content);
        setUpdatedImage(pack.img);
        setUpdatedFeatures(pack.features.map((feature, index) => ({ id: index + 1, text: feature })));
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        const base64 = await convertToBase64(file);
        setUpdatedImage(base64);
    };

    const handleFeatureChange = (index, value) => {
        const newFeatures = updatedFeatures.map((feature, i) => (
            i === index ? { ...feature, text: value } : feature
        ));
        setUpdatedFeatures(newFeatures);
    };

    const addFeature = () => {
        setUpdatedFeatures([...updatedFeatures, { id: updatedFeatures.length + 1, text: '' }]);
    };

    const removeFeature = (index) => {
        setUpdatedFeatures(updatedFeatures.filter((_, i) => i !== index));
    };

    return (
        <div className="p-8 flex justify-center items-center ">
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <div className="loader_ ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
                </div>
            ) : (
                <div className="flex flex-wrap m-4">
                    {packages.length === 0 ? (
                        <div className="text-center w-full text-xl text-gray-500">No packages to show</div>
                    ) : (
                        packages.map(pack => (
                            <div key={pack._id} className="p-4">
                                <div className="h-[340px] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-md">
                                    <div className="p-6 flex flex-col gap-4 w-80 relative">
                                        <img src={pack.img} alt="" height={300} width={300} />
                                        <h2 className="text-xl font-semibold truncate">{pack.title}</h2>
                                        <div className='flex gap-3 absolute top-[270px]'>
                                            <button onClick={() => deletePack(pack._id)} className="bg-red-500 text-white rounded p-2 border border-red-500 hover:border-white">Delete</button>
                                            <button onClick={() => startEditing(pack)} className="bg-green-500 text-white p-2 rounded border border-green-500 hover:border-white">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {isEditing && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-10 flex items-center justify-center backdrop-blur border border-frost rounded-lg shadow-md transition">
                    <div className="bg-white p-6 rounded shadow-lg w-[800px] h-[700px]">
                        <h2 className="text-2xl mb-4 text-black">Edit Package</h2>
                        <label className="block mb-2 text-black font-medium">Title</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            placeholder='title'
                            type="text"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                        />
                        <label className="block mb-2 text-black font-medium">Short Description</label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded mb-4 text-black"
                            value={updatedShortDesc}
                            onChange={(e) => setUpdatedShortDesc(e.target.value)}
                        />
                        <label className="block mb-2 text-black font-medium">Content</label>
                        <QuillEditor value={updatedContent} onChange={setUpdatedContent} />
                        
                        <label className="block mb-2 mt-4 text-black font-medium">Image</label>
                        <input
                            name="myFile"
                            id="file-upload"
                            type="file"
                            accept='.jpeg, .png, .jpg'
                            onChange={handleFileUpload}
                            className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                        
                        <label className="block mb-2 mt-4 text-black font-medium">Features</label>
                        {updatedFeatures.map((feature, index) => (
                            <div key={feature.id} className="flex items-center mb-2">
                                <input
                                    type="text"
                                    value={feature.text}
                                    onChange={(e) => handleFeatureChange(index, e.target.value)}
                                    className="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                                <button type="button" onClick={addFeature} className="ml-2 p-1 text-4xl text-green-500">+</button>
                                {updatedFeatures.length > 1 && (
                                    <button type="button" onClick={() => removeFeature(index)} className="ml-2 p-1 text-4xl text-red-500">-</button>
                                )}
                            </div>
                        ))}
                        
                        <button onClick={() => updatePack(currentPack._id)} className="bg-blue-500 text-white p-2 rounded mt-6">Save</button>
                        <button onClick={() => { setIsEditing(false); setCurrentPack(null); }} className="bg-gray-500 text-white p-2 rounded ml-2 mt-6">Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
}
