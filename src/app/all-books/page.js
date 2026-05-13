"use client"; 
import { useState } from "react"; 
import booksData from "@/data/books.json";
// import booksData from "../../data/books.json";
// import booksData from "/src/data/books.json";
import { Button, Input } from "@heroui/react"; 
import Link from "next/link";
import { authClient } from "@/lib/auth-client"; 

export default function AllBooksPage() {
  
  const { data: session } = authClient.useSession();
  const [searchQuery, setSearchQuery] = useState(""); 
  
  const books = Array.isArray(booksData) ? booksData : [];


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">All Library Books</h1>
          <p className="text-gray-500 mt-2">Browse through our collection of available books.</p>
        </div>

        
        <div className="w-full md:w-80">
          <Input
            type="text"
            placeholder="Search by book or author..."
            variant="bordered"
            radius="xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="dark:text-white"
            startContent={
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
          />
        </div>
      </div>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredBooks.map((book) => (
          <div 
            key={book.id} 
            className="group border border-gray-100 dark:border-white/5 p-4 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all bg-white dark:bg-[#111112]"
          >
            <div>
              <div className="relative h-72 w-full mb-4 overflow-hidden rounded-xl bg-gray-50 dark:bg-black">
                <img 
                  src={book.image_url} 
                  alt={book.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <h3 className="font-bold text-lg leading-tight mb-1 truncate">
                {book.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{book.author}</p>
            </div>
            
            <Link href={session ? `/all-books/${book.id}` : "/login"}>
              <Button 
                variant="flat"
                className="w-full bg-black text-white dark:bg-white dark:text-black rounded-xl py-6 font-semibold"
              >
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>

      
      {filteredBooks.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No books found matching "{searchQuery}"</p>
          <Button 
            variant="light" 
            className="mt-2 text-blue-500"
            onClick={() => setSearchQuery("")}
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}