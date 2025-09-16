import { prisma } from "../../src/lib/prisma.js";

const MENU_ITEMS = [
  {
    name: "Full English Breakfast",
    category: "Breakfast",
    description:
      "Freshly seasoned sausages wrapped with turkey rashers, scrambled eggs, toast, hashbrowns, mushrooms and tomatoes with a side of beans.",
    price: 13.95,
    imageUrl: "/images/fullEnglishBreakfast.png",
  },
  {
    name: "Avacado Toast Deluxe",
    category: "Breakfast",
    description:
      "Smashed avocado on sourdough bread with eggs, cherry tomatoes with a sprinkle of chilli flakes to top it off.",
    price: 9.49,
    imageUrl: "/images/avocadoToast.png",
  },
  {
    name: "Desi Breakfast",
    category: "Breakfast",
    description:
      "Fully loaded masala omelette with two crispy parathas and a side of freshly made chana.",
    price: 10.49,
    imageUrl: "/images/desiBreakfast.png",
  },
  {
    name: "Vegetarian Breakfast",
    category: "Breakfast",
    description:
      "Vegetarian sausages, falafel, hasbrowns, toast, tomatoes, and mushrooms with a side of beans.",
    price: 12.95,
    imageUrl: "/images/vegetarianBreakfast.png",
  },
  {
    name: "The Brunch Combo",
    category: "Lumere Special",
    description:
      "A blend of mixed berries loaded onto French toast, accompanied by rich maple syrup and beans, coupled with crispy hashbrowns, freshly seasoned sausages, turkey rashers, scrambled eggs, and tomatoes served on a bed of mushrooms.",
    price: 15.95,
    imageUrl: "/images/brunchCombo.png",
  },
  {
    name: "Club Croissant",
    category: "Lumere Special",
    description:
      "Grilled fluffy croissant pocketed with sliced chicken, smoked turkey, and layered with smashed avocado, cheese, and a fried egg.",
    price: 11.95,
    imageUrl: "/images/clubCroissant.png",
  },
  {
    name: "Chicken Sandwich",
    category: "Lunch",
    description:
      "Cripsy fried chicken topped with lettuce, our signature house special sauce, and cheeses layered in toasted brioche bread, with fries.",
    price: 11.95,
    imageUrl: "/images/chickenSandwich.png",
  },
  {
    name: "Egg Muffin",
    category: "Lunch",
    description:
      "Fried egg and a slice of cheese pocketed into an English muffin.",
    price: 3.95,
    imageUrl: "/images/eggMuffin.png",
  },
  {
    name: "Chicken Wrap",
    category: "Lunch",
    description:
      "Crispy chicken, salad, and cheeses wrapped in a tortilla wrap topped with house special sauce, with fries.",
    price: 9.49,
    imageUrl: "/images/chickenWrap.png",
  },
  {
    name: "Omellete Roll",
    category: "Lunch",
    description: "Loaded omelette wrapped in a crispy paratha.",
    price: 5.49,
    imageUrl: "/images/omeletteRoll.png",
  },
  {
    name: "Kebab Roll",
    category: "Lunch",
    description:
      "Chicken seekh kebab wrapped in a crispy paratha, topped with house special chutney.",
    price: 5.49,
    imageUrl: "/images/kebabRoll.png",
  },
  {
    name: "Pesto Cheese & Tomato Toastie",
    category: "Lunch",
    description: "Pesto, tomatoes, and melted cheese toasted sandwich.",
    price: 5.95,
    imageUrl: "/images/pestoCheeseTomatoToastie.png",
  },
  {
    name: "Masala Fries",
    category: "Lunch",
    description: "Lumeré special masala fries.",
    price: 5.5,
    imageUrl: "/images/masalaFries.png",
  },
  {
    name: "Veggie Burger",
    category: "Lunch",
    description:
      "A veggie patty topped with lettuce and cheese, all nestled in a toasted bun, served alongside crispy fries.",
    price: 8.95,
    imageUrl: "/images/veggieBurger.png",
  },
  {
    name: "Cheeseburger",
    category: "Lunch",
    description:
      "Fresh lamb pattie topped with cheese, lettuce and mayonnaise in a grilled bun, with a side of fries.",
    price: 9.49,
    imageUrl: "/images/cheeseburger.png",
  },
  {
    name: "Strips With Fries",
    category: "Lunch",
    description: "3 fried chicken strips topped onto a bed of seasoned chips.",
    price: 6,
    imageUrl: "/images/stripsWithFries.png",
  },
  {
    name: "Chicken Salad",
    category: "Lunch",
    description:
      "Fresh salad topped with chopped fried chicken and house special creamy sauce, garnished with parsley.",
    price: 9.49,
    imageUrl: "/images/chickenSalad.png",
  },
  {
    name: "Loaded Fries",
    category: "Lunch",
    description:
      "Seasoned fries loaded with chopped crispy chicken, onions, peppers, and jalapenos, all smothered in melted cheese and our signature sauce.",
    price: 10.49,
    imageUrl: "/images/loadedFries.png",
  },
  {
    name: "Loaded Pancake",
    category: "Dessert",
    description:
      "Indulge in a chocolate-filled, self-lifting tin atop three fluffy, stacked pancakes, all crowned with a delightful fountain of your favourite flavour.",
    price: 11.95,
    imageUrl: "/images/loadedPancake.png",
  },
  {
    name: "Waffle",
    category: "Dessert",
    description:
      "Freshly made American waffle, with a center scoop of ice cream loaded with a flavour of your choice.",
    price: 11.49,
    imageUrl: "/images/waffle.png",
  },
  {
    name: "French Toast",
    category: "Dessert",
    description:
      "Toasted brioche bread, elegantly drizzled with delicious flavour.",
    price: 11.95,
    imageUrl: "/images/frenchToast.png",
  },
  {
    name: "Crispy French Roll",
    category: "Dessert",
    description:
      "House special savory-rolled brioche bread stuffed with Nutella, drizzled with flavour.",
    price: 8.95,
    imageUrl: "/images/crispyFrenchRoll.png",
  },
  {
    name: "Loaded Croissant",
    category: "Dessert",
    description: "Fresh croissant stuffed with your favourite flavour.",
    price: 8.95,
    imageUrl: "/images/loadedCroissant.png",
  },
  {
    name: "Milk Cake",
    category: "Dessert",
    description: "Rose vanilla milk cake, surrounded with rich, creamy milk.",
    price: 9.49,
    imageUrl: "/images/milkCake.png",
  },
  {
    name: "Chocolate Fudge Cake",
    category: "Dessert",
    description:
      "Chocolate layered fudge cake with a ganache filling, drizzled with the flavour of your choice and a side scoop of ice cream.",
    price: 9.49,
    imageUrl: "/images/chocolateFudgeCake.png",
  },
  {
    name: "Iced Coffee",
    category: "Cold Beverages",
    price: 4.5,
    imageUrl: "/images/iceCoffee.png",
  },
  {
    name: "Iced Latte",
    category: "Cold Beverages",
    price: 4.5,
    imageUrl: "/images/iceCoffee.png",
  },
  {
    name: "Iced Spanish Latte",
    category: "Cold Beverages",
    price: 5,
    imageUrl: "/images/iceCoffee.png",
  },
  {
    name: "Tiramisu Creme Iced Latte",
    category: "Cold Beverages",
    price: 5.5,
    imageUrl: "/images/iceCoffee.png",
  },
  {
    name: "Original Matcha",
    category: "Cold Beverages",
    price: 4.5,
    imageUrl: "/images/matcha.png",
  },
  {
    name: "Strawberry Matcha",
    category: "Cold Beverages",
    price: 5,
    imageUrl: "/images/strawberryMatcha.png",
  },
  {
    name: "Mango Matcha",
    category: "Cold Beverages",
    price: 5,
    imageUrl: "/images/mangoMatcha.png",
  },
  {
    name: "Blueberry Matcha",
    category: "Cold Beverages",
    price: 5,
  },
  {
    name: "Pistachio Matcha",
    category: "Cold Beverages",
    price: 5.5,
    imageUrl: "/images/pistachioMatcha.png",
  },
  {
    name: "Strawberry Mocktail",
    category: "Cold Beverages",
    price: 5.49,
    imageUrl: "/images/strawberryMocktail.png",
  },
  {
    name: "Blue Raspberry Mocktail",
    category: "Cold Beverages",
    price: 5.49,
    imageUrl: "/images/blueRaspberryMocktail.png",
  },
  {
    name: "Lemonade Mocktail",
    category: "Cold Beverages",
    price: 5.49,
    imageUrl: "/images/lemonadeMocktail.png",
  },
  {
    name: "Redbull Sunset Mocktail",
    category: "Cold Beverages",
    price: 6.49,
    imageUrl: '/images/redbullSunsetMocktail.png',
  },
  {
    name: "Biscoff Milkshake",
    category: "Cold Beverages",
    price: 5.95,
    imageUrl: "/images/biscoffMilkshake.png",
  },
  {
    name: "Kinder Milkshake",
    category: "Cold Beverages",
    price: 5.95,
    imageUrl: "/images/kinderMilkshake.png",
  },
  {
    name: "Oreo Milkshake",
    category: "Cold Beverages",
    price: 5.95,
    imageUrl: "/images/oreoMilkshake.png",
  },
  {
    name: "Strawberry Milkshake",
    category: "Cold Beverages",
    price: 5.95,
    imageUrl: "/images/strawberryMilkshake.png",
  },
  {
    name: "Pistachio Milkshake",
    category: "Cold Beverages",
    price: 6.49,
    imageUrl: "/images/pistachioMilkshake.png",
  },
  {
    name: "Caramel Frappe",
    category: "Cold Beverages",
    price: 5.99,
    imageUrl: "/images/caramelFrappe.png",
  },
  {
    name: "Chocolate Frappe",
    category: "Cold Beverages",
    price: 5.99,
    imageUrl: "/images/chocolateFrappe.png",
  },
  {
    name: "Mango Lassi",
    category: "Cold Beverages",
    price: 4.5,
    imageUrl: "/images/mangoLassi.png",
  },
  {
    name: "Orange Juice",
    category: "Cold Beverages",
    price: 3.49,
    imageUrl: "/images/orangeJuice.png",
  },
  {
    name: "Apple Juice",
    category: "Cold Beverages",
    price: 3.49,
    imageUrl: "/images/appleJuice.png",
  },
  {
    name: "Cappuccino",
    category: "Hot Beverages",
    price: 3.5,
    imageUrl: "/images/cappuccino.png",
  },
  {
    name: "Flat White",
    category: "Hot Beverages",
    price: 3.5,
    imageUrl: "/images/flatWhite.png",
  },
  {
    name: "Latte",
    category: "Hot Beverages",
    price: 3.5,
    imageUrl: "/images/latte.png",
  },
  {
    name: "Black Coffee",
    category: "Hot Beverages",
    price: 3,
    imageUrl: "/images/blackCoffee.png",
  },
  {
    name: "Green Tea",
    category: "Hot Beverages",
    price: 2.5,
    imageUrl: "/images/greenTea.png",
  },
  {
    name: "Karak Chai",
    category: "Hot Beverages",
    price: 3.5,
    imageUrl: "/images/karakChai.png",
  },
  {
    name: "Matcha Latte",
    category: "Hot Beverages",
    price: 4.5,
    imageUrl: "/images/matchaLatte.png",
  },
  {
    name: "Espresso Shot",
    category: "Hot Beverages",
    price: 2,
    imageUrl: "/images/espressoShot.png",
  },
  {
    name: "Espresso Macchiato",
    category: "Hot Beverages",
    price: 2.5,
    imageUrl: "/images/espressoMacchiato.png",
  },
  {
    name: "Hot Chocolate",
    category: "Hot Beverages",
    price: 3.5,
    imageUrl: "/images/hotChocolate.png",
  },
  {
    name: "English Tea",
    category: "Hot Beverages",
    price: 3,
    imageUrl: "/images/englishTea.png",
  },
  {
    name: "Americano",
    category: "Hot Beverages",
    price: 3,
    imageUrl: "/images/americano.png",
  },
  {
    name: "Decaf Tea",
    category: "Hot Beverages",
    price: 3,
    imageUrl: "/images/decafTea.png",
  },
  {
    name: "Sprite",
    category: "Drinks",
    price: 2.49,
    imageUrl: "/images/sprite.png",
  },
  {
    name: "Coke",
    category: "Drinks",
    price: 2.49,
    imageUrl: "/images/coke.png",
  },
  {
    name: "Fanta",
    category: "Drinks",
    price: 2.49,
    imageUrl: "/images/fanta.png",
  },
  {
    name: "Redbull",
    category: "Drinks",
    price: 3.5,
    imageUrl: "/images/redbull.png",
  },
  {
    name: "Still Water",
    category: "Drinks",
    price: 2,
    imageUrl: "/images/stillWater.png",
  },
  {
    name: "Fries",
    category: "Extras",
    price: 3.8,
    imageUrl: "/images/fries.png",
  },
  {
    name: "Egg",
    category: "Extras",
    price: 2.5,
    imageUrl: "/images/egg.png",
  },
  {
    name: "Channa",
    category: "Extras",
    price: 3.49,  
    imageUrl: "/images/channa.png",
  },
  {
    name: "Toast",
    category: "Extras",
    price: 1.49,
    imageUrl: "/images/toast.png",
  },
  {
    name: "Omelette",
    category: "Extras",
    price: 3.49,
    imageUrl: "/images/omelette.png",
  },
  {
    name: "Hashbrown",
    category: "Extras",
    price: 1.49,
    imageUrl: "/images/hashbrown.png",
  },
  {
    name: "Avocado",
    category: "Extras",
    price: 2.5,
    imageUrl: "/images/avocado.png",
  },
  {
    name: "Sausage",
    category: "Extras",
    price: 1.5,
    imageUrl: "/images/sausage.png",
  },
  {
    name: "Turkey Rasher",
    category: "Extras",
    price: 1.5,
    imageUrl: "/images/turkeyRasher.png",
  },
  {
    name: "Chicken",
    category: "Extras",
    price: 2.5,
    imageUrl: "/images/chicken.png",
  },
  {
    name: "Cheese",
    category: "Extras",
    price: 1.5,
    imageUrl: "/images/cheese.png",
  },
  {
    name: "Beans",
    category: "Extras",
    price: 2.5,
    imageUrl: "/images/beans.png",
  },
  {
    name: "Sauce Pot",
    category: "Extras",
    price: 0.5,
    imageUrl: "/images/saucePot.png",
  },
  {
    name: "Decaf",
    category: "Extras",
    price: 0.5,
    imageUrl: "/images/decafTea.png",
  },
  {
    name: "Alternative Milk",
    category: "Extras",
    description: "Oat, Almond, Soya, Semi-Skimmed, Skimmed",
    price: 0.7,
    imageUrl: "/images/alternativeMilks.png",
  },
  {
    name: "Choc/White-Choc/Pistachio/Biscoff Sauce",
    category: "Extras",
    price: 0.5,
    imageUrl: "/images/chocolateSauce.png",
  },
  {
    name: "Hazelnut/Caramel/ Vanilla/Salted Caramel/ Pistachio Syrup",
    category: "Extras",
    price: 0.4,
    imageUrl: "/images/sauceDip.png",
  },
  {
    name: "Coffee x Flower Bag",
    category: "Lumere Floral Specials",
    price: 14.99,
    imageUrl: "/images/coffeeFlowerBag.png",
  },
  {
    name: "Single Forever Rose",
    category: "Lumere Floral Specials",
    price: 4.5,
    imageUrl: "/images/rose.png",
  },
];

async function main() {
  // Delete all existing entries
  await prisma.menu.deleteMany({});

  // Seed new entries
  await prisma.menu.createMany({
    data: MENU_ITEMS.map((item) => ({
      ...item,
      description: item.description ?? null,
    })),
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
