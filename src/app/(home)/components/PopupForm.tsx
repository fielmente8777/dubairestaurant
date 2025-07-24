"use client";
import { useEffect, useState, useCallback, useRef } from "react";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import  Form  from "@/components/Form";
import { IoCloseOutline } from "react-icons/io5";
const PopupForm = ({
  setShowModal,
  showModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}) => {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [formRes, setFormRes] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [popupMsg, setPopupMsg] = useState("");
  const [loader, setLoader] = useState(false);

  // useRef to store intervalId
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    }, 30000);

    // Cleanup the interval when the component unmounts or modal is closed
    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [setShowModal]);

  const closeModal = useCallback(() => {
    setShowModal(false);
    document.body.style.overflow = "auto"; // Restore scrolling

    // Clear the interval when the modal is closed
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null; // Reset the ref
    }
  }, [setShowModal]);

  const validateInputs = () => {
    let isValid = true;
    setErrorMessage("");
    setEmailErrorMessage("");

    if (userPhone.length !== 10) {
      setErrorMessage("Phone number must be exactly 10 digits.");
      isValid = false;
    }

    if (!emailRegex.test(userEmail)) {
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    }

    return isValid;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    setLoader(true);

    try {
      const { data } = await axios.post(
        // `https://nexon.eazotel.com/eazotel/addcontacts`,
        `https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook`,
        {
          // Domain: "fielmente",
          // Domain: "abhijeet",
          // email: userEmail,
          // Name: userName,
          // Contact: `${countryCode}${userPhone}`,
          // Description: userMessage,
          email: userEmail,
          name: userName,
          phone: `${countryCode}${userPhone}`,
          message: userMessage,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        setLoader(false);
        router.push(`/thank-you/?name=${encodeURIComponent(userName)}`);
      } else {
        setPopupMsg("Something went wrong!");
        setOpenPopup(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMsg("Something went wrong!");
      setOpenPopup(true);
    } finally {
      setLoader(false);
    }
  };

  interface data_Type {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }

  const form: data_Type[] = [
    {
      type: "text",
      placeholder: "Full Name",
      value: userName,
      onChange: (e) => setUserName(e.target.value),
    },
    {
      type: "email",
      placeholder: "Email",
      value: userEmail,
      onChange: (e) => setUserEmail(e.target.value),
    },
    {
      type: "number",
      placeholder: "Phone",
      value: userPhone,
      onChange: (e) => setUserPhone(e.target.value),
    },
  ];

  const pathname = usePathname();
  if(pathname === '/thank-you/'){
    return null
  }
  return (
    <>
      {showModal && (
        <section className="fixed z-50 w-full h-screen bg-black bg-opacity-70 top-0 left-0">
          <article className="flex justify-center items-center h-full">
            <div className="flex flex-col gap-3 max-w-[400px] w-full shadow-2xl p-4 relative rounded-md">
              <button
                onClick={closeModal}
                className="absolute top-[22px] lg:top-0 right-[3px] w-8 h-8 flex justify-center items-center text-lg rounded-full bg-orange-primary hover:bg-red-600 text-white"
              >
                <IoCloseOutline size={30} />
              </button>
              {/* <div className="relative w-full h-[270px] aspect-[4/4]">
                <Image
                  src={popupimg}
                  alt="Hospitality Marketing"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
              <form className="flex flex-col gap-3 w-full " onSubmit={submit}>
                {form.map((item, index) => (
                  <div
                    className="p-2 border border-sky-400 rounded-md flex gap-2 items-center"
                    key={index}
                  >
                    {item.type === "number" && (
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="bg-transparent text-sm py-1 flex items-center rounded-lg text-[#333333] focus:outline-none"
                        required
                        style={{ inlineSize: `${countryCode.length + 3}ch` }}
                      >
                        {countries.map((country, index) => (
                          <option
                            key={index}
                            value={country.code}
                            className="text-black bg-gray-100 p-0"
                          >
                            {`${country.code}`}
                          </option>
                        ))}
                      </select>
                    )}
                    <input
                      type={item.type}
                      placeholder={item.placeholder}
                      value={item.value}
                      onChange={item.onChange}
                      max={item.type === "number" ? "9999999999" : undefined}
                      required
                      className="w-full no-spinner rounded-lg outline-none focus:outline-none text-sm text-slate-800 placeholder:text-slate-500"
                    />
                    {item.type === "number" && errorMessage && (
                      <p className="text-sm text-red-500 mt-2">
                        {errorMessage}
                      </p>
                    )}
                    {item.type === "email" && emailErrorMessage && (
                      <p className="text-sm text-red-500 mt-2">
                        {emailErrorMessage}
                      </p>
                    )}
                  </div>
                ))}
                <div className="p-2 border border-sky-400 rounded-md">
                  <textarea
                    placeholder="Message"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    className="w-full outline-none rounded-lg focus:outline-none text-sm resize-none text-slate-800 placeholder:text-slate-500"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-blue-dark text-white hover:bg-sky-900 transition w-full py-3 flex-auto flex justify-center items-center text-sm rounded-lg"
                  >
                    {loader ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form> */}
              <Form />
            </div>
          </article>
        </section>
      )}
      {openPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-dark bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded">
            <p>{popupMsg}</p>
            <button
              onClick={() => setOpenPopup(false)}
              className="mt-2 bg-blue-dark text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
