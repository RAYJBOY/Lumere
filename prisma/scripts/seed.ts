import { prisma } from "../../src/lib/prisma.js";

const MENU_ITEMS = [
  {
    name: "Full English Breakfast",
    category: "Breakfast",
    description:
      "Freshly seasoned sausages wrapped with turkey rashers, scrambled eggs, toast, hashbrowns, mushrooms and tomatoes with a side of beans.",
    price: 13.95,
  },
  {
    name: "Avacado Toast Deluxe",
    category: "Breakfast",
    description:
      "Smashed avacado on sourdough bread with eggs, cherry tomatoes with a sprinkle of chilli flakes to top it off.",
    price: 9.49,
  },
  {
    name: "Desi Breakfast",
    category: "Breakfast",
    description:
      "Fully loaded masala omelette with two crispy parathas and a side of freshly made chana.",
    price: 10.49,
  },
  {
    name: "Vegetarian Breakfast",
    category: "Breakfast",
    description:
      "Vegetarian sausages, falafel, hasbrowns, toast, tomatoes, and mushrooms with a side of beans.",
    price: 12.95,
  },
  {
    name: "The Brunch Combo",
    category: "Lumere Special",
    description:
      "A blend of mixed berries loaded onto French toast, accompanied by rich maple syrup and beans, coupled with crispy hashbrowns, freshly seasoned sausages, turkey rashers, scrambled eggs, and tomatoes served on a bed of mushrooms.",
    price: 15.95,
  },
  {
    name: "Club Croissant",
    category: "Lumere Special",
    description:
      "Grilled fluffy croissant pocketed with sliced chicken, smoked turkey, and layered with smashed avocado, cheese, and a fried egg.",
    price: 11.95,
  },
  {
    name: "Chicken Sandwich",
    category: "Lunch",
    description:
      "Cripsy fried chicken topped with lettuce, our signature house special sauce, and cheeses layered in toasted brioche bread, with fries.",
    price: 11.95,
  },
  {
    name: "Egg Muffin",
    category: "Lunch",
    description:
      "Fried egg and a slice of cheese pocketed into an English muffin.",
    price: 3.95,
  },
  {
    name: "Chicken Wrap",
    category: "Lunch",
    description:
      "Crispy chicken, salad, and cheeses wrapped in a tortilla wrap topped with house special sauce, with fries.",
    price: 9.49,
  },
  {
    name: "Omellete Roll",
    category: "Lunch",
    description: "Loaded omelette wrapped in a crispy paratha.",
    price: 5.49,
  },
  {
    name: "Kebab Roll",
    category: "Lunch",
    description:
      "Chicken seekh kebab wrapped in a crispy paratha, topped with house special chutney.",
    price: 5.49,
  },
  {
    name: "Pesto Cheese & Tomato Toastie",
    category: "Lunch",
    description: "Pesto, tomatoes, and melted cheese toasted sandwich.",
    price: 5.95,
  },
  {
    name: "Masala Fries",
    category: "Lunch",
    description: "Lumeré special masala fries.",
    price: 5.5,
  },
  {
    name: "Veggie Burger",
    category: "Lunch",
    description:
      "A veggie patty topped with lettuce and cheese, all nestled in a toasted bun, served alongside crispy fries.",
    price: 8.95,
  },
  {
    name: "Cheeseburger",
    category: "Lunch",
    description:
      "Fresh lamb pattie topped with cheese, lettuce and mayonnaise in a grilled bun, with a side of fries.",
    price: 9.49,
  },
  {
    name: "Strips With Fries",
    category: "Lunch",
    description: "3 fried chicken strips topped onto a bed of seasoned chips.",
    price: 6,
  },
  {
    name: "Chicken Salad",
    category: "Lunch",
    description:
      "Fresh salad topped with chopped fried chicken and house special creamy sauce, garnished with parsley.",
    price: 9.49,
  },
  {
    name: "Loaded Fries",
    category: "Lunch",
    description:
      "Seasoned fries loaded with chopped crispy chicken, onions, peppers, and jalapenos, all smothered in melted cheese and our signature sauce.",
    price: 10.49,
  },
  {
    name: "Loaded Pancake",
    category: "Dessert",
    description:
      "Indulge in a chocolate-filled, self-lifting tin atop three fluffy, stacked pancakes, all crowned with a delightful fountain of your favourite flavour.",
    price: 11.95,
  },
  {
    name: "Waffle",
    category: "Dessert",
    description:
      "Freshly made American waffle, with a center scoop of ice cream loaded with a flavour of your choice.",
    price: 11.49,
  },
  {
    name: "French Toast",
    category: "Dessert",
    description:
      "Toasted brioche bread, elegantly drizzled with delicious flavour.",
    price: 11.95,
  },
  {
    name: "Crispy French Roll",
    category: "Dessert",
    description:
      "House special savory-rolled brioche bread stuffed with Nutella, drizzled with flavour.",
    price: 8.95,
  },
  {
    name: "Loaded Croissant",
    category: "Dessert",
    description: "Fresh croissant stuffed with your favourite flavour.",
    price: 8.95,
  },
  {
    name: "Milk Cake",
    category: "Dessert",
    description: "Rose vanilla milk cake, surrounded with rich, creamy milk.",
    price: 9.49,
  },
  {
    name: "Chocolate Fudge Cake",
    category: "Dessert",
    description:
      "Chocolate layered fudge cake with a ganache filling, drizzled with the flavour of your choice and a side scoop of ice cream.",
    price: 9.49,
  },
  {
    name: "Iced Coffee",
    category: "Cold Beverages",
    price: 4.5,
  },
  {
    name: "Iced Latte",
    category: "Cold Beverages",
    price: 4.5,
  },
  {
    name: "Iced Spanish Latte",
    category: "Cold Beverages",
    price: 5,
  },
  {
    name: "Tiramisu Creme Iced Latte",
    category: "Cold Beverages",
    price: 5.5,
  },
  {
    name: "Original Matcha",
    category: "Cold Beverages",
    price: 4.5,
  },
  {
    name: "Strawberry Matcha",
    category: "Cold Beverages",
    price: 5,
  },
  {
    name: "Mango Matcha",
    category: "Cold Beverages",
    price: 5,
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
  },
  {
    name: "Strawberry Mocktail",
    category: "Cold Beverages",
    price: 5.49,
  },
  {
    name: "Blue Raspberry Mocktail",
    category: "Cold Beverages",
    price: 5.49,
  },
  {
    name: "Lemonade Mocktail",
    category: "Cold Beverages",
    price: 5.49,
  },
  {
    name: "Redbull Sunset Mocktail",
    category: "Cold Beverages",
    price: 6.49,
  },
  {
    name: "Biscoff Milkshake",
    category: "Cold Beverages",
    price: 5.95,
  },
  {
    name: "Kinder Milkshake",
    category: "Cold Beverages",
    price: 5.95,
  },
  {
    name: "Oreo Milkshake",
    category: "Cold Beverages",
    price: 5.95,
  },
  {
    name: "Strawberry Milkshake",
    category: "Cold Beverages",
    price: 5.95,
  },
  {
    name: "Pistachio Milkshake",
    category: "Cold Beverages",
    price: 6.49,
  },
  {
    name: "Caramel Frappe",
    category: "Cold Beverages",
    price: 5.99,
  },
  {
    name: "Chocolate Frappe",
    category: "Cold Beverages",
    price: 5.99,
  },
  {
    name: "Mango Lassi",
    category: "Cold Beverages",
    price: 4.5,
  },
  {
    name: "Orange Juice",
    category: "Cold Beverages",
    price: 3.49,
  },
  {
    name: "Apple Juice",
    category: "Cold Beverages",
    price: 3.49,
  },
  {
    name: "Cappuccino",
    category: "Hot Beverages",
    price: 3.5,
  },
  {
    name: "Flat White",
    category: "Hot Beverages",
    price: 3.5,
  },
  {
    name: "Latte",
    category: "Hot Beverages",
    price: 3.5,
  },
  {
    name: "Black Coffee",
    category: "Hot Beverages",
    price: 3,
  },
  {
    name: "Green Tea",
    category: "Hot Beverages",
    price: 2.5,
  },
  {
    name: "Karak Chai",
    category: "Hot Beverages",
    price: 3.5,
  },
  {
    name: "Matcha Latte",
    category: "Hot Beverages",
    price: 4.5,
  },
  {
    name: "Espresso Shot",
    category: "Hot Beverages",
    price: 2,
  },
  {
    name: "Espresso Macchiato",
    category: "Hot Beverages",
    price: 2.5,
  },
  {
    name: "Hot Chocolate",
    category: "Hot Beverages",
    price: 3.5,
  },
  {
    name: "English Tea",
    category: "Hot Beverages",
    price: 3,
  },
  {
    name: "Americano",
    category: "Hot Beverages",
    price: 3,
  },
  {
    name: "Decaf Tea",
    category: "Hot Beverages",
    price: 3,
  },
  {
    name: "Sprite",
    category: "Drinks",
    price: 2.49,
  },
  {
    name: "Coke",
    category: "Drinks",
    price: 2.49,
  },
  {
    name: "Fanta",
    category: "Drinks",
    price: 2.49,
  },
  {
    name: "Redbull",
    category: "Drinks",
    price: 3.5,
  },
  {
    name: "Still Water",
    category: "Drinks",
    price: 2,
  },
  {
    name: "Fries",
    category: "Extras",
    price: 3.8,
  },
  {
    name: "Egg",
    category: "Extras",
    price: 2.5,
  },
  {
    name: "Channa",
    category: "Extras",
    price: 3.49,
  },
  {
    name: "Toast",
    category: "Extras",
    price: 1.49,
  },
  {
    name: "Omelette",
    category: "Extras",
    price: 3.49,
  },
  {
    name: "Hashbrown",
    category: "Extras",
    price: 1.49,
  },
  {
    name: "Avocado",
    category: "Extras",
    price: 2.5,
  },
  {
    name: "Sausage",
    category: "Extras",
    price: 1.5,
  },
  {
    name: "Turkey Rasher",
    category: "Extras",
    price: 1.5,
  },
  {
    name: "Chicken",
    category: "Extras",
    price: 2.5,
  },
  {
    name: "Cheese",
    category: "Extras",
    price: 1.5,
  },
  {
    name: "Beans",
    category: "Extras",
    price: 2.5,
  },
  {
    name: "Sauce Pot",
    category: "Extras",
    price: 0.5,
  },
  {
    name: "Decaf",
    category: "Extras",
    price: 0.5,
  },
  {
    name: "Alternative Milk",
    category: "Extras",
    description: "Oat, Almond, Soya, Semi-Skimmed, Skimmed",
    price: 0.7,
  },
  {
    name: "Chocolate/White Chocolate/Pistachio/Biscoff Sauce",
    category: "Extras",
    price: 0.5,
  },
  {
    name: "Hazelnut/Caramel/Vanilla/Salted Caramel/Pistachio Syrup",
    category: "Extras",
    price: 0.4,
  },
  {
    name: "Coffee X Flowed Bag",
    category: "Lumere Floral Specials",
    price: 14.99,
  },
  {
    name: "Single Forever Rose",
    category: "Lumere Floral Specials",
    price: 4.5,
  },
];

async function main() {
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
