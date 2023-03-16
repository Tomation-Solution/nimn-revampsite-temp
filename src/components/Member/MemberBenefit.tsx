import Link from "next/link";
import React from "react";

function MemberBenefit() {
  return (
    <div className=" mt-[10em]  flex justify-center">
      <div className="lg:w-[70%] md:w-[90%] w-[90%]">
        <h2 className=" font-bold mt-10  lg:text-[64px] text-3xl  mb-5 text-pri">
          {" "}
          Membership Benefits{" "}
        </h2>
        <div className="flex items-center gap-x-[2em] ">
          <div className="bg-pri w-[10%] h-[30em] "></div>
          <div>
            <p className="lg:text-[24px]   text-lg text-p_gray text-justify  flex-wrap  mt-10 w-full leading-[2em] font-medium">
              Membership of the Institute is compulsory for all practitioners of
              the marketing profession.
              <br /> A person shall be deemed to practice as a marketer if in
              consideration of remuneration received or to be received and
              whether by himself or in partnership with any other <br />{" "}
              persons, he:
              <br />
              <b className=" text-2xl font-extrabold">a.</b> Engages himself in
              the practice of marketing or hold himself out to the public as a
              marketer; or
              <br />
              <b className=" text-2xl font-extrabold">b.</b>Renders professional
              service or assistance in, or about matters of principles or
              detail, relating to the practice of marketing; or
              <br />
              <b className=" text-2xl font-extrabold">c.</b> Renders any other
              service which may, by regulation made by Council in consultation
              with the Minister, e designated as service constituting practice
              as a marketer.
            </p>
            <Link href="membership/exam" className="w-full">
              {" "}
              <button className=" mt-[3em] bg-pri text-white font-bold py-4 px-4  hover:bg-pri_var_1 w-[60%]">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberBenefit;
