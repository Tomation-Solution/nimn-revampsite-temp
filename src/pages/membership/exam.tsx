import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    title: "Associate Membership",
    paragraphs: [
      "Eligibility: Minimum of B.sc/HND in a relevant discipline plus 5 years working experience in a marketing or commercial function in a blue chip company or those adjudged to be equivalent.",
      "Programme Duration: 4 weekend programme on “Marketing Strategy in Practice”.Registration: N15,000",
      "Course fee inclusive of induction: N252,000",
    ],
  },
  {
    title: "Full Membership",
    paragraphs: [
      "Eligibility: Minimum of B.sc/HND in a relevant discipline and 5 years+ (Marketing Manager Level) experience in a marketing or commercial function in a blue-chip company or those adjudged to be equivalent.",
      "Programme Duration: 2 weekend programme on “Mastering Marketing Management”",
      "Registration: N15,000",
      "Course fee inclusive of induction: N378,000",
    ],
  },
  {
    title: "Fellow Membership",
    paragraphs: [
      "Marketing Directors, Commercial Directors, Sales Directors, etc in blue chip companies or those adjudged to be equivalent.",
      "Registration: N15,000",
      "Course fee inclusive of induction: N525,000",
    ],
  },
];
const data_2 = [
  {
    paragraph:
      "Membership of the Institute can also be achieved through successfully passing the qualifying examinations leading to the award of either the Chartered Graduate Diploma in Marketing or Chartered Post Graduate Diploma in Marketing.",
  },
  {
    title: "Graduate Members",
    paragraphs: [
      "Holders of the Chartered Graduate Diploma in Marketing certification are eligible to be inducted into the Institute as Graduate members after participation in the convocation ceremony.",
    ],
  },
  {
    title: "Associate Members",
    paragraphs: [
      "Holders of the Chartered Post Graduate Diploma in Marketing certification are eligible to be inducted into the Institute as Associate members after participation in the convocation ceremony.",
    ],
  },
];

const Paragraph = ({ item }: { item: any }) => {
  return (
    <div className="text-gray-600 font-medium text-justify leading-8 text-[18px] py-[10px]">
      {item.title && <p className=" text-pri font-bold">{item.title} - </p>}

      {item.paragraph && (
        <p className=" text-gray-600 font-medium">{item.paragraph} </p>
      )}

      {item.paragraphs &&
        item.paragraphs.map((point: any, index: number) => {
          return (
            <div key={index}>
              <p className="py-[.3em]">{point}</p>
            </div>
          );
        })}
    </div>
  );
};

const exam = () => {
  const [isPaymentModalOpen, setPaymentModalOpen] = useState(false);
  return (
    <>
      <PaymentFormModal
        openNow={isPaymentModalOpen}
        onClose={() => setPaymentModalOpen(false)}
      />
      <TemplateContainer>
        <>
          <div>
            <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
              Membership through Fast Track Executive
            </p>{" "}
            <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
              Membership Programme
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
          <div>
            <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
              Membership through Examination
            </p>{" "}
            <div>
              {data_2.map((item, index) => {
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
        </>
      </TemplateContainer>
    </>
  );
};

export default exam;
