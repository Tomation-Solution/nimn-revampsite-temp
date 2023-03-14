import React from "react";

const EventDetailsCard = () => {
    return (
        <div className=" flex flex-col  items-center justify-center lg:ml-96 ml-0  lg:w-6/12  w-full  bg-[#F3F2EE] ">
            <div className="mt-10 ">
                <p className="text-[36px] font-[700] ">  Pricing</p>
            </div>

            <div className="grid lg:grid-cols-2 lg:gap-[18em] gap-[4em] md:grid-cols-2 grid-cols-1 ">
                <div className="shadow-sm  px-1 py-[2rem]">
                    <h2 className="text-[24px] font-extrabold mb-6 ">NIMN Member</h2>
                    <p className="text-[21px] font-[600]">$599 </p>
                </div>

                <div className=" px-1 py-[2rem] ">
                    <h2 className="text-[24px] font-extrabold mb-6 ">Non-Member </h2>
                    <p className="text-[21px] font-[600]">$599 </p>

                </div>
            </div>
            <button className="  bg-[#B22B25]   text-white w-64 h-10 rounded-lg  "> Register </button>
        </div>

    );
};

export default EventDetailsCard;
