import Client1 from "../../public/images/ALLURE-NAINITAL-LOGO.png";
import Client2 from "../../public/images/Client2.png";
import Client3 from "../../public/images/Client3.png";
import Client4 from "../../public/images/BG-logo.jpg";
import Client5 from "../../public/images/BURKEY-BLACK-LOGO-01.png";
import Client6 from "../../public/images/Client6.png";
import Client7 from "../../public/images/D&G-logo-03-1.png";
import Client8 from "../../public/images/DOUBLE-TREE-LOGO-01.png";
import Client9 from "../../public/images/Dunagiri-Logo-Square.png";
import Client10 from "../../public/images/HUMRAHI-TRAVELS-LOGO.jpg";
import Client11 from "../../public/images/Hyatt-regency-logo.jpg";
import Client12 from "../../public/images/JW-Mariott-logo.png";
import Client13 from "../../public/images/Novotel-Logo.png";
import Client14 from "../../public/images/Radisson-Logo.png";
import Client15 from "../../public/images/Ramada-Logo.jpg";
import Client16 from "../../public/images/Taj-hotel-logo.png";
// import Client17 from "../../../public/images/The_Park_Hotels.jpg";
import Client18 from "../../public/images/peace@peak.jpg";
import Client19 from "../../public/images/logo_uv-removebg-preview-e1701685619775.webp";
import Client20 from "../../public/images/bunker-house.jpg";
import Client21 from "../../public/images/Red-Rock-villa.jpg";
import Client22 from "../../public/images/wabi-sabi.jpg";
import Client23 from "../../public/images/ebc.jpg";
import Client24 from "../../public/images/Riviera.jpg";
import Client25 from "../../public/images/footerspicelogo.png";
import Client26 from "../../public/images/chefkenzo.png";
import Client27 from "../../public/images/eracamp.png";
import Client28 from "../../public/images/Grandview_resort.jpg";
import Client29 from "../../public/images/minimalist.png";
import { StaticImageData } from "next/image";

export interface ClientData {
  src: string | StaticImageData;
  alt: string;
}

export interface ChooseCardProsData {
  title: string;
  subtitle: string;
  Icon: React.ReactNode;
}

export const ClientImages: ClientData[] = [
  {
    src: Client1,
    alt: "Client1",
  },
  {
    src: Client2,
    alt: "Client2",
  },
  {
    src: Client3,
    alt: "Client3",
  },
  {
    src: Client4,
    alt: "Client4",
  },
  {
    src: Client5,
    alt: "Client5",
  },
  {
    src: Client6,
    alt: "Client6",
  },
  {
    src: Client7,
    alt: "Client7",
  },
  {
    src: Client8,
    alt: "Client8",
  },
  {
    src: Client9,
    alt: "Client9",
  },
  {
    src: Client10,
    alt: "Client10",
  },
  {
    src: Client11,
    alt: "Client11",
  },
  {
    src: Client12,
    alt: "Client12",
  },
  {
    src: Client13,
    alt: "Client13",
  },
  {
    src: Client14,
    alt: "Client14",
  },
  {
    src: Client15,
    alt: "Client15",
  },
  {
    src: Client16,
    alt: "Client16",
  },
  // {
  //   src: Client17,
  //   alt: "Client17",
  // },
  {
    src: Client18,
    alt: "Client18",
  },
  {
    src: Client19,
    alt: "Client19",
  },
  {
    src: Client20,
    alt: "Client20",
  },
  {
    src: Client21,
    alt: "Client21",
  },
  {
    src: Client22,
    alt: "Client22",
  },
  {
    src: Client23,
    alt: "Client23",
  },
  {
    src: Client24,
    alt: "Client24",
  },
  {
    src: Client25,
    alt: "Client25",
  },
  {
    src: Client26,
    alt: "Client26",
  },
  {
    src: Client27,
    alt: "Client27",
  },
  {
    src: Client28,
    alt: "Client28",
  },
  // {
  //   src: Client29,
  //   alt: "Client29",
  // }
];
