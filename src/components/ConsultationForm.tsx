"use client";
import Container from "./Container";
import Section from "./Section";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import Form from "./Form";
import Image, { StaticImageData } from "next/image";

const ConsultationForm = () => {
  return (
    <Section className="bg-blue-dark md:py-10">
      <Container>
        <div className="lg:grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="text-white text-3xl">
              <h2>
                Client{" "}
                <b className="text-orange-primary lg:block inline">
                  Testimonials
                </b>
              </h2>
            </div>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={15}
              slidesPerView={1}
              loop={true}
              speed={900}
              autoplay={{
                delay: 4000,
              }}
              pagination={{
                clickable: true,
                el: ".pagination",
              }}
              className="mySwiper"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index} className="py-4">
                  <Card {...item} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="pagination mt-10 flex justify-center items-center gap-1"></div>
          </div>
          <div className="">
            <Form />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ConsultationForm;

const Card = ({
  src,
  alt,
  title,
  subtitle,
}: {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
}) => {
  return (
    <div className="rounded-3xl bg-[#F5F5F5]">
      <div className="flex flex-col gap-5 py-8 px-7">
        <div className="flex gap-4 items-center justify-betwee">
          <div className="flex gap-4 items-center">
            <Image
              src={src}
              alt={alt}
              width={90}
              height={90}
              className="rounded-full border-8 border-white"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-black font-bold text-xl">{title}</h3>
              <span className="text-sm">CEO</span>
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-black text-lg">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

interface cradData_type {
  src: string | StaticImageData;
  alt: string;
  title: string;
  subtitle: string;
}

const data: cradData_type[] = [
  {
    src: "/images/user.png",
    alt: "antinder bajwa",
    title: "Anant Kapoor",
    subtitle: `I have consult by Sachin, it was an amazing talk with him and he provided me the fantastic solution for my restaurant. Thank you Fielmente for giving me such a great service.`,
  },
  {
    src: "/images/user.png",
    alt: "Food Flatters",
    title: "Food Flatters",
    subtitle: `"Fielmente is highly personalized. Surveyed our outlets, checked and monitored our service area. They have provided dedicated support in every situation and strategy building."`,
  },
  {
    src: "/images/user.png",
    alt: "naveen sanga",
    title: "Naveen Sanga",
    subtitle: `"They implemented abandoned brand marketing strategies for me which saw an immediate response in additional conversion. I was very happy thus for.".`,
  },
];
