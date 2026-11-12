import Footer2 from "@/components/Footer/Footer2";
import NavBar from "@/components/Header/NavBar";
import Whatsapp from "@/components/WhatsApp";
import Salesiq from "@/components/zohochatbot/Salesiq";
import type { Metadata } from "next";
import GlobalLeadPopup from "@/components/GlobalLeadPopup";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hotel & Restaurant Marketing Agency in Dubai | Fielmente",
  description:
    "Hospitality marketing for hotels and restaurants in Dubai. Explore SEO, Google Ads and social media services with Fielmente and discuss your goals.",
  keywords: "",
  alternates: {
    canonical: "https://dubai.fielmente.com/",
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
  authors: [{ name: "Fielmente", url: "https://dubai.fielmente.com/" }],
  openGraph: {
    title: "Hotel & Restaurant Marketing Agency in Dubai | Fielmente",
    description:
      "Hospitality marketing for hotels and restaurants in Dubai. Explore SEO, Google Ads and social media services with Fielmente and discuss your goals.",
    url: "https://dubai.fielmente.com/",
    siteName: "dubai.Fielmente",
    locale: "en_AE",
    type: "website",

    images: [
      {
        url: "https://dubai.fielmente.com/images/Fielmente-og.png",
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
        <Salesiq />
      </head>
      <body suppressHydrationWarning={true}>
        {/* <RenderChatBot /> */}
        <NavBar />
        {children}
        <Footer2 />
        <Whatsapp />
        <GlobalLeadPopup />
      </body>
    </html>
  );
}
