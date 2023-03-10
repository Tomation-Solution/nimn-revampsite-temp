import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import classes from "../styles/comp_bg.module.css";

const data = [
  {
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
    img: "classes.profilesectrion",
  },
  {
    title: "NIMN 2022 Annual Conference",
    description:
      "The 2022 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2022",
    type: "Virtual Conference",
    img: "classes.showcase",
  },
  {
    title: "NIMN 2023 Annual Conference",
    description:
      "The 2023 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2023",
    type: "Virtual Conference",
    img: "classes.about",
  },
];

const InsightCard = ({
  title,
  description,
  date,
  type,
}: {
  title: string;
  description: string;
  date: string;
  type: string;
}) => {
  return (
    <div>
      <div className={`bg-white ${classes.about} h-[15em] `}></div>
      <div className="p-3 mb-[1em] bg-white">
        <p className="font-[700] text-[25px] text-black ">{title}</p>
      </div>
      <div className="border-p_gray  ">
        <div className="flex items-center gap-x-2">
          <p>
            <AiOutlineCalendar color={"#fff"} />
          </p>
          <p className="text-p_gray text-[12px] ">EVENT</p>
        </div>
        <p className="text-[20px] font-[600] text-white ">{description}</p>
        <p className="text-p_gray text-[14px]text-white ">{date}</p>
        <p className="text-p_gray text-[14px] ">{type}</p>
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] bg-pri_var_2">
      <div className="flex justify-between my-[3em]">
        <p className="text-[42px] font-[700] text-white">Insights</p>
        <button
          className="border-white text-white border-2 md:text-[20px] text-[16px] px-[1em] 
        py-[.5em] hover:bg-pri animate-all duration-300"
        >
          See all Insights
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {data.map((event, index) => (
          <InsightCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            type={event.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Insights;
