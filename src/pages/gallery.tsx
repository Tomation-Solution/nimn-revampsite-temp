import Gallery from "@/components/Gallery/Gallery";
import GalleryCorousel from "@/components/GalleryCarousel";
import React from "react";

const gallery = () => {
  return (
    <div>
      <GalleryCorousel />
      <Gallery />
    </div>
  );
};

export default gallery;
