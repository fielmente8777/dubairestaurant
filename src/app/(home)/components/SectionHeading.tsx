import React from "react";

export interface SectionHeadingPropsTypes {
  title?: string;
  subtitle?: string;
  description?: string;
  span?: string;
  Color?: boolean;
}

function SectionHeading({
  title,
  subtitle,
  description,
  span,
  Color = false,
}: SectionHeadingPropsTypes) {
  return (
    <div className="flex flex-col gap-5">
      {title && (
        <h2
          className={`text-center md:text-4xl text-[1.4rem]/[2rem] ${
            Color ? "text-white" : "text-black"
          } md:w-[85%] mx-auto`}
        >
          {title} <span className="text-orange-primary font-bold">{span}</span>
        </h2>
      )}
      {description && (
        <p
          className={`text-lg max-md:text-base text-center lg:w-[70%] mx-auto ${
            Color ? "text-white" : "text-black"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
