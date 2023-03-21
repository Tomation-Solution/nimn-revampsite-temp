import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import EventRegForm from "../Member/component/EventRegForm";
import { event_data } from "@/assets/data";
import Link from "next/link";

export const EventCard = ({
  title,
  description,
  date,
  type,
  index,
  image,
}: {
  title: string;
  description: string;
  date: string;
  type: string;
  index: number;
  image: any;
}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      data-aos-delay={index * 400}
      className="relative flex flex-col "
    >
      <div className="w-full h-[38em] overflow-hidden flex justify-center">
        <Image src={image} alt="event" width={600} height={500} />
      </div>
      <div className="bg-pri_var_2 text-white">
        <p className="font-[700] text-[22px]">{title}</p>
      </div>

      <div className="border-p_gray p-[2em] shadow-xl">
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

      <button className="bg-pri_var_2 text-white py-[1em] mt-[2em]">
        <p className="text-center font-[700] text-[18px]">View More</p>
      </button>
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
      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 items ">
        {event_data.slice(0, 3).map((event, index) => (
          <Link key={index} href={`/events/${event.id}`}>
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              date={event.date}
              type={event.type}
              image={event.image}
              index={index}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
