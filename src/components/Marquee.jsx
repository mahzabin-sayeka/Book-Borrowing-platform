const Marquee = () => {
  const marqueeText = "New Arrivals: The Midnight Library | Special Discount on Memberships... | New Arrivals: Atomic Habits | Free Delivery for Premium Members... | ";

  return (
    <div className="bg-black py-3 md:py-4 overflow-hidden border-y border-gray-800 w-full flex">
      {/* animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      
      <div className="flex whitespace-nowrap">
       
        <div className="flex shrink-0 items-center text-white uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm animate-[marquee_30s_linear_infinite]">
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
        </div>

       
        <div className="flex shrink-0 items-center text-white uppercase tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm animate-[marquee_30s_linear_infinite]">
          <span className="px-4">{marqueeText}</span>
          <span className="px-4">{marqueeText}</span>
        </div>
      </div>
    </div>
  );
};

export default Marquee;