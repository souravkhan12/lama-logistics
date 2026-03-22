import Navbar from "@/components/navbar";
import Hero from "@/components/home/hero";
import WhoWeAre from "@/components/home/who-we-are";
import Stats from "@/components/home/stats";
import ServicesSection from "@/components/home/services";
import LoopInfra from "@/components/home/loop-infra";
import BrandsSection from "@/components/home/brands-section";
import StrategicSectors from "@/components/home/strategic-sectors";

function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      <WhoWeAre />
      <Stats />
      <ServicesSection />
      <LoopInfra />
      <BrandsSection />
      <StrategicSectors />
    </div>
  );
}

export default Page;
