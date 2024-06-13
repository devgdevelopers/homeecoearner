

"use client";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from '../../helpers/AuthContext';
import AddPackage from '../component/AddPackage';
import UpdatePackages from '../component/UpdatePackages';
import AddProduct from '../component/AddProduct';
import UpdateProducts from '../component/UpdateProducts';
import AddService from '../component/AddService';
import UpdateServices from '../component/UpdateServices';
import { MdOutlineAddComment } from "react-icons/md";
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdWidgets } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { TiDocumentText } from "react-icons/ti";
import { CgProfile } from "react-icons/cg";
import { gsap } from 'gsap';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { LuPackageCheck } from "react-icons/lu";
import { AiOutlineProduct } from "react-icons/ai";
import { MdMiscellaneousServices } from "react-icons/md";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("nothing");
    const [activeSection, setActiveSection] = useState("profile");
    const { logout } = useAuth();
    const [isBlogsOpen, setIsBlogsOpen] = useState(false);
    const [isProductOpen, setIsProductOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const update = async () => {
        router.push('/blog');
    };

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me');
        console.log(res.data);
        setData(res.data.data._id);
        setActiveSection("userDetails");
    };

    const takeMeToLogin = () => {
        router.push('/login');
    };

    const handleLogout = async () => {
        try {
            await axios.get('/api/users/logout');
            logout();
            window.history.pushState(null, "", window.location.href);
            window.addEventListener("popstate", () => {
                window.history.pushState(null, "", window.location.href);
            });
            localStorage.clear();
            sessionStorage.clear();
            toast.success('Logout successful');
            router.push('/login');
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error(error.response?.data?.message || "An error occurred");
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };

    // Call the handleLogout function after 5 seconds
    setTimeout(handleLogout, 18000000);



    const toggleBlogsMenu = () => {
        setIsBlogsOpen(!isBlogsOpen);
    };
    const toggleProductMenu = () => {
        setIsProductOpen(!isProductOpen);
    };
    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    const [packageCount, setpackageCount] = useState("...");

    const fetchpackageCount = async () => {
        try {
            const response = await fetch('/api/packages'); // Adjust the URL to match your API route
            const data = await response.json();
            setpackageCount(data.count);
        } catch (error) {
            console.error('Error fetching package count:', error);
        }
    };

    useEffect(() => {
        fetchpackageCount();
    }, []);


    const [productCount, setProductCount] = useState("...");

    const fetchProductCount = async () => {
        try {
            const response = await fetch('/api/products'); // Adjust the URL to match your API route
            const data = await response.json();
            setProductCount(data.count);
        } catch (error) {
            console.error('Error fetching blog count:', error);
        }
    };

    useEffect(() => {
        fetchProductCount();
    }, []);



    const [serviceCount, setServiceCount] = useState("...");

    const fetchServiceCount = async () => {
        try {
            const response = await fetch('/api/services'); // Adjust the URL to match your API route
            const data = await response.json();
            setServiceCount(data.count);
        } catch (error) {
            console.error('Error fetching blog count:', error);
        }
    };

    useEffect(() => {
        fetchServiceCount();
    }, []);


    return (
        <div className="flex min-h-screen pt-28">
            <aside className="w-1/5 bg-white text-white flex flex-col p-4 fixed h-full overflow-y-auto shadow-xl z-10">
                <h1 className="text-2xl mb-4 text-center text-black">Admin</h1>
                <button
                    onClick={() => {
                        setActiveSection("profile");
                        fetchpackageCount();
                        fetchProductCount();
                        fetchServiceCount() // Refresh the count
                    }}
                    className={`flex justify-between items-center ${activeSection === "profile" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <CgProfile />
                        Profile
                    </div>
                    <FaAngleRight />
                </button>


                <button
                    onClick={toggleBlogsMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <LuPackageCheck />
                        Packages
                    </div>
                    {isBlogsOpen ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isBlogsOpen && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("addPackages")}
                            className={`flex justify-between items-center ${activeSection === "addPackages" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Packages
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updatePackages")}
                            className={`flex justify-between items-center ${activeSection === "updatePackages" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Packages
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}


                <button
                    onClick={toggleProductMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <AiOutlineProduct />
                        Products
                    </div>
                    {isProductOpen ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isProductOpen && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("addProducts")}
                            className={`flex justify-between items-center ${activeSection === "addProducts" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Products
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updateProducts")}
                            className={`flex justify-between items-center ${activeSection === "updateProducts" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Products
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}


                <button
                    onClick={toggleServicesMenu}
                    className={`flex justify-between items-center  hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <MdMiscellaneousServices />
                        Services
                    </div>
                    {isServicesOpen ? <FaAngleDown /> : <FaAngleRight />}
                </button>
                {isServicesOpen && (
                    <div className="ml-6">
                        <button
                            onClick={() => setActiveSection("addService")}
                            className={`flex justify-between items-center ${activeSection === "addService" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <MdOutlineAddComment />
                                Add Service
                            </div>
                            <FaAngleRight />
                        </button>
                        <button
                            onClick={() => setActiveSection("updateService")}
                            className={`flex justify-between items-center ${activeSection === "updateService" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                        >
                            <div className="flex items-center gap-3">
                                <VscGitPullRequestGoToChanges />
                                Update Service
                            </div>
                            <FaAngleRight />
                        </button>
                    </div>
                )}

                <button
                    onClick={getUserDetails}
                    className={`flex justify-between items-center ${activeSection === "userDetails" ? 'bg-[#52c42f1f]' : ''} hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full`}
                >
                    <div className="flex items-center gap-3">
                        <MdWidgets />
                        Get User Details
                    </div>
                    <FaAngleRight />
                </button>

                <button
                    onClick={handleLogout}
                    className="flex justify-between items-center hover:bg-[#52c42f1f] text-gray-500 font-semibold py-2 px-4 rounded mt-3 w-full"
                >
                    <div className="flex items-center gap-3">
                        <RiLogoutBoxLine />
                        Logout
                    </div>
                </button>
            </aside>
            <main className="w-full bg-white p-4 pl-[22%] overflow-y-auto">
                {activeSection === "profile" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-8 font-bold">Hello Admin!</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">

                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center gap-1 group transition-all ease-in-out duration-300 " >
                                <LuPackageCheck className="text-2xl group-hover:scale-150 transition-all ease-in-out duration-300 group-hover:text-green-500"/>
                                <h2 className="text-xl font-semibold mb-2">Packages</h2>
                                <span className="text-3xl font-semibold text-green-500">{packageCount}</span>
                                <p className="text-gray-600">Total Packages</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center  group transition-all ease-in-out duration-300  gap-1">
                            <AiOutlineProduct className="text-2xl group-hover:scale-150 transition-all ease-in-out duration-300 group-hover:text-red-500"/>
                                <h2 className="text-xl font-semibold mb-2">Products</h2>
                                <span className="text-3xl font-semibold text-red-500">{ productCount }</span>
                                <p className="text-gray-600">Total Products</p>
                            </div>
                            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center group transition-all ease-in-out duration-300  gap-1">
                            <MdMiscellaneousServices className="text-2xl group-hover:scale-150 transition-all ease-in-out duration-300 group-hover:text-blue-500"/>
                                <h2 className="text-xl font-semibold mb-2">Services</h2>
                                <p className="text-3xl font-semibold text-blue-500">{serviceCount}</p>
                                <p className="text-gray-600">Total Services</p>
                            </div>
                        </div>

                    </div>
                )}

                {activeSection === "userDetails" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">User Details</h1>
                        <p>User ID: {data}</p>
                    </div>
                )}
                {activeSection === "addPackages" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Add Packages</h1>
                        <AddPackage />
                    </div>

                )}
                {activeSection === "updatePackages" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Update Packages</h1>
                        <UpdatePackages />
                    </div>
                )}
                {activeSection === "addProducts" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Add Product</h1>
                        <AddProduct />
                    </div>
                )}
                {activeSection === "updateProducts" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Update Product</h1>
                        <UpdateProducts />
                    </div>
                )}
                {activeSection === "addService" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Add Service</h1>
                        <AddService />
                    </div>
                )}
                {activeSection === "updateService" && (
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl mb-4">Update Service</h1>
                        <UpdateServices />
                    </div>
                )}
            </main>
        </div>
    );
}

