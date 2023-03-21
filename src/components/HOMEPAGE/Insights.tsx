import React, { useEffect } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import classes from "../styles/comp_bg.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { news_data } from "@/assets/data";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const InsightCard = ({
  title,
  image,
  author,
  date,
  index,
  paragraphs,
}: {
  title: string;
  image: StaticImageData;
  author: string;
  date: string;
  index: number;
  paragraphs: any;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={index * 400}
    >
      {/* <div className={`bg-white ${classes.about} h-[15em] `}></div> */}
      <div className="pb-[.5em] overflow-hidden h-[15em] ">
        <Image src={image} alt="news image" width={700} height={400} />
      </div>
      <div className="p-3 mb-[1em] bg-white">
        <p className="font-[700] text-[20px] text-black ">{title}</p>
      </div>

      <div className="border-p_gray  flex items-center gap-4">
        <p className="text-white text-[14px] ">{author}</p>
        <p className="text-white font-bold text-[14px]text-white ">{date}</p>
      </div>

      <Link href={{ pathname: "/news_insights", query: { index } }}>
        <button className="bg-pri_var_1 px-[2.5em] w-full  py-[1em] rounded-md hover:bg-pri font-bold text-white  ">
          Read More
        </button>
      </Link>

      <div className="text-white mt-[1em] font-semi-bold text-justify">
        <p>{paragraphs[0].slice(0, 130)}. . .</p>
      </div>
    </div>
  );
};

const Insights = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em] bg-pri_var_2">
      <div className="flex justify-between my-[3em]">
        <p className="text-[42px] font-[700] text-white">News & Insights</p>
        <button
          className="border-white text-white border-2 md:text-[20px] text-[16px] px-[1em] 
        py-[.5em] hover:bg-pri animate-all duration-300"
        >
          See all Insights
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {news_data.slice(0, 3).map((event, index) => (
          <InsightCard
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
