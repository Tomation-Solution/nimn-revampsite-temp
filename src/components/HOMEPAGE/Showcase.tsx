import React, { useState } from "react";
import classes from "../styles/comp_bg.module.css";

import PaymentFormModal from "../Member/component/PaymentForm";

const Showcase = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />

      <div
        className={`h-[50em] ${classes.showcase} flex items-center justify-center relative mb-[2rem]`}
      >
        <div className="lg:w-[40%] md:w-[60%] w-[90%] flex flex-col gap-y-[2em] items-center text-center">
          <p className="md:text-[48px] text-[34px] text-white font-[800] backdrop-blur">
            NIMN Introduces group life protection insurance <br /> for members
          </p>
          <a
            href=" https://members.nimn.com.ng/prospective"
            className="w-full"
          >
            <button className="bg-pri_var_2 text-white font-bold py-2 px-4 rounded hover:bg-pri_var_1 w-[60%]">
              Become a member
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Showcase;





export const Showcase4 = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />

      <div
        className={`h-[50em] ${classes.showcase} flex items-center justify-center relative mb-[2rem]`}
      >
        <div className="lg:w-[40%] md:w-[60%] w-[90%] flex flex-col gap-y-[2em] items-center text-center">
          <p className="md:text-[48px] text-[34px] text-white font-[800] backdrop-blur">
            NIMN June Diet Results
          </p>
          <a
            href="https://docs.google.com/spreadsheets/d/1dmSTQwWfLAGEUIXg9DiFJxp3a9G1AtYO/edit?usp=sharing&ouid=103423927714584137768&rtpof=true&sd=true"
            className="w-full"
          >
            <button className="bg-pri_var_2 text-white font-bold py-2 px-4 rounded hover:bg-pri_var_1 w-[60%]">
              View Result
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
