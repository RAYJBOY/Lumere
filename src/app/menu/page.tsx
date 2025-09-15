import { ChipStrip } from "@/components/menu/ChipStrip";
import { MenuCard } from "@/components/menu/MenuCard";
import { FadeInSection } from "@/components/shared/FadeInSection";
import { getMenuItems } from "@/lib/menu/getMenuItems";

export default async function MenuPage() {
  const menuItems = await getMenuItems();
  const breakfastItems = menuItems.filter((item) => item.category === "Breakfast");
  const drinkItems = menuItems.filter((item) => item.category === "Drinks");
  const dessertItems = menuItems.filter((item) => item.category === "Dessert");
  const lunchItems = menuItems.filter((item) => item.category === "Lunch");
  const lumereSpecialItems = menuItems.filter((item) => item.category === "Lumere Special");
  const coldBeverageItems = menuItems.filter((item) => item.category === "Cold Beverages");
  const hotBeverageItems = menuItems.filter((item) => item.category === "Hot Beverages");
  const extraItems = menuItems.filter((item) => item.category === "Extras");
  const lumereFloralItems = menuItems.filter((item) => item.category === "Lumere Floral Specials");
  
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

      {/* Breakfast items */}
      <FadeInSection>
        <div className="mb-20" id="mains">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Breakfast</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {breakfastItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ""}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={'/images/lunch.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Lunch items */}
      <FadeInSection>
        <div className="mb-20" id="drinks">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Lunch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {lunchItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={'/images/lunch.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Hot Beverages */}
      <FadeInSection>
        <div className="mb-20" id="desserts">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">
            Hot Beverages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {hotBeverageItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Cold Beverages items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Cold Beverages</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {coldBeverageItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Dessert Items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Desserts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {dessertItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/desserts.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Drink items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Drinks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {drinkItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Extra items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Extras</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {extraItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Lumere Special items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Lumere Specials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {lumereSpecialItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>

      {/* Lumere Floral Special items */}
      <FadeInSection>
        <div className="mb-20" id="sides">
          <h3 className="text-2xl font-semibold mb-6 md:ml-8 w-full">Lumere Floral Specials</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-y-12 w-full justify-items-center">
            {lumereFloralItems.map((item, index) => (
              <MenuCard
                key={index}
                name={item.name}
                description={item.description || ''}
                price={item.price}
                category={
                  item.category as "drinks" | "mains" | "desserts" | "sides"
                }
                image={item.imageUrl || '/images/drink.png'}
              />
            ))}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
