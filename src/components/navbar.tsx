import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto px-[20px] h-[104px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image src="/favicon.svg" alt="logo" width={65} height={35} />
          <div className="flex flex-col leading-tight">
            <span className="font-display font-medium text-h3">Lama</span>
            <span className="font-display font-medium text-h3">Telecom</span>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <nav className="flex items-center gap-10">
            <Link
              href="#"
              className="text-b2 font-medium font-display uppercase"
            >
              ABOUT
            </Link>
            <Link
              href="#"
              className="text-b2 font-medium font-display uppercase"
            >
              SERVICES
            </Link>
            <Link
              href="#"
              className="text-b2 font-medium font-display uppercase"
            >
              INDUSTRIES
            </Link>
            <Link
              href="#"
              className="text-b2 font-medium font-display uppercase"
            >
              CAREERS
            </Link>
          </nav>

          <Button
            isArrow={false}
            className="text-b2 font-light font-display uppercase"
          >
            LET'S TALK
          </Button>
        </div>
      </div>
    </header>
  );
}
