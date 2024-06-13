
"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../helpers/AuthContext';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();
    const [user, setUser] = useState({
        email: "",
        password: "",
    });
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [loading, setLoading] = useState(false);

    const onLogin = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);
            console.log("Login success", response.data);
            toast.success("Login success");

            // Use context login function
            login(response.data.token);

            router.push("/profile");
        } catch (error) {
            console.log("Login failed", error.message);
            toast.error(error.message + "\nPlease enter correct id password");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);

    return (
        <div className='md:pt-[7rem] w-full'>
            <div className='container mx-auto min-h-[60vh] my-auto flex flex-col justify-center items-center'>
                <Image src="/assets/images/logo.png" width={300} height={100} className='mx-auto' alt="Logo" />
                <h4 className='text-2xl text-center my-10 text-green'>Admin, Please Login</h4>
                <form onSubmit={onLogin} className='flex flex-col gap-3 md:w-[50%] mx-auto'>
                    <input
                        type="email"
                        placeholder='Your Email'
                        className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
                        required
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder='Your Password'
                        className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
                        required
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <button
                        type='submit'
                        className='bg-green w-[250px] p-2 text-white mx-auto my-3 rounded-md'
                        disabled={buttonDisabled || loading}
                    >
                        {loading ? "Processing..." : "Submit"}
                    </button>
                </form>
            </div>
        </div>
    );
}