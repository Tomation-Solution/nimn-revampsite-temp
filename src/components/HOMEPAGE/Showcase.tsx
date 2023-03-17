import React, { useState } from "react";
import classes from "../styles/comp_bg.module.css";
import { GoLocation } from "react-icons/go";
import { GrMail } from "react-icons/gr";
import { FaPhoneAlt } from "react-icons/fa";
import PaymentFormModal from "../Member/component/PaymentForm";

const InfoCard = ({
  icon,
  headline,
  detail,
}: {
  icon: any;
  headline: string;
  detail: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-x-[10px]">
      <div className="border-2 border-pri_var_1 border-dotted   p-[10px] rounded-[5px]">
        <p className="text-pri_var_1 text-[24px] ">{icon}</p>
      </div>
      <div>
        <p className="font-[800] md:text-[16px] text-[14px]">{headline}</p>
        <p className="text-[10px] ">{detail}</p>
      </div>
    </div>
  );
};

const Showcase = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
      ;
      <div
        className={`h-[50em] ${classes.showcase} flex items-center justify-center relative mb-[2rem]`}
      >
        <div className="lg:w-[40%] md:w-[60%] w-[90%] flex flex-col gap-y-[2em] items-center text-center">
          <p className="md:text-[48px] text-[34px] text-white font-[800] backdrop-blur">
            NIMN Introduces group life protection insurance <br /> for members
          </p>
          <button
            onClick={() => setPaymentModalOpen(true)}
            className="bg-pri_var_1 rounded-md text-white md:text-[24px] text-[18px] px-[1em] py-[1em] hover:bg-pri animate-all duration-300 font-bold"
          >
            Become A Member
          </button>
        </div>

        <div
          className="absolute  md:p-[3em] p-[2em] rounded-md shadow-lg bg-white -bottom-[5em]
       flex md:flex-row flex-col md:gap-x-[4em] gap-y-[2em] items-center "
        >
          <InfoCard
            icon={<GoLocation />}
            headline="48B, Adekunle Fajuyi Way,"
            detail="Ikeja GRA, Lagos, Nigeria."
          />
          <InfoCard
            icon={<GrMail />}
            headline="info@nimn.com.ng"
            detail="support 24/7"
          />
          <InfoCard
            icon={<FaPhoneAlt />}
            headline=" (+234)8160321503"
            detail=""
          />
        </div>
      </div>
    </>
  );
};

export default Showcase;
