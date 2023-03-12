// import Image from "next/image";
import React from "react";
// import profile from "../../../public/images/Rectangle_6.png";

const MissionSection = () => {
    return (
        <div className="flex gap-10 lg:flex-row lg:ml-20 flex-col items-center justify-between  md:px-[6em] px-[1em] md:my-[10rem] my-[6rem]">

            <div className=" shadow-xl  mt-20">
                <p className="md:text-[42px]  lg:text-[32px] text-[30px] mb-10 text-pri font-[700] text-center mt-10 text-pri">
                    Our Mission
                </p>
                <p className="md:text-[24px] text-[20px] lg:px-20 px-6 lg:leading-10 leading-8 pb-10  text-justify  ">
                    This is the body for marketing professionals engaged in marketing and
                    related fields as marketing practitioners, sales and marketing
                    directors, customer service managers, relationship directors...
                    This is the body for marketing professionals engaged in marketing and
                    related fields as marketing practitioners, sales and marketing
                    directors, customer service managers, relationship directors...

                </p>
            </div>

            <div className=" shadow-xl mt-20 ">
                <p className="md:text-[42px]  lg:text-[32px] text-[30px] mb-10  font-[700] text-center mt-10 text-pri">
                    Our Vision
                </p>
                <p className="md:text-[24px] text-[20px] lg:px-20 px-6 lg:leading-10 leading-8 pb-10  text-justify  ">
                    This is the body for marketing professionals engaged in marketing and
                    related fields as marketing practitioners, sales and marketing
                    directors, customer service managers, relationship directors...
                    This is the body for marketing professionals engaged in marketing and
                    related fields as marketing practitioners, sales and marketing

                </p>
            </div>

        </div>
    );
};

export default MissionSection;
