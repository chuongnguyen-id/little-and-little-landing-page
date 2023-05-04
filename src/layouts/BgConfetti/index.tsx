import React from "react";

// image
import LeftFlags from "../../assets/image/Decor/LeftFlags.png";
import RightFlags from "../../assets/image/Decor/RightFlags.png";
import Confetti from "../../assets/image/Decor/Confetti.png";

const BgConfetti = () => {
  return (
    <>
      <img
        src={LeftFlags}
        alt="LeftFlags"
        className="absolute left-[-54px] top-[71px] z-10"
      />
      <img
        src={RightFlags}
        alt="RightFlags"
        className="absolute left-[1397.17px] top-[14.35px] z-10"
      />
      <img
        src={Confetti}
        alt="Confetti"
        className="absolute left-[63px] top-[-104px] z-0"
      />
    </>
  );
};

export default BgConfetti;
