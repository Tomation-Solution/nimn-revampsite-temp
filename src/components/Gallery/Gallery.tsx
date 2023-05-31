import React, { useState } from "react";
import GalleryCard from "./GalleryCard";
import gal_1 from "../../../public/images/gallery/gal_1.jpg";
import gal_2 from "../../../public/images/gallery/gal_2.png";
import gal_3 from "../../../public/images/gallery/gal_3.png";
import gal_4 from "../../../public/images/gallery/gal_4.jpg";
import gal_5 from "../../../public/images/gallery/gal_5.jpg";
import gal_6 from "../../../public/images/gallery/gal_6.jpg";
import gal_7 from "../../../public/images/gallery/gal_7.jpg";
import gal_8 from "../../../public/images/gallery/gal_8.jpg";
import gal_9 from "../../../public/images/gallery/gal_9.jpg";
import gal_10 from "../../../public/images/gallery/gal_10.jpg";
import gal_11 from "../../../public/images/gallery/gal_11.jpg";
import gal_12 from "../../../public/images/gallery/gal_12.jpg";
import gal_13 from "../../../public/images/gallery/gal_13.jpg";
import gal_14 from "../../../public/images/gallery/gal_14.jpg";
import gal_15 from "../../../public/images/gallery/gal_15.jpg";
import gal_16 from "../../../public/images/gallery/gal_16.png";
import gal_17 from "../../../public/images/gallery/gal_17.jpg";
import gal_18 from "../../../public/images/gallery/gal_18.jpg";
import gal_19 from "../../../public/images/gallery/gal_19.jpg";
import gal_20 from "../../../public/images/gallery/gal_20.jpg";
import gal_21 from "../../../public/images/gallery/gal_21.jpg";
import GalleryModal from "./GalleryModal";
import { StaticImageData } from "next/image";

const data = [
  {
    id: 1,
    image: gal_1,
    description: "",
  },
  {
    id: 2,
    image: gal_2,
    description: "",
  },
  {
    id: 3,
    image: gal_3,
    description: "",
  },
  {
    id: 4,
    image: gal_4,
    description: "",
  },
  {
    id: 5,
    image: gal_5,
    description: "",
  },
  {
    id: 6,
    image: gal_6,
    description: "",
  },
  {
    id: 7,
    image: gal_7,
    description: "",
  },
  {
    id: 8,
    image: gal_8,
    description: "",
  },
  {
    id: 9,
    image: gal_9,
    description: "",
  },
  // {
  //   id: 10,
  //   image: gal_10,
  //   description: "",
  // },
  // {
  //   id: 11,
  //   image: gal_11,
  //   description:
  //     "President NIMN Mr Tony Agenmonmen presenting Fellowship Award Certificate to Mrs Ibidunni Ituah-Ighodalo",
  // },
  // {
  //   id: 12,
  //   image: gal_12,
  //   description:
  //     "Mr Oriakhi Emmanuel responding on behalf of all the fellow awardees",
  // },
  // {
  //   id: 13,
  //   image: gal_13,
  //   description:
  //     "Prince Femi Oyewole 2nd Vice President giving the vote of thanks at the event",
  // },
  // {
  //   id: 14,
  //   image: gal_14,
  //   description:
  //     "Dr. Kabuoh Margaret Nma, receiving her Fellowship award certificate from Mr Tony Agenmonmen and the Chairman Body of Fellows NIMN, Mr Tunji Oyebanji",
  // },
  // {
  //   id: 15,
  //   image: gal_15,
  //   description:
  //     "Mrs Ibiduni Ituah-Ighodalo responding on behalf of the Honorary fellow awardees",
  // },
  // {
  //   id: 16,
  //   image: gal_16,
  //   description:
  //     "Mr. Obabori Peter Olusola receiving a handshake with the President NIMN Mr Tony Agenmonmen, after the presentation of the fellowship awards",
  // },
  // {
  //   id: 17,
  //   image: gal_17,
  //   description:
  //     "Dr. Issa Abdulraheem with the President NIMN Mr . Tony Agenmonmen, and Chairman Body of Fellows Mr. Tunji Oyebanji",
  // },
  // {
  //   id: 18,
  //   image: gal_18,
  //   description:
  //     "Professor Oduyoye Odutola decorated with the NIMN fellow Lapep pin",
  // },
  // {
  //   id: 19,
  //   image: gal_19,
  //   description:
  //     "Mrs Nkwoji Ngozi receiving her fellowship award certificate from the President NIMN Mr Tony Agenmonmen and Chairman Body of Fellows Mr. Tunji Oyebanji",
  // },
  {
    id: 19,
    image: gal_19,
    description: "",
  },
  {
    id: 20,
    image: gal_20,
    description: "",
  },
  {
    id: 21,
    image: gal_21,
    description: "",
  },
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<any>();
  const [modalDescription, setModalDescription] = useState<any>();

  const handleCardClick = ({ image, description }: any) => {
    setModalImage(image);
    setModalDescription(description);
    setModalOpen(true);
  };

  const handlePrevClick = () => {
    const currentIndex = data.findIndex((item) => item.image === modalImage);
    const prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      setModalImage(data[data.length - 1].image);
      setModalDescription(data[data.length - 1].description);
    } else {
      setModalImage(data[prevIndex].image);
      setModalDescription(data[prevIndex].description);
    }
  };

  const handleNextClick = () => {
    const currentIndex = data.findIndex((item) => item.image === modalImage);
    const nextIndex = currentIndex + 1;
    if (nextIndex > data.length - 1) {
      setModalImage(data[0].image);
      setModalDescription(data[0].description);
    } else {
      setModalImage(data[nextIndex].image);
      setModalDescription(data[nextIndex].description);
    }
  };

  return (
    <>
      <GalleryModal
        openNow={modalOpen}
        onClose={() => setModalOpen(false)}
        modalImage={modalImage}
        modalDescription={modalDescription}
        handlePrevClick={handlePrevClick}
        handleNextClick={handleNextClick}
      />
      <div className="flex justify-center p-[1em] mt-[1em] ">
        <div className="flex flex-col items-center">
          <p className="text-pri md:text-[2.5em] text-[1.2em] text-center font-bold mb-[1em] ">
            Gallery Photos
          </p>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
            {data.map((item) => (
              <GalleryCard
                key={item.id}
                image={item.image}
                description={item.description}
                onClick={() => handleCardClick(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
