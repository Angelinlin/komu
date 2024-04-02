import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import ToasterContext from "@/components/hooks/toaterProvider";
import { Wallet } from "@/components/hooks/Wallet";
import SessionProvider from "@/app/SessionProv";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Komu Arcade",
  description: "Arcade Retro in Virtual Reality",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`} >
        <ToasterContext>
          <SessionProvider>
            <Wallet>
              <StarsCanvas />
              <Navbar />
              {children}
            </Wallet>
          </SessionProvider>
        </ToasterContext>
      </body>
    </html>
  );
}
