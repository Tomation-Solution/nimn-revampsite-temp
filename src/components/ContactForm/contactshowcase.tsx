import React from "react";
import classes from "../styles/comp_bg.module.css";

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

const Showcase = () => {
  return (
    <div
      className={`h-[50em] ${classes.about} flex items-center justify-center relative mb-[2rem]`}
    >
      <div className="lg:w-[40%] md:w-[60%] w-[90%] flex flex-col gap-y-[2em] items-center text-center">
        <p className="md:text-[48px] text-[34px] text-white font-[800] backdrop-blur">
          We are here to help you, if you have any questions, please feel free
          to contact us. our team will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
};

export default Showcase;
