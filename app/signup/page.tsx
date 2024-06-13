"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import Image from "next/image";




export default function SignupPage() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const onSignup = async () => {

        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup success", response.data);
            toast.success("Signup success");
            router.push("/login");

        } catch (error: any) {
            console.log("Signup failed", error.message);

            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);


    return (
<div className='md:pt-[7rem] w-full'>
    <div className='container mx-auto min-h-[60vh] my-auto flex flex-col justify-center items-center'>
        <Image src="/assets/images/logo.png" width={300} height={100} className='mx-auto' alt="Logo" />
        <h4 className='text-2xl text-center my-10 text-green'>{loading ? "Processing" : "Signup"}</h4>
        <form onSubmit={onSignup} className='flex flex-col gap-3 md:w-[50%] mx-auto'>
            <label htmlFor="username" className='text-[#2e2e84]'>Username</label>
            <input
                type="text"
                id="username"
                placeholder='Username'
                className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
                required
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
            <label htmlFor="email" className='text-[#2e2e84]'>Email</label>
            <input
                type="email"
                id="email"
                placeholder='Your Email'
                className='border-1 p-2 placeholder:text-[#2e2e84] text-green outline-none border-[#2e2e84] rounded-md'
                required
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <label htmlFor="password" className='text-[#2e2e84]'>Password</label>
            <input
                type="password"
                id="password"
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
                {buttonDisabled ? "No Signup" : (loading ? "Processing..." : "Signup")}
            </button>
        </form>
        <Link href="/login" className='text-[#2e2e84] mt-4'>Visit login page</Link>
    </div>
</div>

    )

}