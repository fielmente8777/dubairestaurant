"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Container from '../../app/(home)/components/Container';
import { FillFacebook, FillLinkedin, FillTwitter, Google, TrustPiolet } from "@/utils/icons";
import { AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import { useRouter } from "next/navigation";
import PopupForm from "../PopupForm";


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
      !emailRegex.test(value) ? "Please enter a valid email address" : ""
    );
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormRes(true);

    try {
      setLoader(true);
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        // `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/mfxRiQ3c#generic-webhook`,
        {
          email: userEmail,
          name: userName,
          phone: `${userPhone}`,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
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
      title: "Call: +91 95018 68777",
      link: "tel:+919501868775",
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

  if(pathname === "/thank-you/"){
    return null;
  }

  return (
    <>
      <footer className="pb-12 bg-blue-dark max-w-[1540px] mx-auto mt-10 lg:mt-20 poppins">
        <section
          className="lg:py-11 max-md:pt-10 bg-no-repeat bg-cover bg-center bg-[url('/images/footer-bg.webp')]"
          style={{ backgroundSize: "100% 95%" }}
        >
          <Container>
            <div className="flex flex-col items-start gap-8">
              {/* <div className="h-[5.625rem] relative aspect-[4/1.95]">
              <Image src={Logo} alt="logo" fill className="object-contain" />
            </div> */}
              <div className="grid w-full lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                {/* About */}
                <div>
                  <h2 className="text-3xl text-orange-primary font-bold mb-4 helv">
                    About
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {aboutLinks.map((item, index) => (
                      <li
                        className="text-base text-[#787878] capitalize"
                        key={index}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div>
                  <h2 className="text-3xl text-orange-primary font-bold helv mb-4">
                    Services
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {services.map((item, index) => (
                      <li
                        className="text-base text-[#787878] capitalize"
                        key={index}
                      >
                        <Link href={item.link}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h2 className="text-3xl text-orange-primary font-bold mb-4">
                    Get in Touch
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {contactLinks.map((item, index) => (
                      <li
                        className="text-base text-[#787878] "
                        key={index}
                      >
                        {item.link ? (
                          <Link href={item.link}>{item.title}</Link>
                        ) : (
                          <p>{item.title}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div>
                  <h2 className="text-3xl text-orange-primary helv font-bold mb-4">
                    Newsletter
                  </h2>
                  <div className="flex flex-col gap-4">
                    <form className="flex flex-col gap-4 text-[#3B3B3B]" onSubmit={handleSubmit}>
                      <input
                        className="w-full bg-[#F1F1F1] rounded-sm p-3"
                        type="text"
                        placeholder="Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                      />
                      <input
                        className="w-full bg-[#F1F1F1] rounded-sm p-3"
                        type="email"
                        placeholder="Email"
                        value={userEmail}
                        onChange={handleEmailChange}
                      />
                      <input
                        className="w-full bg-[#F1F1F1] rounded-sm p-3 no-spinners"
                        type="number"
                        placeholder="Phone Number"
                        value={userPhone}
                        onChange={handlePhoneChange}
                      />
                      <button
                        className="bg-orange-primary text-white rounded-sm hover:bg-white hover:text-orange-primary border border-solid border-orange-primary py-3 w-full flex items-center justify-center font-medium"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-sm text-[#787878]">
                      By submitting this form you are confirming that you have
                      read and agree to Fielmente{" "}
                      <span className="text-[#F2B203]">Terms</span>{" "}&{" "}
                      <span className="text-[#F2B203]">Privacy Policy</span>.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex max-md:flex-col gap-6 lg:items-center justify-between w-full lg:mt-4">
                <div className="flex items-center gap-5">
                  <div className="">
                    <TrustPiolet />
                  </div>
                  <div className="">
                    <Google />
                  </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                <h3 className="text-xl font-semibold helv text-orange-primary">
                  Follow Us:
                </h3>
                <ul className="flex  items-center gap-4">
                  {socialLinks.map((item, index) => (
                    <li key={index} className="max-md:p-2 lg:pe-2 lg:py-2">
                      <span href={item.link} target="_blank" rel="noreferrer">
                      {item.icon} <span className="sr-only">icon</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div> */}
              </div>
            </div>
          </Container>
        </section>

        <Container>
          <div className="h-[1px] w-full bg-[#3B3B3B] mb-10"></div>
          <div className="flex items-center gap-3 justify-center w-full">
            <p className="text-sm text-[#787878] max-md:text-center">
              © {currentYear} Fielmente
              Hospitality Marketing Agency. All Rights
              Reserved
            </p>
            {/* <div className="flex items-center gap-4">
            <span
              // href={"/"}
              className="text-sm text-[#787878] "
            >
              Terms
            </span>
            <span
              // href={"/"}
              className="text-sm text-[#787878] "
            >
              Privacy Policy
            </span>
          </div> */}
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
