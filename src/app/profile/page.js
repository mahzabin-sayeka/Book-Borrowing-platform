"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link"; 

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
        <p className="text-gray-500 animate-pulse">Loading your profile...</p>
      </div>
    );
  }

  if (user) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20">
        <div className="border border-gray-200 rounded-3xl p-10 bg-white shadow-sm">
          <div className="flex flex-col items-center text-center">
            
            {/* Profile Image Section */}
            <div className="relative group">
              <div className="w-24 h-24 bg-gray-100 rounded-full mb-6 flex items-center justify-center overflow-hidden border-2 border-black shadow-md">
                 {user.image ? (
                   <img src={user.image} alt="profile" className="w-full h-full object-cover" />
                 ) : (
                   <span className="text-3xl font-bold">{user.name?.charAt(0)}</span>
                 )}
              </div>
            </div>

            {/* User docu */}
            <h1 className="text-2xl font-black mb-1">{user.name}</h1>
            <p className="text-gray-500 mb-6">{user.email}</p>

            {/* Status /.. */}
            <div className="w-full border-t border-b border-gray-100 py-6 my-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 uppercase font-bold tracking-tighter">Account Status</span>
                <span className="text-green-600 font-bold">Active Member</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400 uppercase font-bold tracking-tighter">Role</span>
                <span className="text-gray-800">User</span>
              </div>
            </div>

            {/* update */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mt-6">
              <button 
                onClick={() => router.push("/profile/update")}
                className="bg-white border-2 border-black text-black py-3 rounded-xl font-bold hover:bg-gray-50 transition"
              >
                Update Info
              </button>
              
              <button  
                onClick={() => router.push("/")}
                className="bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Back to Home
              </button>
            </div>

            <button 
                onClick={async () => {
                    await authClient.signOut();
                    router.push("/login");
                }}
                className="mt-6 text-sm text-red-500 font-bold hover:underline"
            >
                Log Out
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default ProfilePage;