import Container from "@/components/container";
import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header>
      <Container>
        <div className="h-(--space-navbar-height) flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/favicon.svg" alt="logo" width={65} height={35} />
            <div className="flex flex-col leading-tight">
              <span className="font-display font-medium text-h3">Lama</span>
              <span className="font-display font-medium text-h3">Telecom</span>
            </div>
          </div>

          <div className="flex items-center gap-(--space-gap-md)">
            <nav className="hidden md:flex items-center gap-(--space-gap-md)">
              <Link
                href="#"
                className="text-b2 font-medium font-display uppercase hover:text-primary transition-colors"
              >
                ABOUT
              </Link>
              <Link
                href="#"
                className="text-b2 font-medium font-display uppercase hover:text-primary transition-colors"
              >
                SERVICES
              </Link>
              <Link
                href="#"
                className="text-b2 font-medium font-display uppercase hover:text-primary transition-colors"
              >
                INDUSTRIES
              </Link>
              <Link
                href="#"
                className="text-b2 font-medium font-display uppercase hover:text-primary transition-colors"
              >
                CAREERS
              </Link>
            </nav>

            <Button
              isArrow={false}
              className="hidden sm:flex text-b2 font-light font-display uppercase"
            >
              LET'S TALK
            </Button>

            {/* Mobile menu button - placeholder for future implementation */}
            <button className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
