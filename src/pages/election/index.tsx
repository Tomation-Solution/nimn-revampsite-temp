import ECP from "@/components/Election/ECP";
import ElectionNavigation from "@/components/Election/ElectionNavigation";
import React from "react";

const index = () => {
  return (
    <div>
      <ElectionNavigation />
      <div>
        <ECP />
      </div>
    </div>
  );
};

export default index;
