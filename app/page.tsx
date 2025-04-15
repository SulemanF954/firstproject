import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[url('/Image/image.jpg')] min-h-screen sm:p-8 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed font-[var(--font-geist-sans)]">
      <NavBar />
      <Hero />
    </div>
  );
}
