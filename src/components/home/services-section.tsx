import Button from "@/components/button";
import { ServicesSectionCard } from "@/components/home/services-section-card";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/motion";
import SectionBadge from "@/components/section-badge";

const services = [
  {
    title: "About our Deinstallation Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    readMoreHref: "/services#strategic-decommissioning",
  },
  {
    title: "End-to-End Network Deinstallation Expertise",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=800&q=80",
    readMoreHref: "/services#network-deinstallation",
  },
  {
    title: "Responsible Recycling & Value Recovery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    readMoreHref: "/services#responsible-recycling",
  },
  {
    title: "Enterprise Network Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
    readMoreHref: "/services#enterprise-network",
  },
] as const;

export default function ServicesSection() {
  return (
    <section className="bg-(--color-bg) py-(--space-section-padding)">
      <div className="layout-container">
        <ScrollReveal className="mb-10 flex flex-col gap-(--space-gap-lg)">
          <SectionBadge
            label="OUR SERVICES"
            backgroundColor="var(--color-surface-blush)"
            className="w-fit"
          />

          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <h2 className="flex-1 font-display text-h2 leading-tight text-(--color-fg) md:text-h1">
              Protecting{" "}
              <span className="text-(--color-muted)">your value</span> through
              <br className="hidden md:block" /> {""}
              every network cycle
            </h2>

            <div className="flex flex-1 flex-col items-start gap-6">
              <p className="text-b1">
                We remove, recover, and repurpose your assets across all
                <br className="hidden md:block" /> {""}
                environments—maximizing value with zero disruption and
                <br className="hidden md:block" /> {""} total environmental
                compliance.
              </p>

              <Button href="/services" variant="secondary" isArrow>
                ALL SERVICES
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="mb-10 border-t border-(--color-border)" />

        <StaggerContainer className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <ServicesSectionCard {...service} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
