import Image, { StaticImageData } from "next/image";
import React from "react";

const GalleryCard = ({
  image,
  description,
  onClick,
}: {
  image: StaticImageData;
  description: string;
  onClick: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer  w-[20em] shadow-xl my-4 mx-2  overflow-hidden flex flex-col items-center  rounded-2xl group hover:p-[1em]  hover:bg-gray-200 animate-all duration-300 "
    >
      <div className="w-[19em] relative">
        <div className="absolute w-full h-full group-hover:backdrop-blur-sm" />
        <Image width={300} height={260} src={image} alt={description} />
      </div>
      <div className="p-4 font-semibold">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
