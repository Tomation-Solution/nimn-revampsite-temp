import Image from "next/image";
import React from "react";
import profile from "../../../public/images/Rectangle_6.png";

const NIMNAct = () => {
    return (
        <div className="flex gap-10  lg:flex-row  flex-col items-center justify-betweeen  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">
            <Image src={profile} alt="Profile" width={900} height={1500} />

            <div className="flex mt-10 flex-col gap-y-5 bg-pri_var_2 items-center  rounded-md  lg:w-[874px] w-full  lg:h-[890px] h-[120vh] left-[920px] z-10">
                <p className="md:text-[42px]  lg:text-[42px] text-[20]  font-[700]  lg:px-14 px-6    text-justify w-full  mt-10 text-pri_var_1">
                    NIMNAct 2023                </p>
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

export default NIMNAct;
