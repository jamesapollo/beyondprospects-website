import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import { BRAND } from "@/lib/content";
import "./globals.css";

// Albert Sans is the design system's stand-in for the reference geometric grotesk.
const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} — Curated hiring for US teams`,
    template: `%s · ${BRAND.name}`,
  },
  description:
    "Connect US companies with standout candidates through curated, pre-vetted introductions — not crowded job boards.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={albertSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
