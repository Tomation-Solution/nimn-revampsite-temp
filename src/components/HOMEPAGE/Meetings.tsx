import React from "react";

const data = [
  {
    title: "NIMN 2021 Annual Conference",
    details: "ELELCTION GUIDELINES ",
    type: "Virtual Conference",
  },
  {
    title: "NIMN 2021 Annual Conference",
    details: "ELELCTION GUIDELINES ",
    type: "Virtual Conference",
  },
  {
    title: "NIMN 2021 Annual Conference",
    details: "ELELCTION GUIDELINES ",
    type: "Virtual Conference",
  },
];

const MeetingCard = ({
  title,
  details,
  type,
}: {
  title: string;
  details: string;
  type: string;
}) => {
  return (
    <div className="shadow-lg">
      <div className="bg-black px-[1em] py-[2rem] ">
        <p className="text-white font-[700] text-[40px]">{title}</p>
        <p className="text-yellow-600 text-[22px] ">-{details}-</p>
      </div>
      <div className="bg-white p-[3em] text-pri font-[600] text-[18px]">
        <p>{type}</p>
      </div>
    </div>
  );
};

const Meetings = () => {
  return (
    <div className="lg:px-[5em] md:px-[3em] px-[1em]">
      <div
        className="
      text-center mb-[2em] lg:w-[50%] md:w-[60%] w-[80%] mx-auto

      "
      >
        <p className="text-pri text-[30px] font-[600] ">NIMN</p>
        <p className="text-[18px] text-p_gray ">
          Find out happenings at NIMN ranging from our latest news, to events
          archives and interesting details of the programmes we have to offer
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-[3em] md:grid-cols-2 grid-cols-1 ">
        {data.map((item) => (
          <MeetingCard
            title={item.title}
            details={item.details}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Meetings;
