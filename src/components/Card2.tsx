import Image, { StaticImageData } from "next/image";

interface CardType {
  image?: StaticImageData | string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}
const Card2: React.FC<CardType> = ({ image, title, subtitle, icon }) => {
  return (
    <div className="flex flex-col gap-5 group">
      {image && (
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={110}
            height={110}
            className="rounded-full group-hover:scale-110 group-hover:-translate-y-2 transition duration-300 group-hover:shadow-2xl"
            priority={true}
          />
        </div>
      )}
      {icon && (
        <div className="flex items-center justify-center w-[110px] aspect-square rounded-full bg-blue-dark group-hover:shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition duration-300">
          {icon}
        </div>
      )}
      <div className="flex flex-col gap-1">
        <h2 className="text-[1.375rem]/[1.875rem] font-semibold text-blue-dark  tracking-wider">
          {title}
        </h2>
        <span className="w-12 h-[2px] bg-orange-primary"></span>
      </div>
      {subtitle && (
        <p className="text-base text-gray-primary pe-7">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Card2;
