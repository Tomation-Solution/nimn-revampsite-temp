import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    title: "NIMN 2022 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    title: "NIMN 2023 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
];

const EventCard = ({
  title,
  description,
  date,
  type,
  index,
}: {
  title: string;
  description: string;
  date: string;
  type: string;
  index: number;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={index * 400}
      className="relative flex flex-col items-center"
    >
      <div className="bg-pri_var_2 text-white">
        <p className="font-[700] text-[42px] p-[2em]">{title}</p>
      </div>

      <div className="border-p_gray p-[2em] ">
        <div className="flex items-center gap-x-2">
          <p>
            <AiOutlineCalendar />
          </p>
          <p className="text-p_gray text-[12px] ">EVENT</p>
        </div>
        <p className="text-[20px] font-[600] ">{description}</p>
        <p className="text-p_gray text-[14px] ">{date}</p>
        <p className="text-p_gray text-[14px] ">{type}</p>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em]">
      <div className="flex justify-between my-[3em]">
        <p className="text-[42px] font-[700] text-pri">Events</p>
        <button
          className="border-pri_var_2 border-2 md:text-[20px] text-[16px] px-[1em] 
        py-[.5em] hover:bg-pri animate-all duration-300"
        >
          See all events
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {data.map((event, index) => (
          <EventCard
            key={index}
            title={event.title}
            description={event.description}
            date={event.date}
            type={event.type}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;
