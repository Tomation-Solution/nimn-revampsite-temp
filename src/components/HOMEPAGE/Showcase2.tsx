import React, { useState } from "react";
import classes from "../styles/comp_bg.module.css";
import Link from "next/link";

const Showcase2 = () => {
  return (
    <>
      <div
        className={`h-[50em] ${classes.showcase2} flex items-center justify-center relative mb-[2rem]`}
      >
        <div className="lg:w-[40%] md:w-[60%] w-[90%] flex flex-col gap-y-[2em] items-center text-center">
          <p className="md:text-[48px] text-[34px] text-pri font-[800] backdrop-blur">
            ARCON, NIMN MOU takes off with joint training program
          </p>
          <Link href={{ pathname: "/news_insights", query: "0" }}>
            <button className="bg-pri_var_1 rounded-md text-white md:text-[24px] text-[18px] px-[1em] py-[1em] hover:bg-pri animate-all duration-300 font-bold">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Showcase2;
