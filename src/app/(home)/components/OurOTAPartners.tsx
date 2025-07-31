"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import goibibo from "../../../../public/images/goibibo-logo.png";
import agoda from "../../../../public/images/agoda-logo.png";
import razorpay from "../../../../public/images/razorpay-logo.png";
import airbnb from "../../../../public/images/airbnb-logo.png";
import SectionHeading from "./SectionHeading";
import Container from "./Container";
import Section from "./Section";

const OurOTAPartners = () => {
  const SectionHeadingDetails = {
    title: "We Partner with the ",
    span: "Best",
  };
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeading {...SectionHeadingDetails} />
        <Swiper
          modules={[Autoplay]}
          spaceBetween={5}
          slidesPerView={2}
          loop={true}
          speed={900}
          autoplay={{
            delay: 4000,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },

            1024: {
              slidesPerView: 6,
              spaceBetween: 10,
            },
          }}
          className="mySwiper mt-12 max-md:mt-8"
        >
          {OtaImages.map((item, index) => (
            <SwiperSlide key={index} className="p-2">
              <Link
                href={"/"}
                className="relative w-full lg:aspect-[3/1.5] aspect-[4/4] h-[7rem] rounded-xl flex justify-center items-center box-shadow transition-all duration-300 ease-in-out"
              >
                <Image
                  src={item.src}
                  alt={`${item.alt}`}
                  // width={100}
                  // height={100}
                  fill
                  priority={true}
                  className="object-contain w-full h-full rounded-md p-3 bg-white"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
};

export default OurOTAPartners;

const OtaImages = [
  {
    src: "/images/makemytrip-logo.png",
    alt: "make my trip",
  },
  {
    src: "/images/cleartrip-logo.png",
    alt: "clear trip",
  },
  {
    src: airbnb,
    alt: "airbnb",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
  {
    src: agoda,
    alt: "agoda",
  },
  {
    src: razorpay,
    alt: "razorpay",
  },
  {
    src: "/images/makemytrip-logo.png",
    alt: "make my trip",
  },
  {
    src: "/images/cleartrip-logo.png",
    alt: "clear trip",
  },
  {
    src: airbnb,
    alt: "airbnb",
  },
  {
    src: goibibo,
    alt: "goibibo",
  },
  {
    src: agoda,
    alt: "agoda",
  },
  {
    src: razorpay,
    alt: "razorpay",
  },
];
