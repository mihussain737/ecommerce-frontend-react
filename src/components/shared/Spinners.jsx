import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinners = () => {
  return (
    <div className="flex items-center gap-2">
      <TailSpin
        visible={true}
        height="20"
        width="20"
        color="#ffffff"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
      <span>Loading...</span>
    </div>
  );
};

export default Spinners;
