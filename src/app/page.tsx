import Image from "next/image";
import { ScrollingStrip } from "@/components/layout/ScrollingStrip";
import { LandingPageCards } from "@/components/layout/LandingPageCards";
import { BlurText } from "@/components/layout/BlurText";
import { plusJakartaDisplay } from "@/styles/fonts";
import { FadeInSection } from "@/components/shared/FadeInSection";

const spotlightItems = [
  {
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/drink.png",
  },
  {
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/drink.png",
  },
  {
    title: "Test item",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/images/drink.png",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative w-full h-[500px]">
        {/* Background Image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-black/60"></div>

        {/* Hero content */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-5xl font-bold text-center leading-[1.25]">
            <BlurText text="WELCOME TO LUMERÉ" delay={50} />
          </h1>
          <BlurText
            text="Your daily dose of excitement"
            delay={150}
            className={`mt-4 text-lg ${plusJakartaDisplay.className} italic`}
          />
        </div>
      </div>

      <div>
        <ScrollingStrip />
      </div>

      <FadeInSection>
        <div>
          <LandingPageCards />
        </div>
      </FadeInSection>

      <FadeInSection>
        <h2 className="text-4xl font-semibold mt-16 text-center col-span-1 md:col-span-3">
          Top Picks of the Month
        </h2>
      </FadeInSection>

      {spotlightItems.map((item, index) => (
        <FadeInSection key={index}>
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto my-8 items-center"
          >
            {/* Image */}
            <div
              className={
                index % 2 === 0
                  ? "p-4 flex justify-center order-1 md:order-1"
                  : "p-4 flex justify-center order-1 md:order-2"
              }
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
                className="rounded-xl"
              />
            </div>
            {/* Text */}
            <div
              className={
                index % 2 === 0
                  ? "p-8 order-2 md:order-2"
                  : "p-8 order-2 md:order-1"
              }
            >
              <h3 className="text-3xl font-medium mb-4">{item.title}</h3>
              <p
                className={`text-xl font-normal ${plusJakartaDisplay.className}`}
              >
                {item.description}
              </p>
            </div>
          </div>
        </FadeInSection>
      ))}
    </>
  );
}
