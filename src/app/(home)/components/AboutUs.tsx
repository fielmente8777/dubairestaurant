import Image from "next/image";
import { DataType } from "../types";
import Container from "./Container";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

const AboutUs: React.FC<DataType> = ({
  title,
  description,
  span,
  img,
  description2,
}) => {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-8">
          <div className="lg:px-16 w-full max-w-5xl">
            <SectionHeading title={title} span={span} />
          </div>
          <p className="text-center text-base text-black lg:text-lg">
            {description}
          </p>
          <div className="">
            <Image src={img} alt={span} width={456} height={247} />
          </div>
          {description2?.map((item, index) => (
            <p
              key={index}
              className="text-center text-base text-black lg:text-lg"
            >
              {item}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default AboutUs;
