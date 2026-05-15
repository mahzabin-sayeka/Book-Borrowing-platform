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
  const [catOpen, setCatOpen] = useState(false); 
  
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

  
  const categories = ["Fiction", "Sci-Fi", "Romance", "History", "Programming", "Kids"];

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

          {/* Dynamic Category Dropdown Design */}
          <li className="relative">
            <button 
              onMouseEnter={() => setCatOpen(true)}
              onMouseLeave={() => setCatOpen(false)}
              className={`px-4 py-2 rounded-md flex items-center gap-1 ${pathname.includes("/categories") ? "bg-black text-white" : "hover:bg-gray-100"}`}
            >
              Categories
              <svg className={`w-4 h-4 transition-transform ${catOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>

            {/* Dropdown Menu */}
            {catOpen && (
              <div 
                onMouseEnter={() => setCatOpen(true)}
                onMouseLeave={() => setCatOpen(false)}
                className="absolute top-full left-0 w-48 bg-white border border-gray-100 shadow-xl rounded-xl py-2 z-[60] animate-in fade-in slide-in-from-top-1"
              >
                {categories.map((cat) => (
                  <Link 
                    key={cat}
                    // href={`/categories/${cat.toLowerCase()}`}
                    href={`/all-books?filter=${cat.toLowerCase()}`}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
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
            
            {/* Mobile Categories (Simple List) */}
            <div className="py-2">
              <p className="font-bold px-2 mb-1 text-gray-400 uppercase text-[10px]">Categories</p>
              {categories.slice(0, 4).map(cat => (
                <li key={cat}><Link href={`/categories/${cat.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="block p-2 text-gray-600">{cat}</Link></li>
              ))}
            </div>

            <hr />
            {!user ? (
              <div className="flex flex-col gap-2">
                <Link href="/signup" onClick={() => setMenuOpen(false)}>SignUp</Link>
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