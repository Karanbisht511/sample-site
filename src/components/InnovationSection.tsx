import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface AccordionItemProps {
  title: string;
  isOpen?: boolean;
  onClick?: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen = false,
  onClick,
}) => {
  return (
    <div className="border-t border-gray-200">
      <button
        onClick={onClick}
        className="w-full py-4 flex justify-between items-center text-left"
      >
        <span className="text-xl font-medium">{title}</span>
        <ChevronDown
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>
  );
};

const InnovationSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 bg-white">
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

      {/* Right side content */}
      <div className="lg:w-1/2">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-[#1A1A1A]">
          Innovation to transform your organization.
        </h1>
        <p className="text-gray-600 mb-8">
          Cras a elit sit amet leo accumsan volutpat. Suspendisse hendreriast
          ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet
          leo acun volutpat. Suspendisse hendrerit vehicula leo, vel efficitur
          fel.
        </p>

        {/* Accordion sections */}
        <div className="mb-8">
          <AccordionItem title="What We Do" />
          <AccordionItem title="Pro Experience" />
          <AccordionItem title="Partners and Investors" />
        </div>

        {/* Learn More button */}
        <button className="bg-[#FF5D38] text-black px-6 py-3 rounded flex items-center gap-2 hover:opacity-90 transition-opacity">
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default InnovationSection;
