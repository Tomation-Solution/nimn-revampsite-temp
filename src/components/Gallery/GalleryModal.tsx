import Modal from "@/components/components/Modals";
import { Dialog } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

type ModalProps = {
  openNow: any; // You should replace 'any' with the actual type of 'openNow'
  onClose: any; // You should replace 'any' with the actual type of 'onClose'
  modalImage: StaticImageData;
  modalDescription: string;
  handlePrevClick: () => void;
  handleNextClick: () => void;
};
type ModalOpenerProps = {
  openNow: boolean;
  onClose: () => void;
};
const GalleryModal: React.FC<ModalProps> = ({
  openNow,
  onClose,
  modalImage,
  modalDescription,
  handlePrevClick,
  handleNextClick,
}) => {
  // const handleSubmit = async (values,{setSubmitting,resetForm})=>(
  //       consol.log(values)
  //        )

  return (
    <div>
      <Modal openNow={openNow} onClose={onClose}>
        <Dialog.Title
          as="h3"
          className=" text-3xl text-center font-bold leading-6  "
        >
          Gallery
        </Dialog.Title>

        <div className="flex items-center relative">
          <button
            onClick={handlePrevClick}
            className="text-[2em] absolute backdrop-sepia-0 p-[.2em] rounded-full backdrop-contrast-100 shadow-2xl bg-slate-300 "
          >
            <FiChevronLeft />
          </button>
          <div className="text-center flex flex-col items-center  my-[2em]">
            <Image
              width={800}
              height={660}
              src={modalImage}
              alt={modalDescription}
            />
            <p className=" text-lg mt-4  text-center font-semibold text-gray-500">
              {modalDescription}
            </p>
          </div>
          <button
            onClick={handleNextClick}
            className="text-[2em] absolute backdrop-sepia-0 p-[.2em] rounded-full backdrop-contrast-100 shadow-2xl bg-slate-300 right-0"
          >
            <FiChevronRight />
          </button>{" "}
        </div>
      </Modal>
    </div>
  );
};

export default GalleryModal;
