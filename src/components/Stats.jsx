const Stats = () => {
  const stats = [
    { label: "Active Readers", value: "10k+" },
    { label: "Books Available", value: "5k+" },
    { label: "Books Borrowed", value: "15k+" },
    { label: "Community Rating", value: "4.9/5" },
  ];

  return (
    <section className="bg-black py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-3xl md:text-4xl font-bold text-white">{stat.value}</h3>
            <p className="text-gray-400 text-sm md:text-base uppercase tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;