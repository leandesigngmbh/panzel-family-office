import SmootherContainer from "@/components/atoms/SmootherContainer";
import SmootherTest from "@/components/atoms/SmootherTest";
import Agenda from "@/components/molecules/Agenda";
import Hero from "@/components/molecules/Hero";
import Manifest from "@/components/molecules/Manifest";
import Overview from "@/components/molecules/Overview";
import ShaderBackground from "@/components/molecules/ShaderBackground";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <>
      <Nav />

      <SmootherContainer>
        <div className="relative">
          <main className="flex flex-col items-center">
            <ShaderBackground />

            {/* <SmootherTest /> */}

            <Hero />

            <Overview />

            {/* Placeholder Start */}
            <div className="h-[50vh]"></div>
            {/* Placeholder End */}

            <Agenda />

            {/* Video Placeholder Start */}
            <div className="w-full h-screen items-center justify-center bg-white/50 flex">
              <span className="border border-current rounded-full p-8">
                Video Placeholder 🎥
              </span>
            </div>
            {/* Video Placeholder End */}

            <Manifest />

            {/* Placeholder Start */}
            <div className="h-[50vh]"></div>
            {/* Placeholder End */}
          </main>

          <Footer />
        </div>
      </SmootherContainer>
    </>
  );
}
