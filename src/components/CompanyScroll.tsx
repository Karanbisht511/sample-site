import React from "react";

interface Company {
  name: string;
  logo: JSX.Element;
}

const CompanyScroll: React.FC = () => {
  const companies: Company[] = [
    {
      name: "DAVID SMITH",
      logo: (
        <svg className="h-8" viewBox="0 0 120 30" fill="currentColor">
          <text x="0" y="20" className="font-bold">
            DAVID SMITH
          </text>
        </svg>
      ),
    },
    {
      name: "DESIGNLOVERS",
      logo: (
        <div className="flex flex-col items-center">
          <span className="font-medium text-sm">DESIGNLOVERS</span>
          <span className="text-xs">GEEKHEAVEN</span>
        </div>
      ),
    },
    {
      name: "GOLDENGRID",
      logo: (
        <div className="flex items-center">
          <span className="font-bold text-lg">GOLDEN</span>
          <span className="font-light text-lg">GRID.</span>
        </div>
      ),
    },
    {
      name: "CLIMB THE MOUNTAIN",
      logo: (
        <div className="flex items-center space-x-1">
          <span className="bg-black text-white px-2 py-1 text-xs">ctm</span>
          <span className="font-medium text-sm">CLIMB THE MOUNTAIN</span>
        </div>
      ),
    },
    {
      name: "GOLDEN",
      logo: (
        <div className="transform rotate-180">
          <span className="font-bold text-lg">GOLDEN</span>
        </div>
      ),
    },
    {
      name: "avant garde",
      logo: (
        <div className="flex items-center space-x-1">
          <span className="font-light italic">avant</span>
          <span className="font-bold">garde</span>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden bg-white py-12">
      <div className="mb-16">
        <h2 className="text-center text-3xl font-bold mb-8">
          Trusted by great companies like
        </h2>

        {/* Infinite scroll container */}
        <div className="relative flex overflow-x-hidden">
          {/* First set of logos */}
          <div className="animate-scroll flex space-x-16 whitespace-nowrap">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex items-center justify-center min-w-[200px] h-16"
              >
                {company.logo}
              </div>
            ))}
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="animate-scroll flex space-x-16 whitespace-nowrap">
            {companies.map((company, index) => (
              <div
                key={`${company.name}-${index}-duplicate`}
                className="flex items-center justify-center min-w-[200px] h-16"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Loved by people
          <span className="mx-2">check out how we help</span>
          customers across the
          <span className="mx-2">globe.</span>
        </h2>
      </div>

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default CompanyScroll;
