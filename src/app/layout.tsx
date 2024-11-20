import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "@/components/Header/NavBar";
import Whatsapp from "@/components/WhatsApp";
import Call from "@/components/Call";
import Footer2 from "@/components/Footer/Footer2";
import LandingHeader from "@/components/Header/LandingHeader";

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <LandingHeader />
        {children}
        <Footer2 />
        <Whatsapp />
        <Call />
      </body>
    </html>
  );
}
