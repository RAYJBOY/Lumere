import Image from "next/image";
import Link from "next/link";

const cardData = [
  { title: "Breakfast", image: "/images/breakfast.png", href: "#breakfast" },
  { title: "Lunch", image: "/images/lunch.png", href: "#lunch" },
  { title: "Desserts", image: "/images/desserts.png", href: "#desserts" },
  { title: "Beverages", image: "/images/beverages.png", href: "#hotBeverages" },
  { title: "Drinks", image: "/images/drinks.png", href: "#drinks" },
];

export const LandingPageCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-8">
    {cardData.map((card) => (
      <Link key={card.title} href={`/menu${card.href}`} scroll>
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-full text-center transition-transform hover:scale-105 cursor-pointer">
          <Image
            src={card.image}
            alt={card.title}
            width={600}
            height={400}
            className="w-full h-72 object-cover"
            priority
          />
          <div className="text-2xl font-semibold my-5">{card.title}</div>
        </div>
      </Link>
    ))}
  </div>
);
