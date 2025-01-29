import ServicesGrid from "./CoService";
import CompanyScroll from "./CompanyScroll";

const Services = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 md:px-16 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Breadcrumb */}
          <nav className="text-orange-500 text-sm mb-4">
            HOME &gt; <span className="text-orange-300">SERVICES</span>
          </nav>

          {/* Title */}
          <h1 className="text-4xl font-bold">Services</h1>
        </div>

        {/* White content section */}
        <div className="bg-white text-black py-12 px-6 md:px-24 mt-12 max-w-6xl mx-auto rounded-lg shadow-lg">
          <p className="text-center text-lg text-gray-700">
            Amet leo accumsan volutpat. Suspendisse hendreriast ehicula leo, vel
            efficitur felis ultrices non. Cras a elit sit amet leo acun
            volutpat. Suspendisse hendrerit vehicula leo, vel efficitur felis
            ultrices non. Cras a elit sit amet leo accun volutpat. Suspendisse
            hendrerit vehicula leo, vel efficitur fel.
          </p>
        </div>
      </div>
      <ServicesGrid />
      <CompanyScroll />
    </div>
  );
};

export default Services;
