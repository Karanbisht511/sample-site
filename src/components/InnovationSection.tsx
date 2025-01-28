import React, { useState } from "react";

const InnovationSection: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setExpanded(expanded === section ? null : section);
  };

  return (
    <section className="flex flex-wrap items-center justify-center gap-8 px-6 py-12 md:flex-nowrap md:gap-12 lg:px-24">
      {/* Left: Graphics */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
        <div className="rounded-tl-full bg-gray-200">
          <img
            src="/building.jpg"
            alt="Building"
            className="rounded-tl-full object-cover"
          />
        </div>
        <div className="col-span-2 bg-orange-500 rounded-tr-full"></div>
        <div className="bg-black col-span-2 rounded-bl-full"></div>
        <div className="bg-black">
          <img
            src="/neon.jpg"
            alt="Neon Sign"
            className="rounded-tr-full object-cover"
          />
        </div>
        <div className="bg-black">
          <img
            src="/runner.jpg"
            alt="Runner"
            className="rounded-bl-full object-cover"
          />
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
