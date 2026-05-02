import booksData from "@/data/books.json";
import { Button } from "@heroui/react";
import Link from "next/link";

const FeaturedBooks = () => {
  // 4 book select kora
  const featured = booksData.slice(0, 4);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featured.map((book) => (
          <div key={book.id} className="border dark:border-white/10 p-4 rounded-2xl shadow-sm hover:shadow-md transition-all">
            <div className="relative h-60 w-full mb-4 overflow-hidden rounded-xl">
              <img 
                src={book.image_url} 
                alt={book.title} 
                className="object-cover w-full h-full" 
              />
            </div>
            <h3 className="font-bold text-lg truncate">{book.title}</h3>
            <p className="text-gray-500 text-sm mb-4">{book.author}</p>
            
     {/* assignmnt recuirment view details */}
            <Link href={`/book/${book.id}`}>
              <Button className="w-full bg-black text-white dark:bg-white dark:text-black rounded-lg">
                View Details
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;