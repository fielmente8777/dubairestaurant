"use client";
import React, { memo, useEffect, useState } from "react";
import { Nav_Links } from "./Nav_Links";
import Link from "next/link";

import { TiArrowSortedDown } from "react-icons/ti";

function MobileNav({ isOpen, setIsOpen }: any) {
  return (
    <div
      className="fixed w-[320px] z-20 h-[100dvh] top-0 right-0 bg-gradient py-20 px-10 text-black"
      style={{
        right: isOpen ? "0" : "-100%",
        transition: "all 0.5s linear",
      }}
    >
      <ul className="flex flex-col gap-7 mt-16">
        {Nav_Links.map((link: any, index: number) => (
          <NavLinksMobile {...link} key={index} setIsOpen={setIsOpen} />
        ))}
      </ul>
    </div>
  );
}

const NavLinksMobile = ({ linkName, src, subLinks, setIsOpen }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-2">
        <Link
          href={`${src}`}
          className="text-xl capitalize"
          onClick={() => setIsOpen(false)}
        >
          {linkName}
        </Link>
        {subLinks && (
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <TiArrowSortedDown size={16} />
          </span>
        )}
      </div>
      {subLinks && (
        <ul
          className="flex flex-col"
          style={{
            maxHeight: open ? "1200px" : "0px",
            overflow: "hidden",
            transition: "all 0.8s linear",
          }}
        >
          {subLinks.map((subLink: any, subIndex: number) => (
            <NestedSubMenu key={subIndex} {...subLink} setIsOpen={setIsOpen} />
          ))}
        </ul>
      )}
    </li>
  );
};

const NestedSubMenu = ({ linkName, src, subLinks, setIsOpen }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <div className="flex items-center gap-2 py-2">
        <Link
          href={`${src}`}
          className="text-base ml-2"
          onClick={() => setIsOpen(false)}
        >
          {linkName}{" "}
        </Link>
        {subLinks && (
          <span className="cursor-pointer" onClick={() => setOpen(!open)}>
            <TiArrowSortedDown />
          </span>
        )}
      </div>
      {subLinks && (
        <ul
          className="flex flex-col gap-2"
          style={{
            maxHeight: open ? "1200px" : " 0px",
            overflow: "hidden",
          }}
        >
          {subLinks.map((nestedSubLink: any, nestedSubIndex: number) => (
            <li key={nestedSubIndex} className="px-5 py-2">
              <Link
                href={nestedSubLink.src}
                className="text-[.95rem]"
                onClick={() => setIsOpen(false)}
              >
                {nestedSubLink.linkName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default memo(MobileNav);
