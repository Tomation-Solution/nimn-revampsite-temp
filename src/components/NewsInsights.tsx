import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { news_data } from "@/assets/data";
import Image from "next/image";
import PaymentFormModal from "./Member/component/PaymentForm";

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

const NewsInsights = () => {
  const router = useRouter();
  const { index }: any = router.query;
  const news_id: number = index ? parseInt(index) : 1;
  const news = news_data[news_id];
  console.log(index);
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
          <div>
            <Image
              src={news?.image}
              alt="news image"
              width={700}
              height={400}
            />
          </div>
          <p className="md:text-[32px] text-[20px]  lg:text-[30px]  font-[700]   text-justify w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            {news?.title}
          </p>
          <div className="flex gap-4 bg-pri_var_2 ">
            <p className="text-white text-[14px] ">{news?.author}</p>
            <p className="text-white font-bold text-[14px]text-white ">
              {news?.date}
            </p>
          </div>
          <div>
            {news?.paragraphs?.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-[18px] text-gray-900 font-medium my-[1em]">
                    {item}
                  </p>
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

export default NewsInsights;
