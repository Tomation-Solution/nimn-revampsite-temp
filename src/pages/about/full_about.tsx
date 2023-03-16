import TemplateContainer from "@/components/TemplateContainer";
import React from "react";

const data = [
  {
    paragraph:
      "The National Institute of Marketing of Nigeria (NIMN) is the body for professionals engaged in marketing and related fields as marketing practitioners, sales and marketing directors, customer relationship managers, media planners, channel developers, creative directors, value builders, trade marketing managers, commercial managers/directors, brand builders, entrepreneurs, enterprise builders, corporate and institutional governors, transformers, marketing and mass communication experts, general managers, and Chief Executive Officers.",
  },
  {
    paragraph:
      "The Institute was established by Act of the National Assembly no. 25 0f 2003 with a chartered status conferred on it, the responsibility to regulate and standardize marketing professional practice through the conduct of comprehensive professional examinations and certifications, training, retraining and consultancy services geared towards ensuring that members adopt a professional approach to marketing and other related areas of marketing activities.",
  },
  {
    paragraph:
      "Whilst new entrants into the profession are being developed through an intensive programme of formal learning in marketing structured courses in various academic institutions across the country on a full and part-time basis, qualified members are being retrained.",
  },
  {
    paragraph:
      "As provided in the Act, membership of the Institute is compulsory for all practitioners of the marketing profession. A person shall be deemed to practice as a marketer if in consideration of remuneration received or to be received and whether by himself or in partnership with any other persons, he:",
    bullets: [
      "Engages himself in the practice of marketing or hold himself out to the public as a marketer; or",
      "Renders professional service or assistance in, or about matters of principles or detail, relating to the practice of marketing; or",
      "Renders any other service which may, by regulation made by Council in consultation with the Minister, e designated as service constituting practice as a marketer.",
    ],
  },

  {
    paragraph:
      "Section 20(2) of the Act clearly makes it illegal to practice marketing without registering as a member of the Institute. It states as follows:",
  },
  {
    paragraph:
      "“If on or after the coming into force of this Act, any person who is not a member of the Institute practices or holds himself out to practice as a marketer for, or in expectation of reward or takes or uses any name, title, addition or description, implying that he is in practice as a marketer, he commits an offence”.",
    italics: true,
  },

  {
    paragraph:
      "In executing its mandate, the Institute continually seeks to deliver value to its core target groups:",
    points: [
      {
        title: "Members",
        description:
          "providing opportunities for continuous improvement of marketing skills to enable them to deliver outstanding results to their various organisations. We also seek to provide marketing professional empowerment through information, education and networking opportunities that will promote and enrich their professional and career advancement.",
      },
      {
        title: "Corporate members",
        description:
          "We strive to ensure the availability of highly skilled marketing professionals that will drive the achievement of their corporate goals and objectives. We also provide a platform for them to showcase their marketing excellence.",
      },
      {
        title: "Government",
        description:
          "We will deploy our marketing talents and tools to partner with government at all levels to design genuine programmes that will help in achieving the economic transformation of the country.",
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

const full_about = () => {
  return (
    <TemplateContainer>
      <div>
        <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700]   text-justify w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
          About NIMN
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
  );
};

export default full_about;
