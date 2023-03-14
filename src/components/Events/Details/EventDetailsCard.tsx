import React from "react";

const EventDetailsCard = ({
    title,
    description,
    type,
}: {
    title: string;
    description: string;
    type: string;
}) => {
    return (
        <div className=" flex flex-row ">
            <div className="lg:px-[2em] md:px-[3em] px-[1em]">
                <div
                    className=" ">
                    <p className=" text-[36px] font-[700] mb-5  lg:text-justify text-center "> Details Events </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-[5em] md:grid-cols-2 grid-cols-1 ">

                    <div className="shadow-sm px-1 ">
                        <div className=" px-[1em] py-[2rem] ">
                            <p className="text-pri_var_1 font-[700] text-[24px]">{title}</p>
                        </div>
                        <div className="">
                            <p className=" leading-10 text-p_gray text-justify  font-[600] text-[19px]">{description}</p>
                        </div>
                    </div>

                    <div className="shadow-sm px-1 ">
                        <div className=" px-[1em] py-[2rem] ">
                            <p className="text-pri_var_1 font-[700] text-[24px]"> What included </p>
                        </div>
                        <div className="">
                            <p className=" leading-10 text-p_gray text-justify  font-[600] text-[19px]">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetailsCard;
