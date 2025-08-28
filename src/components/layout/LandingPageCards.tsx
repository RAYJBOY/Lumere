import Image from "next/image";

const cardData = [
  { title: "Lunch", image: "/images/lunch.png" },
  { title: "Desserts", image: "/images/desserts.png" },
  { title: "Drinks", image: "/images/drinks.png" },
];

export const LandingPageCards = () => (
  <div className="flex justify-center items-start gap-6 flex-wrap p-8">
    {cardData.map((card) => (
      <div
        key={card.title}
        className="bg-white rounded-xl shadow-md overflow-hidden w-96 m-4 text-center transition-transform hover:scale-105"
      >
        <Image
          src={card.image}
          alt={card.title}
          width={1000}
          height={800}
          className="w-full h-72 object-cover"
          priority
        />
        <div className="text-2xl font-semibold my-5">{card.title}</div>
      </div>
    ))}
  </div>
);
