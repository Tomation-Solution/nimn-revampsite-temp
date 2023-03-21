import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import { news_data } from "@/assets/data";
import { InsightsCard } from "../HOMEPAGE/Insights";

export const Insightdata = [
  {
    id: 1,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },

  {
    id: 2,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },

  {
    id: 2,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },

  {
    id: 3,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 4,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 5,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 6,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 7,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 8,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 9,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 10,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
  {
    id: 11,
    title: "NIMN 2021 Annual Conference",
    description:
      "The 2021 Annual Conference of the National Institute of Marketing of Nigeria (NIMN) will hold from 26th to 28th October, 2021 at the International Conference Centre, Abuja.",
    date: "26th to 28th October, 2021",
    type: "Virtual Conference",
  },
];

export const InsightCard = ({
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
      <div className="border-l-4 px-10 flex flex-row border-pri_var_2 ">
        <div className="flex items-center flex-col gap-10">
          <p className="text-[20px] font-[600] ">{description}</p>
          <p className="text-p_gray text-[14px] ">{date}</p>
          <p className="text-p_gray text-[14px] ">{type}</p>
        </div>
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em]">
      <div className="flex justify-between my-[3em]">
        <p className="text-[42px] font-[700] text-pri">Insights</p>

        <button className="border-pri_var_2 border-2 md:text-[20px] text-[16px] px-[1em] py-[.5em] hover:bg-pri animate-all duration-300">
          See all Insights
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {news_data?.map((event, index) => (
          <InsightsCard
            key={index}
            image={event?.image}
            title={event?.title}
            author={event?.author}
            date={event?.date}
            index={index}
            paragraphs={event?.paragraphs}
          />
        ))}
      </div>
    </div>
  );
};

export default Insights;
