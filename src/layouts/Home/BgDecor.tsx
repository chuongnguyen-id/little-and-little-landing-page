import React from "react";

// image
import AvatarGroup from "../../assets/image/Decor/AvatarGroup.png";
import HotAirBaloon1 from "../../assets/image/Decor/HotAirBaloon1.png";
import HotAirBaloon2 from "../../assets/image/Decor/HotAirBaloon2.png";
import HotAirBaloon3 from "../../assets/image/Decor/HotAirBaloon3.png";
import HotAirBaloon4 from "../../assets/image/Decor/HotAirBaloon4.png";
import HotAirBaloon5 from "../../assets/image/Decor/HotAirBaloon5.png";
import HotAirBaloon6 from "../../assets/image/Decor/HotAirBaloon6.png";

const BgDecor = () => {
  return (
    <>
      <img
        src={AvatarGroup}
        alt="AvatarGroup"
        className="absolute left-[1052px] top-[-23px] z-0"
      />
      <img
        src={HotAirBaloon1}
        alt="HotAirBaloon1"
        className="absolute left-[18px] top-[321px] z-0"
      />
      <img
        src={HotAirBaloon2}
        alt="HotAirBaloon2"
        className="absolute left-[42.03%] right-[50.47%] top-[16.58%] bottom-[64.86%] z-0"
      />
      <img
        src={HotAirBaloon3}
        alt="HotAirBaloon3"
        className="absolute left-[53.59%] right-[40.31%] top-[8.61%] bottom-[75.63%] z-0"
      />
      <img
        src={HotAirBaloon4}
        alt="HotAirBaloon4"
        className="absolute left-[91.6%] right-[-1.98%] top-[34.15%] bottom-[40.22%] z-0"
      />
      <img
        src={HotAirBaloon5}
        alt="HotAirBaloon5"
        className="absolute left-[88.18%] right-[3.18%] top-[74.82%] bottom-[3.71%] z-0"
      />
      <img
        src={HotAirBaloon6}
        alt="HotAirBaloon6"
        className="absolute left-[32.81%] right-[61.46%] top-[94.78%] bottom-[1%] z-0"
      />
    </>
  );
};

export default BgDecor;
