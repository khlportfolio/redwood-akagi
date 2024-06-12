import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import ArtOne from "../assets/art1.jpg"
import ArtTwo from "../assets/art2.jpg"
import ArtThree from "../assets/art3.jpeg"
import ArtFour from "../assets/art4.jpeg"
import PortoTwo from "../assets/porto2.svg"
import PortoThree from "../assets/porto3.svg"

export function BentoPortfolio() {
  return (
    <BentoGrid className="w-full mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          id={i}
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

const items = [
  {
    header: ArtOne,
  },
  {
    header: ArtTwo,
  },
  {
    header: PortoThree,
  },
  {
    header: ArtThree,
  },
  {
    header: ArtFour,
  },
];
