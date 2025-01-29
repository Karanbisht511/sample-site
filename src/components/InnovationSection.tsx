import React, { useState } from "react";

const InnovationSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-8 px-6 py-12 md:flex-nowrap md:gap-12 lg:px-24">
      {/* Left side with images */}
      <div className="lg:w-1/2 relative">
        <div className="aspect-square relative">
          {/* Architecture image - semi-circle on the left */}
          <div className="absolute left-0 top-0 w-3/5 h-4/5">
            <div className="relative w-full h-full overflow-hidden">
              <div className="absolute inset-0 bg-[#F5F5F5]">
                <img
                  src="https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/concept/concept-1.jpg"
                  alt="Modern architecture"
                  className="w-full h-full object-cover mix-blend-overlay opacity-40 grayscale"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>

          {/* Orange block - quarter circle top right */}
          <div className="absolute top-0 right-0 w-2/5 h-2/5">
            <div className="w-full h-full bg-[#FF5D38] rounded-tr-full" />
          </div>

          {/* Black curved section with jumping person */}
          <div className="absolute bottom-0 right-0 w-3/5 h-4/5 overflow-hidden rounded-br-full">
            <div className="relative w-full h-full bg-[#1A1A1A]">
              {/* "Something Great" text */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="text-white text-sm tracking-widest font-light">
                  SOMETHING GREAT
                </div>
              </div>

              {/* Person jumping */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3">
                <img
                  src="https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/concept/concept-3.jpg"
                  alt="Person jumping"
                  className="w-full filter brightness-0 invert"
                />
              </div>

              {/* Yellow road/path under the person */}
              <div className="absolute bottom-0 left-0 w-full">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/4 h-24 bg-[#FFC107]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="max-w-lg">
        <h2 className="text-3xl font-bold leading-snug md:text-4xl">
          Innovation to transform your organization.
        </h2>
        <p className="mt-4 text-gray-700">
          Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
          vehicula leo, vel efficitur felis ultrices non.
        </p>

        {/* Accordion */}
        <div className="mt-8 space-y-4">
          {["What We Do", "Pro Experience", "Partners and Investors"].map(
            (item, index) => (
              <div
                key={index}
                className="border-b border-gray-300 cursor-pointer"
              >
                <div
                  className="flex items-center justify-between py-4 text-lg font-medium text-gray-800"
                  onClick={() => toggleAccordion(item)}
                >
                  {item}
                  <span
                    className={`transform transition-transform ${
                      expanded === item ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </div>
                {expanded === item && (
                  <div className="px-4 pb-4 text-gray-600">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam posuere porta.
                    </p>
                  </div>
                )}
              </div>
            )
          )}
        </div>

        <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-orange-500 px-6 py-3 text-white hover:bg-orange-600">
          Learn More <span>→</span>
        </button>
      </div>
    </section>
  );
};

export default InnovationSection;
