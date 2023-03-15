import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_7.png";

const Profile = () => {
  return (
    <div className="flex justify-around lg:flex-row flex-col items-center md:gap-x-[3em] gap-y-[1em] md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
      <Image
        src={profile}
        alt="Profile"
        width={900}
        height={200}
        className="flex-1 "
      />

      <div className="flex flex-col gap-y-5 w-[400] flex-1">
        <p className="md:text-[42px] text-[32px] font-[600] text-pri">
          National Institute of Marketing of Nigeria (NIMN)
        </p>
        <p className="md:text-[24px] text-p_gray text-[18px]">
          This is the body for marketing professionals engaged in marketing and
          related fields as marketing practitioners, sales and marketing
          directors, customer service managers, relationship directors...
        </p>

        <button className="bg-pri_var_1 w-[211px] rounded-md text-white md:text-[24px] text-[18px] px-[1em] py-[1em] hover:bg-pri animate-all duration-300">
          See full profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
