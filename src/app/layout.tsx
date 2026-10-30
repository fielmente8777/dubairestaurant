import Footer2 from "@/components/Footer/Footer2";
import NavBar from "@/components/Header/NavBar";
import Whatsapp from "@/components/WhatsApp";
import Salesiq from "@/components/zohochatbot/Salesiq";
import type { Metadata } from "next";
import GlobalLeadPopup from "@/components/GlobalLeadPopup";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Hotel and restaurant marketing company in dubai | fielmente",
  description:
    "Hospitality marketing for hotels, resorts, restaurants and cloud kitchens in Dubai and the UAE. Grow bookings with SEO, Google Ads and social media.",
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
    title: "Hotel and restaurant marketing company in dubai | fielmente",
    description:
      "Hospitality marketing for hotels, resorts, restaurants and cloud kitchens in Dubai and the UAE. Grow bookings with SEO, Google Ads and social media.",
    url: "https://dubai.fielmente.com/",
    siteName: "dubai.Fielmente",
    locale: "en_IN",
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
