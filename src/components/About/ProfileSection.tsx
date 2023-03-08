import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_6.png";

const ProfileSection = () => {
  return (
    <div className="flex justify-start lg:flex-row lg:ml-20 flex-col items-center  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
      <Image src={profile} alt="Profile" width={900} height={1500} />

      <div className="flex flex-col gap-y-5 bg-pri_var_2 w-[700px] lg:absolute top-[1280px]  lg:w-[874px] w-[100px] lg:h-[890px] h-[100px] left-[920px] z-10">
        <p className="md:text-[42px] text-[32px] font-[600] text-pri">
          National Institute of Marketing of Nigeria (NIMN)
        </p>
        <p className="md:text-[24px] text-[18px]">
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
