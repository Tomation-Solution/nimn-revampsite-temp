import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import bg_1 from "../../public/images/gallery/gal_16.jpg";
import bg_2 from "../../public/images/gallery/gal_21.jpg";
import bg_3 from "../../public/images/gallery/gal_20.jpg";

const items = [
  {
    id: 1,
    content: (
      <div className="flex items-center justify-center">
        <Image width={800} height={660} src={bg_1} alt="bg_1" />
        <p
          className="
            absolute
            text-[1.5em]
            text-white
            font-bold
            text-center
            lg:w-[60%]
            md:w-[80%]
            w-[90%]
            bottom-[7%]
            backdrop-filter
            backdrop-blur-[10px]
            bg-[rgba(0,0,0,0.5)]
            rounded-[10px]
            p-[10px]

        "
        >
          Mr. Obabori Peter Olusola receiving a handshake with the President
          NIMN Mr Tony Agenmonmen, after the presentation of the fellowship
          awards
        </p>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="flex items-center justify-center">
        <Image width={800} height={660} src={bg_2} alt="bg_2" />
        <p
          className="
            absolute
            text-[1.5em]
            text-white
            font-bold
            text-center
            lg:w-[60%]
            md:w-[80%]
            w-[90%]
            bottom-[7%]
            backdrop-filter
            backdrop-blur-[10px]
            bg-[rgba(0,0,0,0.5)]
            rounded-[10px]
            p-[10px]

        "
        >
          Chairman NIMN event committee addressing participants
        </p>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="flex items-center justify-center">
        <Image width={800} height={660} src={bg_3} alt="bg_3" />
        <p
          className="
            absolute
            text-[1.5em]
            text-white
            font-bold
            text-center
            lg:w-[60%]
            md:w-[80%]
            w-[90%]
            bottom-[7%]
            backdrop-filter
            backdrop-blur-[10px]
            bg-[rgba(0,0,0,0.5)]
            rounded-[10px]
            p-[10px]

        "
        >
          President NIMN Mr Tony Agenmonmen giving his address at the fellowship
          dinner and award night
        </p>
      </div>
    ),
  },
];

export default function GalleryCorousel() {
  const renderItem = (item: any) => {
    return (
      <div className=" " key={item.id}>
        {item.content}
      </div>
    );
  };

  return (
    <div className=" flex items-center justify-center ">
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
    </div>
  );
}
