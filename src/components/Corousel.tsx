// App.js

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import bg_1 from "../../public/images/bg_1.jpg";
import Link from "next/link";

const items = [
  {
    id: 1,
    content: (
      <div
        className="bg-gray-100 shadow-2xl h-full flex items-center justify-center
  "
      >
        <div className="font-extrabold text-start  md:text-[65px] text-[35px]">
          <p className=" text-white bg-pri mb-[10px] ">June 2023 Exam</p>
          <p className=" text-white bg-pri ]">Time-Table Is Out</p>

          <button className="bg-pri_var_1 md:p-4 p-2 text-white mt-3 md:text-[18px] text-[15px]">
            Register Now
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: (
      <div className="bg-gray-100 shadow-2xl h-full flex items-center justify-center">
        <div>
          <p className=" text-pri mb-[10px] md:text-[65px] text-[35px] font-extrabold">
            NIMN Code of Professional Practice
          </p>
          <button className="bg-pri_var_1 md:p-4 p-2 text-white mt-3 md:text-[18px] text-[15px]">
            Download Here
          </button>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    content: (
      <div className="bg-gray-100 shadow-2xl h-full text-left flex items-center justify-center">
        <div>
          <div className="font-bold md:text-[45px] text-[25px]">
            ARCON, NIMN MOU takes off with joint training program
          </div>
          <p>
            In line with efforts to reposition the Integrated Marketing
            Communication, IMC Industry, the Memorandum of Understanding, MOU,
            signed by. . .
          </p>
          <Link href={{ pathname: "/news_insights", query: "0" }}>
            <button className="bg-pri_var_1 md:p-4 p-2 text-white mt-3 md:text-[18px] text-[15px]">
              Read more
            </button>
          </Link>
        </div>
      </div>
    ),
  },
];

export default function Corousel() {
  const renderItem = (item: any) => {
    return (
      <div className="h-[20em] bg-pri_var_1" key={item.id}>
        {item.content}
      </div>
    );
  };

  return (
    <div className=" flex items-center justify-center mt-[8em]">
      {" "}
      <div className="lg:w-3/5 md:w-4/5 w- ">
        <Carousel>{items.map((item) => renderItem(item))}</Carousel>
      </div>
    </div>
  );
}
