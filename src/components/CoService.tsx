import React, { useState, useEffect } from "react";
import brandDev from "../asset/brandDevelopment.jpeg";
import contentDev from "../asset/contentDev.png";
import graphicDes from "../asset/graphicD.avif";
import webdev from "../asset/webDev.jpeg";
import uxDes from "../asset/uxuiDev.webp";
import appDev from "../asset/appDev.jpeg";
import logoDes from "../asset/logoDes.jpeg";

interface Service {
  title: string;
  light: boolean;
  image: string;
  alt: string;
}

const ServicesGrid = () => {
  // Convert services to state
  const [services, setServices] = useState<Service[]>([
    {
      title: "Brand Development",
      light: true,
      image: brandDev,
      alt: "Brand development illustration showing color palettes and typography",
    },
    {
      title: "Content Marketing",
      light: false,
      image: contentDev,
      alt: "Content marketing strategy visualization",
    },
    {
      title: "Graphic Design",
      light: true,
      image: graphicDes,
      alt: "Graphic design tools and artwork",
    },
    {
      title: "Web Development",
      light: false,
      image: webdev,
      alt: "Web development code and design interface",
    },
    {
      title: "UX Design",
      light: false,
      image: uxDes,
      alt: "UX design wireframes and prototypes",
    },
    {
      title: "App Development",
      light: true,
      image: appDev,
      alt: "Mobile app development interface",
    },
    {
      title: "Logo Design",
      light: false,
      image: appDev,
      alt: "Logo design process and examples",
    },
    {
      title: "Creative Advertising",
      light: true,
      image: logoDes,
      alt: "Creative advertising campaign examples",
    },
  ]);

  const mobileService = [
    {
      title: "Brand Development",
      light: true,
      image: brandDev,
      alt: "Brand development illustration showing color palettes and typography",
    },
    {
      title: "Content Marketing",
      light: false,
      image: contentDev,
      alt: "Content marketing strategy visualization",
    },
    {
      title: "Graphic Design",
      light: false,
      image: graphicDes,
      alt: "Graphic design tools and artwork",
    },
    {
      title: "Web Development",
      light: true,
      image: webdev,
      alt: "Web development code and design interface",
    },
    {
      title: "UX Design",
      light: true,
      image: uxDes,
      alt: "UX design wireframes and prototypes",
    },
    {
      title: "App Development",
      light: false,
      image: appDev,
      alt: "Mobile app development interface",
    },
    {
      title: "Logo Design",
      light: false,
      image: appDev,
      alt: "Logo design process and examples",
    },
    {
      title: "Creative Advertising",
      light: true,
      image: logoDes,
      alt: "Creative advertising campaign examples",
    },
  ];

  // Handle initial load and resize
  useEffect(() => {
    const updateServicesForScreenSize = () => {
      const isMobile = window.innerWidth < 1025;
      setServices(isMobile ? mobileService : services);
    };

    // Run once on mount
    updateServicesForScreenSize();

    // Add resize listener
    window.addEventListener("resize", updateServicesForScreenSize);

    // Cleanup
    return () =>
      window.removeEventListener("resize", updateServicesForScreenSize);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative p-6 transition-all duration-300 overflow-hidden min-h-[200px] ${
              service.light ? "bg-gray-100" : "bg-white"
            }`}
          >
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-4 h-1 w-12 bg-gray-300"></div>
              <h3 className="text-2xl font-bold text-gray-900 leading-tight group-hover:text-white transition-colors duration-300">
                {service.title.split(" ").map((word, i) => (
                  <React.Fragment key={i}>
                    {word}
                    <br />
                  </React.Fragment>
                ))}
              </h3>
            </div>

            {/* Hover Image */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-300">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300 z-[5]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
