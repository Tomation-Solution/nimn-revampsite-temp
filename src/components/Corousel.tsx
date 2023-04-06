// App.js

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import Showcase from "./HOMEPAGE/Showcase";
import Image from "next/image";
import bg_1 from "../../public/images/bg_1.jpg";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import Showcase2 from "./HOMEPAGE/Showcase2";

const InfoCard = ({
  icon,
  headline,
  detail,
}: {
  icon: any;
  headline: string;
  detail: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-x-[10px]">
      <div className="border-2 border-pri_var_1 border-dotted   p-[10px] rounded-[5px]">
        <p className="text-pri_var_1 text-[24px] ">{icon}</p>
      </div>
      <div>
        <p className="font-[800] md:text-[16px] text-[14px]">{headline}</p>
        <p className="text-[10px] ">{detail}</p>
      </div>
    </div>
  );
};

const items = [
  {
    id: 2,
    content: <Showcase />,
  },
  {
    id: 3,
    content: <Showcase2 />,
  },
];

export default function Corousel() {
  const renderItem = (item: any) => {
    return (
      <div className=" " key={item.id}>
        {item.content}
      </div>
    );
  };

  return (
    <div className=" flex items-center justify-center relative">
      {" "}
      <div className="w-full    ">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          interval={5000}
          transitionTime={1000}
        >
          {items.map((item) => renderItem(item))}
        </Carousel>
      </div>
      <div
        className="absolute  md:p-[3em] p-[2em] rounded-md shadow-lg bg-white -bottom-[5em]
       flex md:flex-row flex-col md:gap-x-[4em] gap-y-[2em] items-center "
      >
        <InfoCard
          icon={<GoLocation />}
          headline="48B, Adekunle Fajuyi Way,"
          detail="Ikeja GRA, Lagos, Nigeria."
        />
        <InfoCard
          icon={<GrMail />}
          headline="info@nimn.com.ng"
          detail="support 24/7"
        />
        <InfoCard
          icon={<FaPhoneAlt />}
          headline=" (+234)8160321503"
          detail=""
        />
      </div>
    </div>
  );
}
