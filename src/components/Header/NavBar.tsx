"use client";
import { usePathname } from "next/navigation";
import LandingHeader from "./LandingHeader";

const NavBar = () => {
  const pathName = usePathname();
  if (pathName === "/thank-you/") {
    return null;
  }
  return (
    <>
      <LandingHeader />
    </>
  );
};

export default NavBar;
