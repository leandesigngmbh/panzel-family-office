import Hero from "@/components/molecules/Hero";
import ShaderBackground from "@/components/molecules/ShaderBackground";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className="relative">
      <Nav />

      <main className="flex flex-col items-center">
        <ShaderBackground />

        <Hero />
      </main>

      <Footer />
    </div>
  );
}
