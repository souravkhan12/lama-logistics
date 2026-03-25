import type { Metadata } from "next";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ServicesDecomissiong from "@/components/services/services-decomissiong";
import ServicesHero from "@/components/services/services-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "We help operators, OEMs, and service providers remove, recover, and repurpose infrastructure while maximizing asset value and ensuring environmental compliance.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ServicesHero />
      <ServicesDecomissiong />
      <Footer />
    </div>
  );
}
