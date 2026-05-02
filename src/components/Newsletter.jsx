import { Button } from "@heroui/react";

const Newsletter = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6">
      <div className="bg-gray-100 dark:bg-[#111112] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-gray-200 dark:border-white/5">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold mb-4">Never Miss a New Book</h2>
          <p className="text-gray-500">Subscribe to get notified about new arrivals and special membership discounts.</p>
        </div>
        
        <div className="flex w-full md:w-auto gap-3">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="bg-white dark:bg-black border border-gray-300 dark:border-gray-800 rounded-xl px-4 py-3 w-full md:w-80 outline-none focus:border-black dark:focus:border-white transition-all"
          />
          <Button className="bg-black text-white dark:bg-white dark:text-black px-8 py-6 rounded-xl font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;