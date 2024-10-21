import Container from "./Container";
import Section from "./Section";

interface dataTypeProps {
  data: { title: string; subtitle: string }[];
}

const NumberComponent = ({ data }: dataTypeProps) => {
  return (
    <Section>
      <Container>
        <div className="bg-blue-dark py-7 px-10 rounded-3xl flex max-md:flex-col items-center justify-between w-full h-full">
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col gap-3 items-center w-full justify-center text-white ${
                index !== data.length - 1 && "lg:border-e border-orange-primary"
              }`}
            >
              <h2 className="text-[2.2rem]/[3.5rem]">{item.title}</h2>
              <span className="text-[1.125rem]/[1.5rem]">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default NumberComponent;
