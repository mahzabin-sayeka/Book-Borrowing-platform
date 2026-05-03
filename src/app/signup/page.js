"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const router = useRouter();

    const handleSignUp = async (e) => {
        e.preventDefault();
        
        if (password.length < 8) {
            return toast.error("Password must be at least 8 characters long.");
        }

        const toastId = toast.loading("Creating account...");

        try {
            await authClient.signUp.email({
                email,
                password,
                name,
                image: image || `https://ui-avatars.com/api/?name=${name}`,
            }, {
                onSuccess: () => {
                    toast.success("Registered successfully! Welcome.", { id: toastId });
                    router.push("/"); 
                    router.refresh();
                },
                onError: (ctx) => {
                    toast.error(ctx.error.message || "Registration failed!", { id: toastId });
                }
            });
        } catch (err) {
            toast.error("An unexpected error occurred.", { id: toastId });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50 px-4">
            <div className="p-8 bg-white shadow-sm rounded-xl w-full max-w-md border border-gray-100">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
                
                <form onSubmit={handleSignUp} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input 
                            type="text" 
                            placeholder="John Doe" 
                            required 
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            onChange={(e) => setName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input 
                            type="email" 
                            placeholder="example@mail.com" 
                            required 
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Photo URL</label>
                        <input 
                            type="url" 
                            placeholder="https://example.com/photo.jpg" 
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            onChange={(e) => setImage(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input 
                            type="password" 
                            placeholder="Min 8 characters" 
                            required 
                            className="w-full p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black" 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    
                    <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors font-medium">
                        Sign Up
                    </button>
                </form>

                <div className="my-4 border-b text-center">
                    <span className="bg-white px-2 text-gray-400 text-xs uppercase">Or continue with</span>
                </div>
                
                <button 
                    type="button"
                    onClick={() => authClient.signIn.social({ provider: "google", callbackURL: "/" })} 
                    className="w-full border p-2 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                    Google
                </button>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Already have an account? <a href="/login" className="text-black font-bold hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;