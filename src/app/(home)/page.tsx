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
    heading: `Boost your  <strong>hotel's growth</strong> with proven strategies and advanced <strong>marketing solutions</strong> for <strong>Dubai's</strong> dynamic market`,
    // heading: `Boost hotel <strong>bookings</strong> and brand visibility with a top Hotel Marketing Company in the <strong>Dubai.</strong>`,
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
      "Welcome to Fielmente – your top choice for Revenue Management and Hotel Digital Marketing in Dubai. Elevate your hotel business with expert solutions. As a global leader in Revenue Management, Fielmente offers innovative Hotel Digital Marketing services designed to thrive in Dubai’s competitive market.",
    img: "/images/Dubai.webp",
    description2: [
      "Our certified experts, recognized as a premier digital marketing agency in Dubai, bring extensive experience to ensure your hotel excels in the hospitality landscape. Our services include meticulous OTA management, advanced Channel Manager solutions, and comprehensive Digital Marketing strategies such as SEO, SEM, and Online Reputation Management. Additionally, we provide captivating website development and detailed digital audits for a competitive edge.",
      "Elevate your hotel’s success – Choose Fielmente, your trusted partner for hotel marketing and revenue management in Dubai.",
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
