import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    paragraph:
      "The professional qualifications in marketing provide holders with a wide range of interesting career opportunities in brand management, Sales, customer service, customer relationship, marketing communication, marketing research, retail and sales management, etc.",
  },
  {
    paragraph:
      "The curriculum has been tailored to the requirements of marketing and sales organizations searching for marketing talents that can easily fit into their marketing organizational structure with minimal training.",
  },
  {
    paragraph:
      "Benefits Of Having NIMN Professional Qualifications In Marketing:",

    bullets: [
      "Employability:- it provides holders with a competitive edge in the labour market by making them professionally ready for marketing and marketing related roles.",
      "Mobility:- it offers a wide choice in securing fulfilling careers in sales and marketing in such areas s advertising, brand and product management, marketing research, retailing, customer management, etc.",
      "Rewarding career:- NIMN professional qualifications in marketing offer holders opportunity for faster career progression as research as shown that the commonest route to the Chief Executive Officer (CEO) roles in most Fast Moving Consumer Goods (FCMG) organisations is through marketing.",
      "The NIMN professional qualification in marketing has been evaluated and accredited by the Federal Ministry of Education.",
      "Eligibility to be inducted into the professional membership cadre of the NIMN.",
    ],
  },
];

const Paragraph = ({ item }: { item: any }) => {
  return (
    <div className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[10px]">
      <p
        className={`${item.italics && "italic"}  ${
          item.bullets && "text-pri font-bold"
        }`}
      >
        {item.paragraph}
      </p>
      {item.bullets && (
        <ol className="list-disc list-outside ml-[1.5em]">
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
              <p className="py-[.6em]">
                <span className="font-bold text-justify">{point.title} - </span>
                {point.description}
              </p>
            </div>
          );
        })}
    </div>
  );
};

const benefit = () => {
  return (
    <>
      <TemplateContainer>
        <div>
          <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700]   text-justify w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            NIMN Certification
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
        </div>
      </TemplateContainer>
    </>
  );
};

export default benefit;
