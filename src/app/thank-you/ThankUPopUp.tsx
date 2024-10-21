"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const ThankUPopUp = () => {
  const [name, setName] = useState("Guest"); // Default value
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam = params.get("name");
    if (nameParam) {
      setName(nameParam);
    }
  }, []);

  const link = [
    {
      label: "What we do",
      link: "#",
    },
    {
      label: "Who we are",
      link: "#",
    },
    {
      label: "Insights",
      link: "#",
    },
  ];

  const redirectToHome = () => {
    router.push("/");
  };

  return (
    <section>
      <div className="max-w-[1900px] mx-auto">
        <div className="relative w-full h-[80vh] lg:h-screen aspect-[16/9] bg-[#01000E]">
          {/* <Image
            src={src}
            alt="hospitality marketing"
            fill
            className="object-cover"
          /> */}
          <div className="absolute flex flex-col lg:items-start px-5 md:p-24 lg:justify-start gap-8 justify-center h-full w-full">
            <div className="flex flex-col lg:items-start lg:justify-start justify-center">
              <h1 className="text-[28px]/[38px]  lg:text-4xl font-medium text-[#4486C5] mb-4">
                Leave it with us
                <br />
                {name}
              </h1>
              <p className="text-[18px] lg:text-[24px] text-white/80 mb-8 leading-12 text-start">
                We&apos;ve got your request and we&apos;ll get
                <br className="hidden lg:block" />
                back to you as soon as we can.
              </p>
              <button
                className="border w-max border-white text-white py-3 px-6 text-[14px] lg:text-2xl rounded-full shadow-inner hover:bg-[#4486C5] transition duration-200"
                onClick={redirectToHome}
              >
                Back to website
              </button>
            </div>
            <div className="flex flex-col lg:items-start lg:justify-start gap-8 justify-center">
              <Link
                href="https://fielmente.com"
                target="_blank"
                className="text-2xl text-gray-primary hover:text-[#4486C5] transition duration-200"
              >
                Learn more about Fielmente.
              </Link>
              <div className="flex gap-4 lg:gap-4">
                {link.map((item) => (
                  <Link
                    key={item.label}
                    href={item.link}
                    className="text-[12px] lg:text-2xl text-white group hover:text-[#4486C5] transition duration-200 flex max-sm:justify-between items-center gap-2"
                  >
                    {item.label}
                    <span className="sr-only">{item.label}</span>

                    <span
                      aria-hidden="true"
                      className="text-[#01000E] bg-white rounded-full transition duration-200 group-hover:bg-[#4486C5] group-hover:text-white flex items-center justify-center w-7 p-1 aspect-square text-lg font-bold"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankUPopUp;
