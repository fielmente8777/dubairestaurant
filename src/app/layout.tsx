import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "@/components/Header/NavBar";
import Whatsapp from "@/components/WhatsApp";
import Call from "@/components/Call";
import Footer2 from "@/components/Footer/Footer2";
import LandingHeader from "@/components/Header/LandingHeader";
import Script from "next/script";
import RenderChatBot from "@/components/chatbot/RenderChatBot";

export const metadata: Metadata = {
  title: "Hotel and restaurant marketing company in dubai | fielmente",
  description:
    "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
  keywords:"",
  alternates: {
    canonical: "https://https://dubai.fielmente.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fielmente", url: "https://https://dubai.fielmente.com/" }],
  openGraph: {
    title: "Hotel and restaurant marketing company in dubai | fielmente",
    description:
      "We're the best hospitality marketing agency in India serving hotels, resorts restaurants, and cloud kitchens for more than 10 years.",
    url: "https://https://dubai.fielmente.com/",
    siteName: "dubai.Fielmente",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://https://dubai.fielmente.com/images/Fielmente-og.png",
        width: 1200,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <Script id="zoho-init" strategy="afterInteractive">
          {`
          window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}
          `}
        </Script>
        <Script
          id="zsiqscript"
          src="https://salesiq.zohopublic.in/widget?wc=siq1a53c0a073d244118c9a52feae425ec200f5a91c3949296330c5edf2c3a6e668"
          strategy="afterInteractive"
          defer
        /> */}
      </head>
      <body suppressHydrationWarning={true}>
        <RenderChatBot />
        <NavBar />
        {children}
        <Footer2 />
        <Whatsapp />
        <Call />
      </body>
    </html>
  );
}
