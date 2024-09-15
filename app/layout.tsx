import "../styles/global.scss";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Raleway } from "next/font/google";
import SmoothScroll from "../components/smooth-scroll";

export const metadata: Metadata = {
  title: "Iyindamope Ariori",
  description:
    "Iyindamope's blog and portfolio, following his journeys as a creator in Nigeria.",
  openGraph: {
    images: [
      {
        url: "/opengraph-imag.png", // Path to your Open Graph image
        alt: "Iyindamope Ariori",
      },
    ],
  },
};

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
      <Analytics />
    </html>
  );
}
