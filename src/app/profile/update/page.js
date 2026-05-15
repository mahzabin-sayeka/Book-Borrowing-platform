"use client";
import React, { useState } from 'react';
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const router = useRouter();

    const handleUpdate = async (e) => {
        e.preventDefault();
        const toastId = toast.loading("Updating...");

        await authClient.updateUser({
            name: name || undefined,
            image: image || undefined,
        }, {
            onSuccess: () => {
                toast.success("Updated!", { id: toastId });
                router.push("/profile");
                router.refresh();
            },
            onError: (ctx) => {
                toast.error(ctx.error.message, { id: toastId });
            }
        });
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 border rounded-lg">
            <h2 className="text-xl font-bold mb-4">Update Profile</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
                <input 
                    type="text" 
                    placeholder="New Name" 
                    className="w-full p-2 border rounded" 
                    onChange={(e) => setName(e.target.value)} 
                />
                <input 
                    type="url" 
                    placeholder="New Photo URL" 
                    className="w-full p-2 border rounded" 
                    onChange={(e) => setImage(e.target.value)} 
                />
                <button type="submit" className="w-full bg-black text-white p-2 rounded">
                    Save Changes
                </button>
            </form>
            <button onClick={() => router.back()} className="w-full mt-2 text-gray-500 text-sm">
                Cancel
            </button>
        </div>
    );
};

export default UpdateProfile;