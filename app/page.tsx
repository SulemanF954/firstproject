import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Ready from "@/components/Ready";
import LineSet from "@/components/LineSet";
import { LineSetData } from "@/components/data";
import Levelup from "@/components/Levelup";
import PricingCard from "@/components/PricingCard";

export default function Home() {
  return (
    <div className="bg-[url('/Image/image.jpg')] min-h-screen sm:p-2 bg-cover bg-center bg-no-repeat bg-fixed font-[var(--font-geist-sans)]">
      <NavBar />
      <Hero />
      <Main />
      <Ready />
      <div className="flex justify-center px-4">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 sm:gap-10 p-4 rounded-2xl text-gray-400 bg-gray-900 w-full max-w-6xl">
          {LineSetData?.map((item) => (
            <div key={item.id}>
              <LineSet Icon={item.Icon} title={item.title} />
            </div>
          ))}
        </div>
      </div>

      <Levelup />
      <PricingCard />
    </div>
  );
}
