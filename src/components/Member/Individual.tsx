import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    paragraph: "",

    points: [
      {
        title: "Professionalism",
        description:
          "Membership of the National Institute of Marketing of Nigeria (NIMN) allows members to affix the initials, animn, mnimn, fnimn to their names. This gives a certain identity and visibility to members’ professional status",
      },
      {
        title: "Networking",
        description:
          "Membership offers platform for networking with other marketing professionals and provides opportunities to build relationships, exchange ideas and get acquainted with contemporary marketing issues and trends, and thus, enhance ones career and professional advancement.",
      },
      {
        title: "Training",
        description:
          "Trainings, workshops, conferences designed to meet the developmental needs of members are available at a discount to members.",
      },
      {
        title: "Career Advancement",
        description:
          "NIMN provides a professional forum for members to interact and share knowledge/information on job openings before they are officially advertised. Also, some corporate organisations approach the Institute to recommend members to job openings.",
      },
      {
        title: "Social Interaction",
        description:
          "Dinners, awards and other functions of the Institute are avenues to cultivate new friendship with peers and professional colleagues who share common interests or share engaging conversation with members on trends in the marketing/business world.",
      },
    ],
  },
];

const Paragraph = ({ item }: { item: any }) => {
  return (
    <div className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[10px]">
      <p className={`${item.italics && "italic"}`}>{item.paragraph}</p>
      {item.bullets && (
        <ol className="list-decimal list-inside ml-[1.5em]">
          {item.bullets.map((bullet: any, index: number) => {
            return (
              <li className="py-[.6em]" key={index}>
                {bullet}
              </li>
            );
          })}
        </ol>
      )}

      {item.points &&
        item.points.map((point: any, index: number) => {
          return (
            <div key={index}>
              <p className=" text-pri font-bold">{point.title} - </p>
              <p className="py-[.6em]">{point.description}</p>
            </div>
          );
        })}
    </div>
  );
};

const Individual = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);

  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
      ;
      <TemplateContainer>
        <div>
          <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700]   text-justify w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            Corporate Membership
          </p>

          <div>
            {data.map((item, index) => {
              return (
                <div key={index}>
                  <Paragraph item={item} />
                </div>
              );
            })}
          </div>
          <button
            onClick={() => setPaymentModalOpen(true)}
            className="bg-pri_var_2 text-white font-bold py-2 px-4 rounded hover:bg-pri_var_1 w-[60%]"
          >
            Become a member
          </button>
        </div>
      </TemplateContainer>
    </>
  );
};

export default Individual;
