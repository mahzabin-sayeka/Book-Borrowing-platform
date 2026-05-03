"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client"; 
import toast from "react-hot-toast"; 

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { data: session } = authClient.useSession();
  const user = session?.user; 

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success("Logged out successfully!");
          router.push("/login");
          router.refresh();
        },
      },
    });
  };

  return (
    <div className="border-b px-4 bg-white relative">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/logo.png"}
            alt="logo"
            width={30}
            height={30}
            className="h-auto w-auto"
          />
          <h3 className="font-black text-lg">BookBorrow</h3>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-2 text-sm font-medium">
          <li>
            <Link href="/" className={`px-4 py-2 rounded-md ${pathname === "/" ? "bg-black text-white" : "hover:bg-gray-100"}`}>Home</Link>
          </li>
          <li>
            <Link href="/all-books" className={`px-4 py-2 rounded-md ${pathname === "/all-books" ? "bg-black text-white" : "hover:bg-gray-100"}`}>All Books</Link>
          </li>
          
          {user && (
            <li>
              <Link href="/profile" className={`px-4 py-2 rounded-md ${pathname === "/profile" ? "bg-black text-white" : "hover:bg-gray-100"}`}>Profile</Link>
            </li>
          )}
          <li>
            <Link href="/categories" className={`px-4 py-2 rounded-md ${pathname === "/categories" ? "bg-black text-white" : "hover:bg-gray-100"}`}>Categories</Link>
          </li>
        </ul>

        {/* Auth & Toggle */}
        <div className="flex items-center gap-4">
          <ul className="hidden md:flex items-center text-sm gap-4">
            {!user ? (
              <>
                <li><Link href="/signup">SignUp</Link></li>
                <li><Link href="/login" className="font-bold text-black">Login</Link></li>
              </>
            ) : (
              <>
                <li className="font-bold italic text-green-600">{user.name}</li>
                <li>
                  <button 
                    onClick={handleLogout}
                    className="text-red-500 font-medium hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-1 border rounded"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Menu for Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t absolute top-full left-0 w-full z-50 p-4 shadow-lg">
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" onClick={() => setMenuOpen(false)} className={`block p-2 rounded ${pathname === "/" ? "bg-black text-white" : ""}`}>Home</Link></li>
            <li><Link href="/all-books" onClick={() => setMenuOpen(false)} className={`block p-2 rounded ${pathname === "/all-books" ? "bg-black text-white" : ""}`}>All Books</Link></li>
            {user && <li><Link href="/profile" onClick={() => setMenuOpen(false)} className={`block p-2 rounded ${pathname === "/profile" ? "bg-black text-white" : ""}`}>Profile</Link></li>}
            <li><Link href="/categories" onClick={() => setMenuOpen(false)} className={`block p-2 rounded ${pathname === "/categories" ? "bg-black text-white" : ""}`}>Categories</Link></li>
            <hr />
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/register" onClick={() => setMenuOpen(false)}>SignUp</Link>
                <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
              </div>
            ) : (
              <div className="flex justify-between items-center">
                <span className="font-bold italic text-green-600">{user.name}</span>
                <button 
                  onClick={handleLogout}
                  className="text-red-500 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;