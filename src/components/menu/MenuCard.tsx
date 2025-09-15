import Image from "next/image";
import { plusJakartaDisplay } from "@/styles/fonts";

interface MenuCardProps {
  name: string;
  description: string;
  price: number;
  image?: string;
  category: "drinks" | "mains" | "desserts" | "sides";
}

export const MenuCard = ({
  name,
  description,
  price,
  image,
  category,
}: MenuCardProps) => {
  return (
    <div className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors border border-gray-200 max-w-md bg-white sm:min-w-sm w-full">
      {image && (
        <div className="relative w-32 h-32 flex-shrink-0">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-medium text-lg">{name}</h3>
          <span className="text-gray-900 font-semibold">£{price}</span>
        </div>
        <div className="h-px bg-gray-200 my-3"></div>
        <p className={`text-gray-600 text-sm ${plusJakartaDisplay.className}`}>
          {description}
        </p>
      </div>
    </div>
  );
};
