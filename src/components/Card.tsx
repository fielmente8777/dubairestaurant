import Image, { StaticImageData } from "next/image";

interface CardType {
  image?: StaticImageData | string;
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}

export const Card: React.FC<CardType> = ({ image, title, subtitle, icon }) => {
  return (
    <div className="flex flex-col items-center gap-5 group">
      {image && (
        <div className="flex justify-center">
          <Image
            src={image}
            alt={title}
            width={110}
            height={110}
            className="rounded-full group-hover:scale-110 group-hover:-translate-y-2 transition duration-300 group-hover:shadow-3xl"
            priority={true}
          />
        </div>
      )}
      {icon && (
        <div className="flex items-center justify-center w-[110px] aspect-square rounded-full bg-blue-dark group-hover:shadow-2xl group-hover:scale-110 group-hover:-translate-y-2 transition duration-300">
          {icon}
        </div>
      )}
      <h2 className="text-[1.375rem]/[1.875rem] font-semibold text-blue-dark text-center px-10">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-primary text-center px-10">
          {subtitle}
        </p>
      )}
    </div>
  );
};


