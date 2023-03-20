import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    paragraph:
      "Corporate Membership is open to companies which produce or market goods and or services in Nigeria, which at the date of application, employ not less than 25 persons and satisfy the rules and regulation of the Institute.",
  },
  {
    paragraph: "Benefits of Corporate Membership:",

    bullets: [
      "Discounted fees on training and membership programmes.",
      "Discounted advert rates in the Institute’s programme brochures and various publications.",
      "Complimentary copies of the Institute’s bi-annual Journal of Marketing.",
      "Name and logo mention in all official publications of the Institute.",
      "Opportunity for CEOs/Marketing Directors of Corporate members.",
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
              <p className="py-[.6em]">
                <span className="font-bold">{point.title} - </span>
                {point.description}
              </p>
            </div>
          );
        })}
    </div>
  );
};

const Corporate = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
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
            <p className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[10px] ">
              Corporate Membership Application form: N10,000
            </p>{" "}
            <p className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[15px] ">
              Annual Corporate Membership subscription
            </p>
            <table>
              <thead>
                <tr>
                  <th className="text-left text-gray-700 font-bold text-[18px] py-[10px]">
                    Annual Turnover
                  </th>
                  <th className="text-left text-gray-700 font-bold text-[18px] py-[10px]">
                    Annual Subscription
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="text-left text-gray-600 font-medium text-[18px] py-[10px]">
                    Above N10billion in annual Turnover
                  </td>
                  <td className="text-left text-gray-600 font-medium text-[18px] py-[10px]">
                    N500,000
                  </td>
                </tr>
                <tr>
                  <td className="text-left text-gray-600 font-medium text-[18px] py-[10px]">
                    N10billion and Below in Annual Turnover
                  </td>
                  <td className="text-left text-gray-600 font-medium text-[18px] py-[10px]">
                    N200,000
                  </td>
                </tr>
                <tr></tr>
              </tbody>
            </table>
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

export default Corporate;
