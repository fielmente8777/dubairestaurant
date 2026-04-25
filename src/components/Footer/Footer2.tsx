"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "../../app/(home)/components/Container";
import {
  FillFacebook,
  FillLinkedin,
  FillTwitter,
  Google,
  TrustPiolet,
} from "@/utils/icons";
import { AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import PopupForm from "../PopupForm";
import Image from "next/image";
import { landingFooterData } from "./footerData";

function Footer2() {
  const pathname = usePathname();

  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [showModal, setShowModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);
  const [formRes, setFormRes] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  // const host = "https://eazotel.eazotel.com/api/dashboard/editnewsletter";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (value.length <= 10) {
      setUserPhone(value);
      setErrorMessage(value.length < 10 ? "Please enter a valid number" : "");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserEmail(value);
    setEmailErrorMessage(
      !emailRegex.test(value) ? "Please enter a valid email address" : "",
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    try {
      setLoader(true);
      const { data } = await axios.post(
        `https://nexon.eazotel.com/eazotel/addcontacts`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        {
          email: userEmail,
          Name: userName,
          Contact: `${userPhone}`,
          created_from: "webform",
          source_url: window.location.href,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      // if (data.success) {
      if (data.Status) {
        setLoader(false);
        // // setPopupMsg("You information has been Received");
        router.push(`/thank-you/`);
        setOpenPopup(true);
        // console.log(data.Status);
        setFormRes(true);
        setUserName("");
        setUserEmail("");
        setUserPhone("");
      } else {
        setLoader(false);
        setPopupMsg("Something went wrong!");
        setOpenPopup(false);
        setFormRes(false);
      }
    } catch (error) {
      setLoader(false);
      console.error("Error submitting form:", error);
      setFormRes(false);
      alert("Something went wrong!");
    }
  };

  const aboutLinks = [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "About Us",
      link: "#",
    },
    {
      title: "reviews",
      link: "#reviews",
    },
    // {
    //   title: "Blogs",
    //   link: "#",
    // },
    {
      title: "case studies",
      link: "#",
    },
  ];
  const services = [
    {
      title: "Website Development",
      link: "#services",
    },
    {
      title: "Social Media Marketing",
      link: "#services",
    },
    {
      title: "Search Engine Optimization",
      link: "#services",
    },
    {
      title: "Paid ad campaigns",
      link: "#services",
    },
  ];
  const contactLinks = [
    {
      title: "Call: +91 81789 39108",
      link: "tel:+918178939108",
    },
    {
      title: "Mail: Sachin@fielmente.com",
      link: "mailto:sachin@fielmente.com",
    },
    {
      title: "Contact",
      link: "#contactForm",
    },
    {
      title: "Free Consultation",
      link: "#contactForm",
    },
    {
      title: "Schedule A Demo",
      link: "#contactForm",
    },
  ];

  const socialLinks = [
    {
      icon: <FillFacebook />,
      link: "https://www.facebook.com/fielmentebusiness?mibextid=ViGcVu",
    },
    {
      icon: <FillTwitter />,
      link: "https://x.com/fieladvisors?lang=en",
    },
    {
      icon: <FillLinkedin />,
      link: "https://www.linkedin.com/company/fielmente",
    },
    {
      icon: <AiFillInstagram />,
      link: "https://www.instagram.com/fielmente_hospitality/?hl=en",
    },
  ];
  // const currentYear = new Date().getFullYear();

  if (pathname === "/thank-you/") {
    return null;
  }

  return (
    <>
      <footer className="max_screen_width bg-[#0A0A0C] md:py-[120px] py-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14">
            <div className="flex flex-col gap-6">
              <div className="relative w-full max-w-[183px]  aspect-[4/1.46]">
                <Image
                  src={landingFooterData.logo}
                  alt="fielment logo"
                  fill
                  className="object-cover"
                  priority
                  loading="eager"
                  sizes="100vw"
                />
              </div>
              <p className="text-white">{landingFooterData.description}</p>
            </div>
            <div className="grid md:grid-cols-2 md:gap-10 gap-6 ">
              {landingFooterData.linksData.map((item, index) => (
                <div className="flex flex-col  gap-4" key={index}>
                  <h3 className="text-white text-lg font-medium flex items-center gap-2">
                    {item.icon && <span className="">{item.icon}</span>}
                    {item.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {item.listOfLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FFFFFFB2] max-md:text-sm hover:text-secondary transition-all duration-300 ease-in-out"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </footer>
      {pathname === "/contact/" || pathname === "/contact-us/" ? null : (
        <PopupForm setShowModal={setShowModal} showModal={showModal} />
      )}
    </>
  );
}

export default Footer2;
