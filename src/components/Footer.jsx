

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

     
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

{/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
       
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="BookBorrow logo"
                width={32}
                height={32}
                className="dark:brightness-200"
              />
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                BookBorrow
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
              Your digital gateway to infinite stories. Borrow, read, and track your library with ease and speed.
            </p>
          </div>

 {/* Links.,, */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Library
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/all-books"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  All Books
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  My Borrowed Books
                </Link>
              </li>
            </ul>
          </div>

     {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Support
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-black dark:hover:text-white transition"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

         
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Start Reading
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Join our community of readers and borrow your first book today.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium transition-all duration-200 
              hover:scale-[1.02] hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-white/10"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Divide- */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

    {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} BookBorrow. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-black dark:hover:text-white transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-black dark:hover:text-white transition"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;