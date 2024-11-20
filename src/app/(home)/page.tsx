import {
  AboutUs,
  Banner,
  GrowthCard,
  OurClients,
  OurOTAPartners,
} from "./components";
import { OurServices } from "./components";
import { BannerProps, DataType, GrowthCardProps } from "./types";

const page = () => {
  const bannerData: BannerProps = {
    img: "/images/Dubai_flag.webp",
    title: "Leading Hotel Marketing Company",
    heading: `Boost hotel <strong>bookings</strong> and brand visibility with a top Hotel Marketing Company in the <strong>Dubai.</strong>`,
    link: true,
  };
  const growthcardData: GrowthCardProps = {
    img: "/images/growth_card.png",
    title: "YOUR GROWTH STARTS HERE.",
    description:
      "Book an intro call to see how Fielmente can take your business to the next level. We would love to chat.",
    link: true,
  };

  const aboutUsData: DataType = {
    title: "We are the Best Hotel Marketing Company in the",
    span: "Dubai",
    description:
      "Welcome to Fielmente – Your Top Choice for Revenue Management and Hotel Digital Marketing in the Dubai. Elevate your hotel business with our expert services. As a leading Revenue Management company globally, Hospitality Minds specializes in tailored Hotel Digital Marketing solutions designed for success in the dynamic Dubai market.",
    img: "/images/Dubai.webp",
    description2: [
      "Our certified experts, recognized as a premier digital marketing agency in the Dubai, bring extensive experience to ensure your hotel thrives in the competitive landscape. Benefit from meticulous OTA management, advanced Channel Manager services for hotels, and comprehensive Digital Marketing strategies covering SEO, SEM, and Online Reputation Management. We also offer captivating website development and detailed digital audits to give you a competitive edge.",
      "Elevate your hotel's success – Choose Fielmente today, your trusted partner as a hotel marketing agency and among the top hotel marketing companies in the Dubai specializing in revenue management for hotels.",
    ],
  };
  return (
    <main className="bg-white">
      <Banner {...bannerData} />
      <AboutUs {...aboutUsData} />
      <OurServices />
      <OurClients SHeading />
      <GrowthCard {...growthcardData} />
      <OurOTAPartners />
    </main>
  );
};

export default page;
