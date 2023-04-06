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
          <button
            onClick={() => setPaymentModalOpen(true)}
            className="bg-pri_var_1 rounded-md text-white md:text-[24px] text-[18px] px-[1em] py-[1em] hover:bg-pri animate-all duration-300 font-bold"
          >
            Become A Member
          </button>
        </div>
      </div>
    </>
  );
};

export default Showcase;
