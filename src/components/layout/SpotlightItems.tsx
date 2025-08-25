import Image from "next/image";
import { SpotlightCard } from "./SpotlightCard";

const spotlightItems = [
  {
    id: 1,
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£10.00",
    imageUrl: "/images/drink.png",
    spotlightColor: `rgba(255, 200, 50, 0.6)` as const,
  },
  {
    id: 2,
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£10.00",
    imageUrl: "/images/drink.png",
    spotlightColor: `rgba(50, 200, 255, 0.6)` as const,
  },
  {
    id: 3,
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    price: "£10.00",
    imageUrl: "/images/drink.png",
    spotlightColor: `rgba(255, 100, 150, 0.6)` as const,
  },
];

export const SpotlightItems = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch col-span-1 md:col-span-3">
      {spotlightItems.map((item) => (
        <SpotlightCard
          key={item.id}
          className="custom-spotlight-card m-2"
          spotlightColor={item.spotlightColor}
        >
          <Image
            src={item.imageUrl}
            alt={item.title}
            width={400}
            height={300}
            className="rounded-t-lg w-30 h-50 mx-auto"
          />
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.description}</p>
            <strong className="block mt-8">{item.price}</strong>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
};
