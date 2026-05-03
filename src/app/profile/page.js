"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();
  const user = session?.user;

  useEffect(() => {
    
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-500">Loading your profile...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="border border-gray-200 rounded-3xl p-10 bg-white shadow-sm">
          <div className="flex flex-col items-center text-center">
            
            <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 flex items-center justify-center overflow-hidden border-2 border-black">
               {user.image ? (
                 <img src={user.image} alt="profile" className="w-full h-full object-cover" />
               ) : (
                 <span className="text-3xl font-bold">{user.name?.charAt(0)}</span>
               )}
            </div>

            
            <h1 className="text-2xl font-black mb-1">{user.name}</h1>
            <p className="text-gray-500 mb-6">{user.email}</p>

            <div className="w-full border-t pt-6 mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-400 uppercase font-bold">Account Status</span>
                <span className="text-green-600 font-bold">Active Member</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 uppercase font-bold">Role</span>
                <span className="text-gray-800">User</span>
              </div>
            </div>

            <button 
              onClick={() => router.push("/")}
              className="mt-8 w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProfilePage;