import React, { useState } from "react";
import { StaticImageData } from "next/image";
import GalleryModal from "./Gallery/GalleryModal";
import GalleryCard from "./Gallery/GalleryCard";
import nimn from "../../public/images/news_assets/nimn.jpg";

const data = [
  {
    id: 1,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 2,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 3,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 4,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 5,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 6,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 7,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
  {
    id: 8,
    image: nimn,
    description:
      "This is a placeholder for a future NIMN product, which will be available for purchase on this page. Stay tuned!",
  },
];

const Marketplace = () => {
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
        header="Marketplace"
      />
      <div className="flex justify-center p-[1em] mt-[2em] ">
        <div className="flex flex-col items-center">
          <p className="text-pri md:text-[2.5em] text-[1.2em] text-center font-bold mb-[1em] ">
            Market Place
          </p>

          <p className="text-pri md:text-[1.5em] text-[1em] text-center font-bold mb-[1em] ">
            Shop for your NIMN products
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

export default Marketplace;
