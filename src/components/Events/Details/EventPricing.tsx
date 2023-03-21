import EventRegForm from "@/components/Member/component/EventRegForm";
import React, { useState } from "react";

const EventPricing = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  const handlePaymentModal = () => {
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

      <div className=" flex flex-col  items-center justify-center  ml-auto mr-auto pb-10      lg:w-6/12  w-full  bg-[#F3F2EE]  mt-20  ">
        <div className="mt-10 ">
          <p className="text-[36px] font-[700] "> Pricing</p>
        </div>

        <div className="grid lg:grid-cols-2 lg:gap-[18em] gap-[4em] md:grid-cols-2 grid-cols-1grid-cols-1  ">
          <div className="shadow-sm  px-1 py-[2rem]">
            <h2 className="text-[24px] font-extrabold mb-6 ">NIMN Member</h2>
            <p className="text-[21px] font-[600]">$599 </p>
          </div>

          <div className=" px-1 py-[2rem] ">
            <h2 className="text-[24px] font-extrabold mb-6 ">Non-Member </h2>
            <p className="text-[21px] font-[600]">$599 </p>
          </div>
        </div>
        <button
          onClick={handlePaymentModal}
          className="  bg-green-800 hover:bg-green-500 animate-pulse duration-300    text-white w-64 h-10 rounded-lg  "
        >
          {" "}
          Register{" "}
        </button>
        <p className=" px-20 mt-10 font-base text-[18px] ">
          {" "}
          After completing registration, you will receive a purchase receipt. We
          will email you the information for accessing this training closer to
          the event.
        </p>
      </div>
    </>
  );
};

export default EventPricing;
