import Image from "next/image";
import Link from "next/link";

import ContactForm from "@/components/contact/contact-form";

const EMAIL = "tenzin.gonpo@lamalogistics.com";
const PHONE_DISPLAY = "8313469383";
const PHONE_HREF = "tel:+18313469383";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-(--color-bg) pb-24 pt-32 text-(--color-fg) lg:pb-32">
      <div className="layout-container">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2 lg:gap-x-16 xl:gap-x-24">
          {/* Left — copy & contact details */}
          <div className="flex max-w-xl flex-col gap-8 lg:max-w-none">
            <h1 className="font-display text-h1 leading-tight md:text-h0">
              Let’s Talk!
            </h1>
            <p className="font-body text-b1">
              Not sure where to start? We’re happy to walk you through our
              secure chain-of-custody, environmental policies, or logistics
              capabilities.
            </p>

            <div className="h-px w-full  bg-[#8E8E93]" />

            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-3 text-(--color-fg) transition-colors hover:text-(--color-primary)"
                >
                  <Image
                    src="/contact/mail.svg"
                    alt="Email"
                    width={28}
                    height={28}
                  />
                  <span className="font-body text-b1 ">{EMAIL}</span>
                </a>
              </li>
              <li>
                <a
                  href={PHONE_HREF}
                  className="group flex items-center gap-3 text-(--color-fg) transition-colors hover:text-(--color-primary)"
                >
                  <Image
                    src="/contact/phone.svg"
                    alt="Phone"
                    width={25}
                    height={25}
                  />
                  <span className="font-body text-b1">{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li className="font-body text-b2 leading-relaxed text-(--color-text-body)">
                2161 Shattuck Ave, Ste 232
                <br />
                Berkeley, CA 94704
              </li>
            </ul>

            <div className="flex gap-3 pt-2">
              <Box
                href="https://www.linkedin.com"
                alt="LinkedIn"
                src="/contact/linkedin.svg"
              />
              <Box
                href="https://www.facebook.com"
                alt="Facebook"
                src="/contact/facebook.svg"
              />
              <Box href="https://x.com" alt="X" src="/contact/x.svg" />
            </div>
          </div>

          {/* Right — form card */}
          <div className="lg:min-w-0">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}

function Box({ href, alt, src }: { href: string; alt: string; src: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="transition-opacity rounded-sm hover:opacity-80 bg-[#0A0227]"
      aria-label={alt}
    >
      <Image src={src} alt={alt} width={60} height={60} />
    </Link>
  );
}
