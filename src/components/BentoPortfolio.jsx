import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import PortoOne from "../assets/porto1.svg"
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
    header: PortoOne,
  },
  {
    header: PortoTwo,
  },
  {
    header: PortoThree,
  },
  {
    header: PortoOne,
  },
  {
    header: PortoOne,
  },
];
