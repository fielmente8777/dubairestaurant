"use client";
import Container from "@/components/Container";
import Section from "@/components/Section";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper/modules";
import { ClientImages } from "@/utils/client";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./SectionHeadings/SectionHeading";
const OurClient = () => {
  return (
    <Section>
      <div className="bg-[#110D3C] py-10">
        <Container>
          <div className="">
            <h2 className="text-white text-4xl text-center">
              Our <b className="text-orange-primary">Clients</b>
            </h2>
          </div>
          <div className="mt-10">
            <div>
              <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={2}
                loop={true}
                speed={900}
                autoplay={{
                  delay: 4000,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },

                  1024: {
                    slidesPerView: 7,
                    spaceBetween: 10,
                  },
                }}
                className="mySwiper"
              >
                {ClientImages.map((item, index) => (
                  <SwiperSlide key={index} className="py-4">
                    <Link
                      href={"/"}
                      className="relative w-full lg:aspect-[4/2.5] hover:-translate-y-3 ease-in-out duration-300 transition shadow-md aspect-[4/4] h-[9rem] rounded-md flex justify-center items-center"
                    >
                      <Image
                        src={item.src}
                        alt={`${item.alt}`}
                        fill
                        className={`${
                          index == 25 ||
                          index == 26 ||
                          index == 19 ||
                          index == 1 ||
                          index == 2 ||
                          index == 4 ||
                          index == 5 ||
                          index == 7 ||
                          index == 9 ||
                          index == 11
                            ? "object-cover"
                            : "object-contain"
                        } w-full h-full rounded-md p-3`}
                        style={{
                          backgroundColor: `${
                            index == 23
                              ? "#22413f"
                              : index == 22
                              ? "#F7F7F7"
                              : index == 9
                              ? "#FF6C26"
                              : index == 16
                              ? "#F7F7F7"
                              : index == 21 || index == 0
                              ? "#1e1e1e"
                              : index == 18
                              ? "#F7F7F7"
                              : index == 20
                              ? "#f7f7f7"
                              : index == 25
                              ? "#E6E6E6"
                              : index == 26
                              ? "#F3F3f3"
                              : "white"
                          }`,
                        }}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};

export default OurClient;
