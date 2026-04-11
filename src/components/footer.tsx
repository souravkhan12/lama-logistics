"use client";

import { Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@/components/button";
import { ScrollReveal } from "@/components/motion";

const SERVICES = [
  { label: "Decommissioning Services", href: "#" },
  { label: "End-to-End Network Decommissioning Expertise", href: "#" },
  { label: "Responsible Recycling & Value Recovery", href: "#" },
  { label: "Enterprise Network Solutions", href: "#" },
];

const INDUSTRIES = [
  { label: "Telecom Operations", href: "#" },
  { label: "Enterprise Networks", href: "#" },
  { label: "Data Centers", href: "#" },
  { label: "Government", href: "#" },
];

const ABOUT = [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

function Field({ label }: { label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <input
        className="border-0 border-b border-(--color-footer-input-border) bg-transparent text-b2 py-4 text-white outline-none focus:border-(--color-footer-accent) placeholder:text-b2 placeholder:text-white"
        placeholder={label}
      />
    </div>
  );
}

export default function Footer() {
  const router = useRouter();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-(--color-footer-bg) text-white"
    >
      <div className="layout-container relative flex flex-col gap-20 py-(--space-section-padding)">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-16 px-(--space-container-padding) lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <ScrollReveal className="flex max-w-[465px] flex-col gap-8">
            <h2 className="font-display text-h0 leading-tight">
              Let’s plan your <br /> next transition!
            </h2>

            <p className="text-b1 text-(--color-neutral-icon)">
              Complex infrastructure needs a trusted partner, not just a vendor.
              Share your project details, and we’ll reach out with a tailored
              strategy and a clear path forward.
            </p>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-stretch gap-3 overflow-hidden py-8 text-black"
            >
              <span className="flex size-14 shrink-0 items-center justify-center rounded-sm bg-(--color-surface-cream)">
                <Calendar className="size-6" />
              </span>
              <span className="flex h-14 min-w-0 items-center rounded-sm bg-(--color-surface-cream) px-(--space-btn-x) font-mono text-b2 uppercase">
                Pick a time with Calendly
              </span>
            </a>
          </ScrollReveal>

          {/* RIGHT FORM */}
          <ScrollReveal className="flex flex-col" delay={0.08}>
            <form
              className="relative z-10 flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <Field label="Your Full Name" />
              <Field label="Company’s Name" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="Work Email Address" />
                <Field label="Work Phone" />
              </div>

              <Field label="Tell us more about your needs (Optional)" />

              <label
                htmlFor="footer-consent"
                className="flex max-w-[382px] cursor-pointer items-center gap-4 pt-8"
              >
                <input
                  id="footer-consent"
                  name="consent"
                  type="checkbox"
                  className="footer-consent-checkbox mt-0.5"
                />
                <span className="text-b2 leading-relaxed text-white">
                  I agree that Lama Telecom may contact me at the email address
                  or phone number above.
                </span>
              </label>

              <div className="pt-2">
                <Button variant="accent" isArrow type="submit">
                  SEND
                </Button>
              </div>

              <p className="text-b3 text-(--color-footer-muted)">
                By completing this form, I have read, acknowledged and <br />{" "}
                agree to the{" "}
                <Link
                  href="/privacy"
                  className="text-white underline-offset-2 hover:text-(--color-footer-accent) hover:underline"
                >
                  Privacy Policy
                </Link>
              </p>
            </form>
          </ScrollReveal>
        </div>

        {/* WAVE (FIXED) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-full opacity-30">
          <Image
            src="/footer-wave.svg"
            alt=""
            width={1440}
            height={300}
            className="w-full object-contain"
            unoptimized
          />
        </div>

        {/* FOOTER LINKS — 2-col grid matches top: brand under copy, nav columns under form */}
        <ScrollReveal className="mt-20 border-t border-(--color-footer-divider) pt-12 px-(--space-container-padding)">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="flex max-w-[465px] flex-col gap-6">
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-fit cursor-pointer border-0 bg-transparent p-0"
                aria-label="Go to home"
              >
                <Image
                  src="/footer/logo.svg"
                  alt="Lama Telecom"
                  width={197}
                  height={40}
                />
              </button>

              <p className="text-b2 leading-relaxed text-(--color-footer-muted)">
                2161 Shattuck Ave, Ste 232 <br />
                Berkeley, CA 94704
              </p>

              <div className="flex gap-3">
                <Image
                  src="/footer/linkedin.svg"
                  alt="Linkedin"
                  width={40}
                  height={40}
                />
                <Image
                  src="/footer/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                />
                <Image src="/footer/X.svg" alt="X" width={40} height={40} />
              </div>
            </div>

            <div className="grid min-w-0 grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-x-8 lg:gap-x-10">
              <nav
                aria-label="Services"
                className="flex min-w-0 flex-col gap-5"
              >
                <h3 className="font-mono text-o1 uppercase tracking-wider text-(--color-footer-muted)">
                  Services
                </h3>
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {SERVICES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav
                aria-label="Industries"
                className="flex min-w-0 flex-col gap-5"
              >
                <h3 className="font-mono text-o1 uppercase tracking-wider text-(--color-footer-muted)">
                  Industries
                </h3>
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {INDUSTRIES.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav aria-label="About" className="flex min-w-0 flex-col gap-5">
                <h3 className="font-mono text-o1 uppercase tracking-wider text-(--color-footer-muted)">
                  About
                </h3>
                <ul className="flex flex-col gap-3.5 text-b2 leading-snug">
                  {ABOUT.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="text-white/90 transition-colors hover:text-(--color-footer-accent)"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </ScrollReveal>

        {/* BOTTOM */}
        <ScrollReveal className="flex flex-col gap-4 border-t border-(--color-footer-divider) pt-8 pb-1 text-b3 text-(--color-footer-muted) sm:flex-row sm:justify-between px-(--space-container-padding)">
          <span>© 2026 Lama Telecom Services. All Rights Reserved.</span>
          <div className="flex flex-wrap gap-6">
            <Link
              href="/terms"
              className="transition-colors hover:text-(--color-footer-accent)"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="transition-colors hover:text-(--color-footer-accent)"
            >
              Privacy Policy
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
