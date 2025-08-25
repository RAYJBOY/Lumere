import { SpotlightItems } from "@/components/layout/SpotlightItems";
import Image from "next/image";

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
          <h1 className="text-5xl font-bold">WELCOME TO LUMERÉ</h1>
          <p className="mt-4 text-lg italic">Your daily dose of excitement</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-7xl mx-auto my-10 items-center">
        <div className="grid-span-1 md:col-span-2">
          <h2 className="text-3xl font-semibold mb-2 text-center">OUR STORY</h2>
          <p className="text-lg text-center p-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
            faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
            pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
            tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
            Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
            hendrerit semper vel class aptent taciti sociosqu. Ad litora
            torquent per conubia nostra inceptos himenaeos.
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden hidden md:block h-100 w-70">
          <Image src="/images/owners.png" alt="Owners" fill />
        </div>

        <h2 className="text-3xl font-semibold m-2 text-center col-span-1 md:col-span-3">
          OUR SPECIALTIES
        </h2>
        <SpotlightItems />
      </div>
    </>
  );
}
