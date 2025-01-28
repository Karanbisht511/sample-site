import React from "react";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link }) => {
  return (
    <div className="flex flex-col md:flex-row items-center border rounded-lg overflow-hidden shadow-lg p-4 max-w-4xl mx-auto relative">
      <div className="md:w-2/3 p-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="md:w-1/3 flex justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 md:mt-0 bg-black text-white px-4 py-2 rounded-lg md:absolute md:top-4 md:right-4 hover:bg-gray-800 hidden md:block"
      >
        View Online ↗
      </a>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 bg-black text-white px-4 py-2 rounded-lg md:hidden hover:bg-gray-800"
      >
        View Online ↗
      </a>
    </div>
  );
};

const CardList: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Okler Themes",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit...",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-1-FF7049.jpg",
      link: "#",
    },
    {
      title: "Envato",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit...",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-2-FF7049.jpg",
      link: "#",
    },
    {
      title: "Porto Template",
      description:
        "Cras a elit sit amet leo accumsan volutpat. Suspendisse hendrerit...",
      imageUrl:
        "https://www.okler.net/previews/porto/12.0.0/img/demos/creative-agency-2/projects/project-3.jpg",
      link: "#",
    },
  ];

  return (
    <div className="space-y-6 p-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
