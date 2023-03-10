// App.js

import React from 'react';
import EmblaCarousel from './component/tesimoneyCard';
import { EmblaOptionsType } from 'embla-carousel-react'


export default function App() {

  const OPTIONS: EmblaOptionsType = {
    inViewThreshold: 0,
    dragFree: true,
    containScroll: 'keepSnaps',
  }

  const descriptions = [
    {
      description: "It is with great delight to tell you that the journey started like a joke when some friends were discouraging me from embarking on it. But with God, we came, we saw, and we conquered.",
      des: "Though the journey was not easy for me as I had to re-write a course for the third time before I succeeded.",
      des2: "Thanks to NIMN for honouring me with the professional certificate in marketing. I am proud to say I am a Chartered Marketer."
    },
    {
      description: "The NIMN exam was indeed a standard exam as a Graduate of marketing I would attest to the fact that the course outline was indeed relevant to the practice of modern day Marketing and the challenges we do encounter in this Field of human endeavour.",
      des: "I will like to point to the fact that writing the PGD in Marketing Exams goes beyond reading the handouts to pass; the questions were designed from the practical perspective of marketing of which poor or little experience in the Discipline.",
      des2: "This enriches and upholds the standard of NIMN and what the Institute stands for.",
      des3: "I will recommend NIMN exams for anyone who wishes to attain the career heights in marketing."
    },
    {
      description: 'National Institute of Marketing of Nigeria is a marketing professional body to reckon with. As a graduate of accounting I got employed in a firm where I had to do Marketing for years now, and as a man learning on the job, it was seen as being difficult and tricky until I joined the Institute as a student member',
      des: 'The professional training given by the Institute gave a lot of revelations and explanations for what I do in my place of work and even more. And now I am positioned to teach others.',
      des2: 'I didn’t find it difficult to enroll as a postgraduate student, due to the fact that the members and staff of the institute are friendly and highly professional in their approach to issues; this friendly and professional approach was also applied is setting and conducting of examination.',
      des3: 'I truly feel honored having gone through this institution successful, thought it was challenging but it worth it. I am proud to say I am a graduate of the National Institute of Marketing of Nigeria (NIMN)'
    }
  ];

  return (
    <div>
<EmblaCarousel options={OPTIONS} descriptions={descriptions} />
    </div>
  );
}
