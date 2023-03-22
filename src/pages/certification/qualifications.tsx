import PaymentFormModal from "@/components/Member/component/PaymentForm";
import TemplateContainer from "@/components/TemplateContainer";
import React, { useState } from "react";

const data = [
  {
    paragraph:
      "The NIMN professional qualifications in marketing have three (3) distinct stages and the curricula have been structured to provide a solid foundation for those desirous of having a thorough in marketing and becoming Chartered Marketers.",
  },
  {
    title: "Eligibility to Sit for the Examinations",
    paragraph:
      "Prospective candidates must have registered as student members and are up to date with payment of annual membership subscription.",
  },

  {
    paragraph: "Minimum Requirements for the Examination",

    bullets: [
      "Candidates must be at least 16 years.",
      "He/she must possess a minimum of five (5) passes at credit level at not more than two (2) sittings in the Senior School Certificate Examination (SSCE) or General Certificate of Education (GCE)- “O” Level or National Examination Council (NECO).",
      "The five (5) passes at credit level must include Mathematics and English Language.",
    ],
  },
  {
    paragraph: "1. FOUNDATION CERTIFICATE IN MARKETING",
    tagline: "Entry Qualifications",

    bullets: [
      "Holders of Ordinary level SSCE/GCE/NECO with five (5) passes at credit level, including.",
      "Mathematics and English language, in not more than two (2) sittings.",
      "Holders of the National Diploma (ND) in disciplines outside of Marketing and Business Administration.",
      "Matured candidates with relevant work experience.",
    ],

    parts: [
      {
        title: "Part 1",
        points: [
          "Principles of Marketing",
          "Principles of Selling",
          "Elements of Statistics",
          "Business Communications",
          "Economics and Commercial Studies",
        ],
      },
      {
        title: "Part 2",
        points: [
          "Practice of Marketing",
          "Management for Marketing",
          "Principles of Accounting",
          "Business Law",
          "Business Environment",
        ],
      },
    ],
  },

  {
    paragraph: "2. CHARTERED GRADUATE DIPLOMA IN MARKETING",
    tagline: "Entry Qualifications",

    bullets: [
      "Holders of the NIMN Foundation Certificate in Marketing",
      "Holders of National Diploma (ND) in Marketing or Business Administration",
      "Holders of B.sc, BA, HND in disciplines outside of Marketing, Business Administration.",
    ],

    parts: [
      {
        title: "Part 1",
        points: [
          "Quantitative Business Analysis",
          "Consumer Behaviour",
          "Marketing Research",
          "Industrial and Agricultural Marketing",
          "Promotional Practice",
        ],
      },
      {
        title: "Part 2",
        points: [
          "Direct Marketing",
          "Electronic Marketing",
          "Service Marketing",
          "Sales Management",
          "Financial Accounting",
        ],
      },
    ],
  },
  {
    paragraph: "3. CHARTERED POST GRADUATE DIPLOMA IN MARKETING",
    tagline: "Entry Qualifications",

    bullets: [
      "Holders of the NIMN Chartered Graduate Diploma in Marketing",
      "Holders of B.sc or HND in Marketing or Business Administration.",
      "Holders of B.sc, BA, or HND in disciplines outside of Marketing or Business Administration; but with M.sc/MBA in Marketing.",
    ],

    parts: [
      {
        title: "Part 1",
        points: [
          "Strategic Marketing Management 1",
          "Entrepreneurship & Small Business Management",
          "Distribution and Logistics Management",
          "Product Development & Brand Management",
          "International Marketing",
        ],
      },
      {
        title: "Part 2",
        points: [
          "Strategic Marketing Management 2",
          "Marketing Information System",
          "Integrated Marketing Communication",
          "Global Marketing",
          "Marketing Analysis & Decision Making (Case-Study)",
        ],
      },
    ],
  },

  {
    paragraph: "EXEMPTIONS",

    bullets: [
      "Holders of M.sc or MBA in Marketing in addition to B.sc or HND in Marketing or Business Administration are exempted from the part 1 of the Chartered Post Graduate Diploma examination. However, they will pay the exemption fees for the part 1 subjects.",
      "Holders of B.sc or HND in other disciplines, but with M.sc or MBA in Marketing may be eligible to start from the part 1 of the Chartered Post Graduate Diploma in Marketing.",
      "There are subject by subject exemptions in the Foundation Certificate and Chartered Graduate Diploma examinations; depending on the qualifications of the candidates. However, they will pay the exemption fees for the subjects in which they are exempted.",
    ],
  },
  {
    paragraph: "EXEMPTION PROCEDURE",

    bullets: [
      "Candidates applying for exemption should forward their academic transcripts/statement of results to the Registrar of the National Institute of Marketing of Nigeria (NIMN).",
      "Candidates will be notified of the exemptions they have been granted and the exemption fees to be paid.",
    ],
  },
];

const Paragraph = ({ item }: { item: any }) => {
  return (
    <div className="text-gray-600 font-medium text-justify leading-6 text-[15px] py-[10px]">
      {item.title && (
        <p className="text-pri font-bold text-justify">{item.title}</p>
      )}
      {item.tagline && (
        <p className="text-pri font-bold text-justify">{item.tagline}</p>
      )}
      <p className={` ${item.bullets && "text-pri font-bold"}`}>
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

      {item.parts &&
        item.parts.map((part: any, index: number) => {
          return (
            <div key={index}>
              <div className="py-[.6em]">
                <span className="font-bold text-justify">
                  {part.title.toUpperCase()} -{" "}
                </span>
                <ol className="list-disc list-outside ml-[1.5em]">
                  {part.points.map((point: any, index: number) => {
                    return (
                      <li className="py-[.6em]" key={index}>
                        {point}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          );
        })}
    </div>
  );
};

const qualifications = () => {
  return (
    <>
      <TemplateContainer>
        <div>
          <p className="md:text-[32px] text-[24px]  lg:text-[40px]  font-[700] w-full md:text-pri text-white  md:p-0  p-[.8em] md:bg-transparent  bg-pri">
            Professional Qualifications In Marketing
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

export default qualifications;
