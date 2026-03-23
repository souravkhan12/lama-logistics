import Footer from "@/components/footer";
import BrandsSection from "@/components/home/brands-section";
import Hero from "@/components/home/hero";
import LoopInfra from "@/components/home/loop-infra";
import ServicesSection from "@/components/home/services";
import Stats from "@/components/home/stats";
import StrategicSectors from "@/components/home/strategic-sectors";
import WhoWeAre from "@/components/home/who-we-are";
import Navbar from "@/components/navbar";

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
      <Footer />
    </div>
  );
}

export default Page;
