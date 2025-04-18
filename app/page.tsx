import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import Ready from "@/components/Ready";
import LineSet from "@/components/LineSet";
import { LineSetData } from "@/components/data";





export default function Home() {
  return (
    <div className="bg-[url('/Image/image.jpg')] min-h-screen sm:p-2 bg-cover bg-center bg-no-repeat bg-fixed font-[var(--font-geist-sans)]">
      <NavBar />
      <Hero />
      <Main />
      <Ready />
      <div className="flex justify-center">
      <div className="flex justify-center items-center text-gray-400 h-20 w-250 bg-gray-900 gap-10">
         
      {LineSetData?.map((item) => (
      <div key={item.id}>
        <LineSet Icon={item.Icon} title={item.title} />
      </div>
      ))}
      </div>
      </div>
      <div className="h-100 w-full bg-amber-300 mt-20">
        <div className=""></div>
      </div>
    </div>
  );
}
