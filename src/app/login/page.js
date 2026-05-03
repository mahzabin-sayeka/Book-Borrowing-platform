"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Logging in...");

        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });

        if (error) {
            toast.error(error.message || "Invalid Credentials", { id: toastId });
        } else {
            toast.success("Successfully logged in!", { id: toastId });
            router.push("/"); 
            router.refresh(); 
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
            <div className="p-8 bg-white shadow-sm rounded-xl w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login to BookBorrow</h2>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <input 
                        type="email" 
                        placeholder="Email" 
                        required 
                        className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black" 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        required 
                        className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-black" 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit" className="w-full bg-black text-white p-2 rounded hover:bg-gray-800 transition-colors">
                        Login
                    </button>
                </form>

                <div className="my-4 border-b text-center">
                    <span className="bg-white px-2 text-gray-400 text-sm">OR</span>
                </div>
                
                <button 
                    type="button"
                    onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })} 
                    className="w-full border p-2 rounded flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                    Login with Google
                </button>

                <p className="mt-4 text-center text-sm">
                    Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Register</a>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;