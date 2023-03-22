import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    paragraph: "DEFERMENT OF EXAMINATION",

    bullets: [
      "Upon registration for the any diet of the examination, payments so made are non-refundable. However, a concession may be given for deferment of the examination after registration if there is a written application for deferment by the candidate supported with cogent reasons.",
      "Such application must reach the Registrar at least two (2) weeks to the commencement of the examination for which the candidate is registered to sit. Also, candidates will be surcharged 25% of the examination entry fees to cover administration expenses.",
    ],
  },
  {
    paragraph: "CONDUCT OF EXAMINATION",

    bullets: [
      "The professional examinations are conducted in designated examination centres in June and December every year",
    ],
  },
  {
    paragraph: "EXAMINATION FEE STRUCTURE",
    title: "Registration Fees (New Students)",
    bullets: [
      "Foundation Certificate in Marketing - N5,000",
      "Chartered Graduate Diploma in Marketing - N7,500",
      "Chartered Post Graduate Diploma in Marketing - N10,000",
    ],
  },
];

const Paragraph = ({ item }: { item: any }) => {
  return (
    <div className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[10px]">
      <p className={`${item.italics && "italic"}`}>{item.paragraph}</p>
      {item.title && <p className="font-bold text-justify">{item.title}</p>}
      {item.bullets && (
        <ol className="">
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
            NIMN Examination
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

          <div className="overflow-hidden w-full">
            <div className="relative overflow-x-scroll ">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3 border-r"></th>{" "}
                    <th
                      scope="col"
                      colSpan={2}
                      className="px-6 py-3 border font-bold"
                    >
                      Foundation Certificate in Marketing
                    </th>
                    <th
                      colSpan={2}
                      scope="col"
                      className="px-6 py-3  border font-bold"
                    >
                      Chartered Graduate Diploma in Marketing
                    </th>
                    <th
                      colSpan={2}
                      scope="col"
                      className="px-6 py-3 border font-bold"
                    >
                      Chartered Post Graduate Diploma in Marketing
                    </th>
                  </tr>{" "}
                  <tr>
                    <th scope="col" className="px-6 py-3 border-r"></th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 1
                    </th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 2
                    </th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 1
                    </th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 2
                    </th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 1
                    </th>{" "}
                    <th scope="col" className="px-6 py-3 border-r font-bold">
                      PART 2
                    </th>
                  </tr>
                </thead>{" "}
                <tbody>
                  <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Examination Entry fee/Exemption fee per subject
                    </th>
                    <td className="px-6 py-4 border-r">
                      N3,000 X 6 subjects = N18,000
                    </td>
                    <td className="px-6 py-4 border-r">
                      N3,000 X 5 subjects = N15,000
                    </td>
                    <td className="px-6 py-4 border-r">
                      N5,000 X 6 subjects = N30,000
                    </td>
                    <td className="px-6 py-4 border-r">
                      N5,000 X 5 subjects = N25,000
                    </td>
                    <td className="px-6 py-4 border-r">
                      N7,000 X 5 subjects = N35,00
                    </td>
                    <td className="px-6 py-4 border-r">
                      N7,000 X 5 subjects = N35,000
                    </td>
                  </tr>{" "}
                  <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Non-refundable Examination Admin fees
                    </th>
                    <td className="px-6 py-4 border-r">N5,000</td>
                    <td className="px-6 py-4 border-r">N5,000</td>
                    <td className="px-6 py-4 border-r">N5,000</td>
                    <td className="px-6 py-4 border-r">N5,000</td>
                    <td className="px-6 py-4 border-r">N5,000</td>
                    <td className="px-6 py-4 border-r">N5,000</td>
                  </tr>{" "}
                  <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 border-r font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Annual membership subscription
                    </th>
                    <td className="px-6 py-4 border-r">N3,000</td>
                    <td className="px-6 py-4 border-r">N3,000</td>
                    <td className="px-6 py-4 border-r">N3,000</td>
                    <td className="px-6 py-4 border-r">N3,000</td>
                    <td className="px-6 py-4 border-r">N3,000</td>
                    <td className="px-6 py-4 border-r">N3,000</td>
                  </tr>
                  <tr className="bg-white border dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 border-r font-bold text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      TOTAL
                    </th>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                    <td className="px-6 py-4 border-r font-bold">N26, 000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </TemplateContainer>
    </>
  );
};

export default Corporate;
