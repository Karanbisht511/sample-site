import React from "react";

const BusinessSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 md:px-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-7xl">
        {/* Left Content */}
        <div className="space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's take your <br />
            business to the next level!
          </h2>
          <p className="text-gray-400">
            Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit
            vehicula leo, vel efficitur felis ultrices non.
          </p>
          {/* Feature Boxes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "10+ years experience",
              "Market-Focused",
              "Top expertise",
              "Corporate Investors",
              "Integrity & Innovation",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-lg text-center"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="relative mt-10 md:mt-0 md:ml-12">
          <div
            className="w-40 h-40 md:w-56 md:h-56 bg-orange-500 rounded-full flex items-center justify-center text-black text-lg font-semibold shadow-lg cursor-pointer hover:bg-orange-600 transition"
            role="button"
          >
            Let's Talk{" "}
            <span className="ml-2 text-lg" aria-label="arrow">
              ↗
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
