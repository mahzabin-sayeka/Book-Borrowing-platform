import booksData from "@/data/books.json";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function AllBooksPage() {
  
  const books = Array.isArray(booksData) ? booksData : [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">All Library Books</h1>
        <p className="text-gray-500 mt-2">Browse through our collection of available books.</p>
      </div>
      
      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
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
            
            <Link href={`/all-books/${book.id}`}>
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

      {/* if error hoy or boi na thake */}
      {books.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500">No books found in the library.</p>
        </div>
      )}
    </div>
  );
}