import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast"; 

const OutfitFont = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "BookBorrow",
  description: "Online Book Borrowing Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${OutfitFont.className} h-full antialiased`}
    >
      <body>
      
        <Toaster position="top-center" reverseOrder={false} />
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
