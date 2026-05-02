import booksData from "@/data/books.json";
import Link from "next/link";

export default async function BookDetailsPage({ params }) {
  
  const { id } = await params;

  // JSON data find
  const book = booksData.find((b) => b.id.toString() === id);

  // if no boook
  if (!book) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">Book not found!</h2>
        <Link href="/all-books" className="mt-4 text-blue-500 underline">Return to Library</Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back Link */}
      <Link href="/all-books" className="text-sm text-gray-400 hover:text-black mb-10 inline-block transition-colors">
        ← Back to all books
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* left img */}
        <div className="rounded-2xl overflow-hidden bg-gray-50 flex justify-center p-6">
          <img 
            src={book.image_url} 
            alt={book.title} 
            className="w-full max-w-[300px] h-auto rounded-lg shadow-sm"
          />
        </div>

        {/* info right */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold mb-2">{book.title}</h1>
            <p className="text-xl text-gray-500 font-medium">{book.author}</p>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-3">About this book</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              {book.description || "No specific description provided for this masterpiece. Please explore the physical copy for more details."}
            </p>
          </div>

          <div className="pt-6">
            <p className="text-sm text-gray-400">Status: <span className="text-green-500 font-bold">Available</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}