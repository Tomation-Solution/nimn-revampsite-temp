import React from "react";
import Insights, { InsightsCard } from "../Insights";

const InsightDetailsShowCard = ({
  title,
  description,
  type,
  date,
}: {
  title: string;
  description: string;
  type: string;
  date: string;
}) => {
  return (
    <div className=" flex flex-row ">
      <div className="lg:px-[2em] md:px-[3em] px-[1em]">
        <p className=" text-[29px] font-[700]  lg:text-justify text-center px-[1em] ">
          {" "}
          DISCLAIMER ON NME/mPAD{" "}
        </p>
        <div className="grid lg:grid-cols-2 gap-[5em] md:grid-cols-2 grid-cols-1 ">
          <div className="shadow-sm px-1 ">
            <div className=" px-[1em] py-[2rem] "></div>
            <p className=" leading-10 text-p_gray text-justify  font-[600] text-[19px]">
              {" "}
              The Manufacturers Association of Nigeria (MAN) wishes to inform
              the general public that it is no longer a partner in the
              organization of the Annual Nigeria Manufacturing
              Expo/Manufacturing Partnership for African Development (NME/mPAD)
              events organized by Clarion Events West Africa, a South African
              Company. This decision is sequel to the closure of our partner’s
              (Clarion Events West Africa) business interest in Nigeria which
              led to laying off its staff operating in Lagos. Consequently, MAN
              ceases to be part of any Expo being organized by Clarion Events
              West Africa, and as such the general public is hereby advised to
              be wary of any individual or group of persons parading themselves
              as organizers of Nigeria Manufacturing Equipment Expo in
              partnership with MAN. MAN members are particularly put on notice
              to be aware. We wish to express our deep appreciation to the
              exhibitors (both Local and International), the general public and
              our media partners who have supported the Association in the
              organization of the previous four editions of NME/mPAD. Please be
              informed that MAN is planning its sole International Equipment
              Manufacturing Expo and the details will be communicated in due
              course. The Manufacturers Association of Nigeria (MAN) wishes to
              inform the general public that it is no longer a partner in the
              organization of the Annual Nigeria Manufacturing
              Expo/Manufacturing Partnership for African Development (NME/mPAD)
              events organized by Clarion Events West Africa, a South African
              Company. This decision is sequel to the closure of our partner’s
              (Clarion Events West Africa) business interest in Nigeria which
              led to laying off its staff operating in Lagos. Consequently, MAN
              ceases to be part of any Expo being organized by Clarion Events
              West Africa, and as such the general public is hereby advised to
              be wary of any individual or group of persons parading themselves
              as organizers of Nigeria Manufacturing Equipment Expo in
              partnership with MAN. MAN members are particularly put on notice
              to be aware. We wish to express our deep appreciation to the
              exhibitors (both Local and International), the general public and
              our media partners who have supported the Association in the
              organization of the previous four editions of NME/mPAD. Please be
              informed that MAN is planning its sole International Equipment
              Manufacturing Expo and the details will be communicated in due
              course. The Manufacturers Association of Nigeria (MAN) wishes to
              inform the general public that it is no longer a partner in the
              organization of the Annual Nigeria Manufacturing
              Expo/Manufacturing Partnership for African Development (NME/mPAD)
              events organized by Clarion Events West Africa, a South African
              Company. This decision is sequel to the closure of our partner’s
              (Clarion Events West Africa) business interest in Nigeria which
              led to laying off its staff operating in Lagos. Consequently, MAN
              ceases to be part of any Expo being organized by Clarion Events
              West Africa, and as such the general public is hereby advised to
              be wary of any individual or group of persons parading themselves
              as organizers of Nigeria Manufacturing Equipment Expo in
              partnership with MAN. MAN members are particularly put on notice
              to be aware. We wish to express our deep appreciation to the
              exhibitors (both Local and International), the general public and
              our media partners who have supported the Association in the
              organization of the previous four editions of NME/mPAD. Please be
              informed that MAN is planning its sole International Equipment
              Manufacturing Expo and the details will be communicated in due
              course. Thank you. Segun Ajayi-Kadir Director General 15th August
              2019
            </p>
          </div>
          <div>
            {" "}
            <p className="text-pri_var_1 font-[700] text-[24px]">
              {" "}
              Other Publications{" "}
            </p>
            <div className="grid lg:grid-cols-1  md:grid-cols-2 grid-cols-1 ">
              <div className=" px-[1em] py-[2rem] ">
                <InsightsCard
                  date={date}
                  title={title}
                  description={description}
                  type={type}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightDetailsShowCard;
