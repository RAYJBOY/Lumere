import { plusJakartaDisplay } from "@/styles/fonts";

export const ScrollingStrip = () => {
  const items = [
    { title: "100% Halal", subtitle: "Don't worry, all menu items are Halal!", bgImage: "/images/halal.png" },
    { title: "Picturesque ambience", subtitle: "Instagramable pics!", bgImage: "/images/camera.png" },
    { title: "Leicester", subtitle: "Located in the heart of Leicester", bgImage: "/images/location.png" },
    { title: "Customer Satisfaction", subtitle: "Keeping you happy is our number one priority!", bgImage: "/images/five-star.png" },
  ];

  return (
    <section className="py-8 overflow-hidden ">
      <div className="relative flex gap-6 animate-scroll">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="relative max-w-[300px] rounded-lg p-6 flex flex-col items-center justify-center text-center overflow-hidden bg-white shadow-md"
          >
            {/* Image at the top */}
            {item.bgImage && (
              <img
                src={item.bgImage}
                alt={item.title}
                className="w-24 h-24 object-contain mb-4"
              />
            )}
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className={`mt-4 text-md ${plusJakartaDisplay.className}`}>
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
