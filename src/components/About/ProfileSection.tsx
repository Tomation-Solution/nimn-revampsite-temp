import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_6.png";

const ProfileSection = () => {
  return (
    <div className="flex justify-start  lg:flex-row lg:ml-20 flex-col items-center  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
      <Image src={profile} alt="Profile" width={900} height={1500} />

      <div className="flex mt-10 flex-col gap-y-5 bg-pri_var_2 items-center  rounded-md lg:absolute top-[1300px]  lg:w-[874px] w-full  lg:h-[890px] h-[80vh] left-[920px] z-10">
        <p className="md:text-[42px]  lg:text-[32px] text-[20]  font-[700] text-center mt-10 text-pri_var_1">
          National Institute of Marketing of Nigeria (NIMN)
        </p>
        <p className="md:text-[24px] text-[20px] lg:px-14 px-6  text-white lg:leading-10 leading-7 pb-10  text-justify  ">
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
