import { ServiceCard } from "@/components/home/service-card";
import SectionBadge from "@/components/section-badge";

const services = [
  {
    title: "About our Deinstallation Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "End-to-End Network Deinstallation Expertise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
  },
  {
    title: "Responsible Recycling & Value Recovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
  },
  {
    title: "Enterprise Network Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container">
        <div className="flex flex-col gap-(--space-gap-lg) mb-10">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="#FDF7ED"
            className="w-fit"
          />

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <h2 className="flex-1  font-display text-h2 md:text-h1 leading-tight text-(--color-fg)">
              Protecting{" "}
              <span className="text-(--color-muted)">your value</span> through
              <br />
              every network cycle
            </h2>

            <p className="flex-1  text-b1">
              We remove, recover, and repurpose your assets across all
              <br />
              environments—maximizing value with zero disruption and
              <br /> total environmental compliance.
            </p>
          </div>
        </div>

        <div className="border-t border-(--color-border) mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
