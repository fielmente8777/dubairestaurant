import Link from "next/link";
import Image from "next/image";
import { Container, Section } from "@/app/(home)/components";

interface data_type {
  title: string;
  subTitle?: string;
  description: string;
  span?: string;
}

const GotEnquiry: React.FC<data_type> = ({
  title,
  description,
  span,
  subTitle,
}) => {
  return (
    <Section>
      <Container>
        <div className="max-w-[1040px] mx-auto bg-blue-dark">
          <div className="flex flex-col gap-7 justify-center items-center lg:pt-[4rem] py-4">
            <h2 className="text-xl text-center text-white">{title}</h2>
            {subTitle && (
              <h3 className="text-4xl max-md:text-xl font-bold text-center text-white">
                {subTitle}
              </h3>
            )}
            <p
              className={`text-white ${
                subTitle ? "text-xl" : "lg:text-[2.875rem]/[3.5rem]"
              } text-center lg:px-16`}
            >
              {description} <b className="text-orange-primary">{span}</b>
            </p>
          </div>
          <div className="flex justify-center items-center py-6 lg:py-7 lg:mt-2">
            <Link
              href="/contact-us"
              className="bg-transparent px-6 hover:bg-white font-medium py-3 rounded-full text-orange-primary border-2 border-orange-primary lg:text-xl text-lg flex gap-2 items-center"
            >
              Get in touch
              <Image
                src="/icon/arrow-right.png"
                alt="arrow"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default GotEnquiry;
