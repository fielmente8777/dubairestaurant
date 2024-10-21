"use client";
import React, { useState } from "react";
import "./Header.scss";
import Link from "next/link";
import { Nav_Links } from "./Nav_Links";
import Image from "next/image";
import Logo from "../../../public/images/logo.webp";
import { TiArrowSortedDown } from "react-icons/ti";

import { FaPhone } from "react-icons/fa6";
import MobileNav from "./MobileNav";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { usePathname } from "next/navigation";

const Header2 = () => {
  const pathname = usePathname();

  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      {pathname === "/thank-you/" ? (
        ""
      ) : (
        <header>
          <nav className="max-width nav-bar-container">
            {/* Logo Container***** */}
            <Link
              href={"/"}
              className="relative w-[160px] aspect-[2/.8] flex items-center justify-center"
            >
              <Image
                src={Logo}
                alt="fielmente-logo"
                priority={true}
                fill
                className="object-contain"
                sizes="100px"
              />
            </Link>

            {/* Links Container******** */}
            <div className="links-container">
              {Nav_Links.map((Links, Index) => {
                return (
                  <div key={Index} className="flex items-center gap-6">
                    <div className="links">
                      <Link
                        href={Links.src}
                        className="flex items-center gap-2"
                      >
                        {Links.linkName}{" "}
                        {Links.subLinks && <TiArrowSortedDown />}
                      </Link>
                      {Links.subLinks && (
                        <ul className="sub-links-container">
                          {Links.subLinks.map((SubLinks, Index) => {
                            return (
                              <li key={Index} className="sub-links">
                                <Link
                                  href={SubLinks.src}
                                  className="flex items-center gap-2"
                                >
                                  {SubLinks.linkName}{" "}
                                  {SubLinks.subLinks && <TiArrowSortedDown />}
                                </Link>
                                {SubLinks.subLinks && (
                                  <ul className="child-sub-links-container z-20">
                                    {SubLinks.subLinks.map(
                                      (SubLinks, Index) => {
                                        return (
                                          <li key={Index} className="sub-links">
                                            <Link
                                              href={SubLinks.src}
                                              className="z-20"
                                            >
                                              {SubLinks.linkName}
                                            </Link>
                                          </li>
                                        );
                                      }
                                    )}
                                  </ul>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    {/* For Right Border***** */}
                    {Index >= 0 && Index < Nav_Links.length - 1 && (
                      <div className="w-[0.14rem] h-6 bg-black"></div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Contact Container***** */}
            <div>
              <Link
                href={"tel:+919501868775"}
                className="flex contact-container items-center gap-1 border border-blue-dark rounded-md bg-blue-dark px-4 py-2 text-white"
              >
                <OutLineCall /> +919501868775
              </Link>
            </div>

            {/* Hamburger Menu **** */}
            <div className="xl:hidden z-50">
              {isNavOpen ? (
                <div className="text-white transition-transform duration-500 ease-in-out transform delay rotate-180 scale-150">
                  <IoClose
                    color="black"
                    size={30}
                    onClick={() => setIsNavOpen(false)}
                  />
                </div>
              ) : (
                <div className="transition-transform duration-500 ease-in-out transform rotate-0 scale-100">
                  <HiMenuAlt3
                    color="black"
                    size={30}
                    onClick={() => setIsNavOpen(true)}
                  />
                </div>
              )}
              {/* <AiOutlineMenu size={30} /> */}
            </div>
          </nav>

          {/* Bottom underline******* */}
          <hr className="bg-white h-[0.18rem] w-[95%] mx-auto" />

          {/* Mobile nav-bar***** */}
          <MobileNav setIsOpen={setIsNavOpen} isOpen={isNavOpen} />
        </header>
      )}
    </>
  );
};

export default Header2;

export const OutLineCall = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="27"
    viewBox="0 0 26 27"
    fill="none"
  >
    <path
      d="M9.21191 3.22391L8.27981 3.50471C7.44986 3.755 6.70868 4.23717 6.14351 4.89446C5.57834 5.55176 5.21269 6.35683 5.08961 7.21491C4.70351 9.90331 5.56671 13.0467 7.64801 16.6516C9.72411 20.2474 12.0095 22.564 14.525 23.578C15.3333 23.9038 16.218 23.9906 17.0742 23.8281C17.9303 23.6656 18.7218 23.2607 19.3545 22.6615L20.0591 21.9933C20.5166 21.5603 20.8014 20.9759 20.8605 20.3487C20.9195 19.7215 20.7489 19.0942 20.3802 18.5834L18.6174 16.1394C18.3791 15.8095 18.0435 15.5624 17.6577 15.4327C17.2718 15.3031 16.8551 15.2975 16.4659 15.4166L13.7996 16.2317L13.7307 16.2447C13.4369 16.2876 12.7583 15.6519 11.9133 14.1881C11.0293 12.6567 10.8473 11.761 11.0904 11.5296L12.4463 10.2647C12.9416 9.80218 13.28 9.19638 13.414 8.53205C13.5481 7.86772 13.4711 7.17812 13.1938 6.55971L12.3332 4.64741C12.0744 4.07196 11.6152 3.61025 11.0412 3.34834C10.4671 3.08643 9.81614 3.04221 9.21191 3.22391ZM11.1502 5.18041L12.0082 7.09271C12.1747 7.46363 12.2211 7.87731 12.1409 8.2759C12.0608 8.67449 11.858 9.03804 11.561 9.31571L10.2012 10.5819C9.33021 11.4061 9.61881 12.8127 10.7888 14.8381C11.8886 16.7439 12.8922 17.6851 13.9712 17.5213L14.1324 17.4875L16.8468 16.6594C16.9766 16.6196 17.1155 16.6213 17.2442 16.6645C17.3729 16.7076 17.4849 16.7899 17.5644 16.8999L19.3272 19.3439C19.5118 19.5993 19.5973 19.913 19.5679 20.2268C19.5385 20.5405 19.3961 20.8329 19.1673 21.0495L18.4614 21.7177C18.0095 22.1454 17.4442 22.4344 16.8328 22.5504C16.2215 22.6663 15.5897 22.6042 15.0125 22.3716C12.8051 21.4824 10.7186 19.3673 8.77511 16.0016C6.82641 12.6281 6.03731 9.75901 6.37661 7.39951C6.46444 6.78647 6.7256 6.21129 7.12933 5.74168C7.53307 5.27208 8.06258 4.9276 8.65551 4.74881L9.58761 4.46801C9.88981 4.37721 10.2147 4.39941 10.5017 4.53049C10.7888 4.66157 11.0183 4.89257 11.1476 5.18041"
      fill="#F26633"
    />
  </svg>
);
