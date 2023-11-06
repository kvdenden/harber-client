import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import ConnectButton from "@/components/ConnectButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harber",
  description: "Join the Harber community.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <nav>
            <ConnectButton />
          </nav>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
