import React from "react";

interface StatProps {
  number: string;
  text: string;
}

const StatCard: React.FC<StatProps> = ({ number, text }) => {
  return (
    <div className="bg-black text-white p-6 rounded-lg text-center">
      <h3 className="text-4xl font-bold">{number}+</h3>
      <p className="mt-2 text-sm">{text}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 md:px-16 mt-12"> {/* Added margin top */}
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-gray-600 mb-8">
          Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis ultrices non.
        </p>

        {/* Content Section */}
        <div className="md:flex items-start gap-8">
          <div className="md:w-1/2">
            <img 
              src="https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/generic/generic-1.jpg" 
              alt="About Us" 
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum eleifend eros a pharetra.
            </p>
            <p className="text-gray-700 mb-6">
              Aenean vel posuere urna, sit amet placerat massa. Quisque efficitur interdum libero, sed dictum lorem.
            </p>

            {/* Accordion Section */}
            <div className="border-t border-b divide-y">
              <details className="py-3 cursor-pointer">
                <summary className="font-semibold">What We Do</summary>
                <p className="text-gray-600 mt-2">Curabitur pellentesque neque eget diam posuere porta.</p>
              </details>
              <details className="py-3 cursor-pointer">
                <summary className="font-semibold">Pro Experience</summary>
                <p className="text-gray-600 mt-2">Vestibulum nunc ipsum primis in faucibus.</p>
              </details>
              <details className="py-3 cursor-pointer">
                <summary className="font-semibold">Partners and Investors</summary>
                <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </details>
            </div>
            
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
              Let's Talk →
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          <StatCard number="345" text="Cras a elit sit amet leo accumsan volutpat." />
          <StatCard number="1000" text="A cras elit sit amet leo accumsan volutpat." />
          <StatCard number="123" text="Elit cras a elit sit amet leo accumsan volutpat." />
          <StatCard number="15" text="Sit cras a elit sit amet leo accumsan volutpat." />
          <StatCard number="45" text="Lorem a elit sit amet leo accumsan volutpat." />
          <StatCard number="345" text="Cras a elit sit amet leo accumsan volutpat." />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
