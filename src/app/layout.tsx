import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../styles/globals.scss";
import { Providers } from "@/provider/provider";

const montserrat = Montserrat({
  variable: "--font-montserrat", // variable’ды жөнөкөйлөтүп койсо болот
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // каалаган салмактар
  display: "swap",
});

export const metadata: Metadata = {
  title: "Memory Game",
  description: "Memory Game App Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
