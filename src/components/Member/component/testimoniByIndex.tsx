
export const descriptions = [
    {
      description: "It is with great delight to tell you that the journey started like a joke when some friends were discouraging me from embarking on it. But with God, we came, we saw, and we conquered.",
      des: "Though the journey was not easy for me as I had to re-write a course for the third time before I succeeded."
    },
    {
      descrip: "The NIMN exam was indeed a standard exam as a Graduate of marketing I would attest to the fact that the course outline was indeed relevant to the practice of modern day Marketing and the challenges we do encounter in this Field of human endeavour.",
      des: "I will like to point to the fact that writing the PGD in Marketing Exams goes beyond reading the handouts to pass; the questions were designed from the practical perspective of marketing of which poor or little experience in the Discipline."
    }
  ];
  
  export const getDescriptionByIndex = (index:any) => descriptions[index % descriptions.length];
  
  export default getDescriptionByIndex;
  