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
login(response.data.token);
router.push("/profile");
toast.success("Login success");

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
<div className=' w-full'>
    <div className='container mx-auto min-h-[60vh] my-auto flex flex-col justify-center items-center'>
       
     
     
        <form onSubmit={onLogin} className="bg-white shadow-xl rounded px-10 pt-6 pb-8 mb-4">
        <Image src="/assets/images/logo-final.svg" width={250} height={100} className='mx-auto my-10' alt="Logo" />
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Email
        </label>
        <input
            className="shadow appearance-none border rounded w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="email" placeholder="Email"  required value={user.email} onChange={(e)=> setUser({ ...user, email: e.target.value })} />
    </div>
    <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
        <input
            className="shadow appearance-none border  rounded w-full py-5 px-5 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************"  required value={user.password} onChange={(e)=> setUser({ ...user, password: e.target.value })} />
        {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between">
        <button
            className="bg-green hover:bg-green text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"  disabled={buttonDisabled || loading}>
            {loading ? "Processing..." : "Submit"}
        </button>
        {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a> */}
    </div>
</form> 
    </div>
</div>
);
}