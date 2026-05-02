// import { Button } from "@heroui/react";
// import Link from "next/link";

// const Banner = () => {
//   return (

// export default Banner;

import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop')] h-[60vh] w-full bg-cover bg-no-repeat bg-center flex items-center rounded-lg shadow-2xl">
      
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center ">
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Find Your Next Read
          </h1>
          
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Explore thousands of books, track your reading, and borrow with ease. Your digital social logbook for reading.
          </p>

          <div className="flex gap-4">
            
            <Link href="/all-books">
              <Button className="bg-black text-white border border-gray-700 hover:bg-gray-900 transition-all px-8 py-6">
                Browse Now
              </Button>
            </Link>

            <Link href="/profile">
              <Button variant="bordered" className="text-white border-white hover:bg-white/10 px-8 py-6">
                My Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;