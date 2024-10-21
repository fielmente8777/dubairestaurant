import Image from "next/image";
import Container from "./Container";
import Section from "./Section";

interface PresenceTypeProps {
  title: string;
  span: string;
  img: string[];
}
const Presence: React.FC<PresenceTypeProps> = ({ title, img, span }) => {
  return (
    <Section>
      <Container>
        <div className="max-w-[1050px] mx-auto">
          <h2 className="lg:text-[2.875rem]/[3.5rem] text-3xl text-center">
            {title} <strong className="text-orange-primary">{span}</strong>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-12">
          {img.map((item, index) => (
            <div
              key={index}
              className={`relative w-full aspect-[4/5.5] rounded-lg overflow-hidden lg:mt-${
                index % 2 !== 0 ? "10" : "0"
              }`}
            >
              <Image src={item} alt="avatar" className="object-cover" fill />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Presence;
