"use client";

export interface ChipStripProps {
  categories: Array<{
    name: string;
    href: string;
  }>;
}

export const ChipStrip = ({ categories }: ChipStripProps) => {
  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="flex space-x-2 overflow-x-auto pb-4 md:ml-8 md:mb-8">
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => handleClick(category.href)}
          className={`px-4 py-2 rounded-full border whitespace-nowrap hover:bg-[var(--hover-color)] hover:text-white transition-colors text-sm font-medium`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};
