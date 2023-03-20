import React, { useEffect, useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
import event_1 from "../../../public/images/event_1.jpeg";
import event_2 from "../../../public/images/event_2.jpeg";
import nimn from "../../../public/images/news_assets/nimn.jpg";
import Image from "next/image";
import EventRegForm from "../Member/component/EventRegForm";

const data = [
  {
    image: event_1,
    title: "E-Level Integrated Marketing",
    description:
      "The 2023 E-Level Integrated Marketing Conference of ARCON and the National Institute of Marketing of Nigeria (NIMN).",
    date: "12th to 13th April, 2023",
    type: "L'eola Hotel, 1, Mogambo Close, Maryland Estate, Lagos",
  },
  {
    image: event_2,
    title: "Joint Training Programme",
    description:
      "The 2023 Joint Training Programme of ARCON and the National Institute of Marketing of Nigeria (NIMN).",
    date: "12th to 13th April, 2023",
    type: "L'eola Hotel, 1, Mogambo Close, Maryland Estate, Lagos",
  },
  {
    image: nimn,
    title: "NIMN Annual Marketing Conference 2023 ",
    description:
      "The 2023 E-Level Integrated Marketing Conference of ARCON and the National Institute of Marketing of Nigeria (NIMN).",
    date: "22nd June 2023",
    type: ".......",
  },
  {
    image: nimn,
    title: "Fellows Nite ",
    description:
      "The 2023 Fellows Nite of the National Institute of Marketing of Nigeria (NIMN).",
    date: "22nd June 2023",
    type: ".......",
  },
  {
    image: nimn,
    title: "NIMN Annual General Meeting 2023 ",
    description: "The NIMN Annual General Meeting 2023.",
    date: "23nd June 2023",
    type: ".......",
  },
];

const EventCard = ({
  title,
  description,
  date,
  type,
  index,
  image,
  handlePaymentModal,
}: {
  title: string;
  description: string;
  date: string;
  type: string;
  index: number;
  image: any;
  handlePaymentModal: any;
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
      <div className="w-full">
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
        <p
          onClick={() => handlePaymentModal(title, description)}
          className="text-center font-[700] text-[18px]"
        >
          Register
        </p>
      </button>
    </div>
  );
};

const Events = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePaymentModal = (title: string, description: string) => {
    setTitle(title);
    setDescription(description);
    setPaymentModalOpen(true);
  };
  return (
    <>
      <EventRegForm
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
        title={title}
        description={description}
      />

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
              image={event.image}
              index={index}
              handlePaymentModal={handlePaymentModal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;
