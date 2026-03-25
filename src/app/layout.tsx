import type { Metadata } from "next";
import "lenis/dist/lenis.css";

import { LenisProvider } from "@/components/lenis-provider";
import { funnelDisplay, martianMono, matter } from "@/utils/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "Lama Logistics | %s",
    default: "Lama Logistics",
  },
  description: "A logistics company that puts people first",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${funnelDisplay.variable} ${martianMono.variable} ${matter.variable}`}
    >
      <body className="font-body antialiased">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
