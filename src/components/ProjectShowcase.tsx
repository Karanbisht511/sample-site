import React from "react";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectShowcase: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Okler Themes",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerist ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet leo acun volutpat. Suspendisse hendrerit.",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-1-FF7049.jpg",
    },
    {
      title: "Envato",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerist ehicula leo, vel efficitur felis ultrices non. Cras a elit siel efficitur fel.",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-2-FF7049.jpg",
    },
    {
      title: "Porto Template",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerist ehicula leo, vel efficitur felis ultrices non. Cras a elit sit amet leo acun volutpehicula leo, vel efficitur fel.",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-3.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {projects.map((project, index) => (
        <div
          key={index}
          className="border-t border-gray-200 pt-8 first:border-t-0"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Content and Button Container for Mobile */}
            <div className="md:col-span-7 flex flex-col">
              {/* Desktop View Online Button - Hidden on Mobile */}
              <div className="hidden md:block mb-8">
                <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors">
                  View Online
                </button>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="md:col-span-5">
              <div className="relative aspect-[4/3] bg-gray-100">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Mobile View Online Button - Hidden on Desktop */}
            <div className="md:hidden col-span-1">
              <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors w-full md:w-auto">
                View Online
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectShowcase;
