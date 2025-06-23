import SmootherContainer from "@/components/atoms/SmootherContainer";
import Agenda from "@/components/molecules/Agenda";
import BackgroundVideo from "@/components/molecules/BackgroundVideo";
import Hero from "@/components/molecules/Hero";
import Manifest from "@/components/molecules/Manifest";
import Overview from "@/components/molecules/Overview";
import Purpose from "@/components/molecules/Purpose";
import ShaderBackground from "@/components/molecules/ShaderBackground";
import StatsSection from "@/components/molecules/StatsSection";
import Footer from "@/components/organisms/Footer";
import Nav from "@/components/organisms/Nav";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <>
      <Nav />

      <ShaderBackground />

      <SmootherContainer>
        <div className="relative">
          <main className="flex flex-col items-center min-h-screen">
            {/* <SmootherTest /> */}

            <Hero />

            <Overview />

            {/* Placeholder Start */}
            <div className="h-[50vh]"></div>
            {/* Placeholder End */}

            <Agenda />

            {/* Placeholder Start */}
            <div className="h-[50vh]"></div>
            {/* Placeholder End */}

            <Purpose />

            <div className="relative h-screen z-50 w-full">
              <BackgroundVideo src={"/assets/bg-video.mp4"} />
            </div>

            <Manifest />

            {/* Placeholder Start */}
            <div className="h-[50vh]"></div>
            {/* Placeholder End */}

            <StatsSection />
          </main>

          <Footer />
        </div>
      </SmootherContainer>
    </>
  );
}
