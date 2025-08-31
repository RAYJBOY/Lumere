import { ChipStrip } from "@/components/menu/ChipStrip";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeInSection } from "@/components/shared/FadeInSection";

export default function MenuPage() {
  const menuItems = [
    {
      name: "Cappuccino",
      description:
        "Rich espresso topped with frothy milk and a sprinkle of cocoa",
      price: "£3.50",
      category: "drinks",
      image: "/images/drinks.png",
    },
    {
      name: "Latte",
      description:
        "Smooth espresso with steamed milk and a light layer of foam",
      price: "£3.75",
      category: "drinks",
      image: "/images/drinks.png",
    },
    {
      name: "Latte",
      description:
        "Smooth espresso with steamed milk and a light layer of foam",
      price: "£3.75",
      category: "drinks",
      image: "/images/drinks.png",
    },
    {
      name: "Cappuccino",
      description:
        "Rich espresso topped with frothy milk and a sprinkle of cocoa",
      price: "£3.50",
      category: "drinks",
      image: "/images/drinks.png",
    },
    {
      name: "Latte",
      description:
        "Smooth espresso with steamed milk and a light layer of foam",
      price: "£3.75",
      category: "drinks",
      image: "/images/drinks.png",
    },
    {
      name: "Latte",
      description:
        "Smooth espresso with steamed milk and a light layer of foam",
      price: "£3.75",
      category: "drinks",
      image: "/images/drinks.png",
    },
    // Add more items as needed
  ];

  return (
    <div className="pt-20 px-2 max-w-8xl w-full overflow-x-hidden">
      <h2 className="text-4xl font-semibold text-center col-span-1 md:col-span-3 mb-8">
        Menu
      </h2>
      <ChipStrip
        categories={[
          { name: "Mains", href: "#mains" },
          { name: "Drinks", href: "#drinks" },
          { name: "Desserts", href: "#desserts" },
          { name: "Sides", href: "#sides" },
        ]}
      />
      <FadeInSection>
        <div className="mb-20" id="mains">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Mains</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {menuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.image}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mb-20" id="drinks">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Drinks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {menuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.image}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mb-20" id="desserts">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">
            Desserts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {menuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.image}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Sides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {menuItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.image}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
