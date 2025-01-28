import React from 'react';

const StatsShowcase = () => {
  const stats = [
    {
      number: "123+",
      description: "Elit cras a elit sit amet leo accumsan volutpat."
    },
    {
      number: "15+",
      description: "Sit cras a elit sit amet leo accumsan volutpat."
    },
    {
      number: "45+",
      description: "Lorem a elit sit amet leo accumsan volutpat."
    },
    {
      number: "345+",
      description: "Cras a elit sit amet leo accumsan volutpat."
    },
    {
      number: "567+",
      description: "Magna cras a elit sit amet leo accumsan volutpat."
    },
    {
      number: "89+",
      description: "Vestibulum cras a elit sit amet leo accumsan volutpat."
    },
    {
      number: "250+",
      description: "Nullam cras a elit sit amet leo accumsan volutpat."
    }
  ];

  // Repeat the stats array 3 times
  const repeatedStats = [...stats, ...stats, ...stats];

  return (
    <div className="w-full bg-white px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
        Excellent results for over more than 10 years in the creative market.
      </h1>
      
      <div className="relative">
        <div className="overflow-x-scroll">
          <div className="inline-flex space-x-6 pb-4" style={{ minWidth: 'max-content' }}>
            {repeatedStats.map((stat, index) => (
              <div 
                key={index}
                className="bg-black text-white p-8 flex-none w-80 cursor-grab active:cursor-grabbing"
              >
                <div className="flex flex-col space-y-4">
                  <span className="text-5xl md:text-6xl font-bold">
                    {stat.number}
                  </span>
                  <p className="text-gray-300 text-lg">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Gradient shadows to indicate scrollable content */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default StatsShowcase;

{/* Add custom scrollbar styling */}
<style jsx global>{`
  .overflow-x-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.3) transparent;
  }
  
  .overflow-x-scroll::-webkit-scrollbar {
    height: 6px;
  }
  
  .overflow-x-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .overflow-x-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`}</style>