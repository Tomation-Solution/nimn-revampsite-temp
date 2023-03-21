import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Link from "next/link";
import { event_data } from "@/assets/data";
import { EventCard } from "../HOMEPAGE/Events";

const Events = () => {
  return (
    <div className="md:px-[5em] p-[1em] md:my-[8em]">
      <div className="flex justify-between my-[3em]">
        <p className="text-[42px] font-[700] text-pri">Events</p>

        <button className="border-pri_var_2 border-2 md:text-[20px] text-[16px] px-[1em] py-[.5em] hover:bg-pri animate-all duration-300">
          See all events
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {event_data.map((event, index) => (
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
