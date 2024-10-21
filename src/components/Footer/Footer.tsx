"use client";
import { usePathname } from "next/navigation";
import Footer2 from "./Footer2";
import LandingFooter from "./LandingFooter";

const Footer = () => {
  const pathName = usePathname();

  let FooterComponent = null;

  if (pathName === "/landing-page/" || pathName === "/fielmente-lp/") {
    FooterComponent = LandingFooter;
  } else if (pathName === "/thank-you/") {
    FooterComponent = null;
  } else {
    FooterComponent = Footer2;
  }
  return <>{FooterComponent && <FooterComponent />}</>;
};

export default Footer;
