"use client";
import { usePathname } from "next/navigation";
import LandingHeader from "./LandingHeader";
import Header2 from "./header2";
import React from "react";

const NavBar = () => {
  const pathname = usePathname();

  let HeaderComponent = null;

  if (pathname === "/landing-page/" || pathname === "/fielmente-lp/") {
    HeaderComponent = LandingHeader;
  } else if (pathname === "/thank-you/") {
    HeaderComponent = null;
  } else {
    HeaderComponent = Header2;
  }

  return <>{HeaderComponent && <HeaderComponent />}</>;
};

export default NavBar;
